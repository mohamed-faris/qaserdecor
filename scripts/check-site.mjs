import { access, readFile, readdir } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { articles } from "./content.mjs";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    if (entry.name === ".git") continue;
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await walk(path));
    else files.push(path);
  }
  return files;
}

function occurrences(source, pattern) {
  return [...source.matchAll(pattern)].length;
}

const allFiles = await walk(root);
const htmlFiles = allFiles.filter((path) => path.endsWith(".html"));
const seenTitles = new Map();
const seenDescriptions = new Map();
const seenCanonicals = new Map();

for (const file of htmlFiles) {
  const html = await readFile(file, "utf8");
  const relative = file.slice(root.length + 1);
  if (occurrences(html, /<h1(?:\s|>)/g) !== 1) errors.push(relative + ": expected exactly one h1");
  if (occurrences(html, /<title>/g) !== 1) errors.push(relative + ": expected exactly one title");
  if (!/<meta name="description" content="[^"]{80,}">/.test(html)) errors.push(relative + ": missing or short description");
  if (!/<link rel="canonical" href="https:\/\/qaserdecor\.com\//.test(html)) errors.push(relative + ": missing canonical");
  if (!/hreflang="en-AE"/.test(html) || !/hreflang="ar-AE"/.test(html)) errors.push(relative + ": incomplete hreflang");
  if (!/<main id="main">/.test(html)) errors.push(relative + ": missing main landmark");
  if (!/data-menu/.test(html) || !/data-nav/.test(html)) errors.push(relative + ": missing mobile navigation hooks");
  if (relative.startsWith("ar/") && !/<html lang="ar-AE" dir="rtl">/.test(html)) errors.push(relative + ": Arabic direction/language missing");
  if (!relative.startsWith("ar/") && !/<html lang="en-AE" dir="ltr">/.test(html)) errors.push(relative + ": English direction/language missing");
  if (/<img\b(?![^>]*\balt="[^"]+")[^>]*>/i.test(html)) errors.push(relative + ": image missing non-empty alt text");

  const title = html.match(/<title>([^<]+)<\/title>/)?.[1];
  const description = html.match(/<meta name="description" content="([^"]+)">/)?.[1];
  const canonical = html.match(/<link rel="canonical" href="([^"]+)">/)?.[1];
  for (const [kind, value, map] of [["title", title, seenTitles], ["description", description, seenDescriptions], ["canonical", canonical, seenCanonicals]]) {
    if (!value) continue;
    if (map.has(value)) errors.push(relative + ": duplicate " + kind + " also used by " + map.get(value));
    else map.set(value, relative);
  }

  for (const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(match[1]); } catch (error) { errors.push(relative + ": invalid JSON-LD: " + error.message); }
  }

  for (const match of html.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const target = match[1];
    if (target.endsWith("/")) {
      try { await access(join(root, target, "index.html")); } catch { errors.push(relative + ": broken internal path " + target); }
    } else {
      try { await access(join(root, target)); } catch { errors.push(relative + ": broken asset path " + target); }
    }
  }
}

const englishArticles = htmlFiles.filter((path) => path.includes("/blog/") && !path.includes("/ar/blog/") && !path.endsWith("/blog/index.html"));
const arabicArticles = htmlFiles.filter((path) => path.includes("/ar/blog/") && !path.endsWith("/ar/blog/index.html"));
if (englishArticles.length < 10) errors.push("fewer than 10 English articles");
if (arabicArticles.length < 10) errors.push("fewer than 10 Arabic articles");

const wordCounts = [];
for (const article of articles) {
  for (const lang of ["en", "ar"]) {
    const words = article[lang].sections.flatMap((section) => section[1]).join(" ").trim().split(/\s+/).length;
    wordCounts.push({ lang, slug: article.slug, words });
    const minimum = lang === "ar" ? 170 : 200;
    if (words < minimum) errors.push(lang + "/" + article.slug + ": article body is below " + minimum + " words");
  }
}

const sitemap = await readFile(join(root, "sitemap.xml"), "utf8");
const sitemapUrls = occurrences(sitemap, /<url>/g);
if (sitemapUrls !== htmlFiles.length) errors.push("sitemap URL count " + sitemapUrls + " does not match HTML page count " + htmlFiles.length);

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Pages checked: " + htmlFiles.length);
console.log("English articles: " + englishArticles.length);
console.log("Arabic articles: " + arabicArticles.length);
console.log("Shortest article body: " + Math.min(...wordCounts.map((item) => item.words)) + " words");
console.log("Sitemap URLs: " + sitemapUrls);
console.log("Structural checks: passed");
