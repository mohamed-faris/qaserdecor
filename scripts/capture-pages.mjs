import { writeFile } from "node:fs/promises";

const pages = [
  { url: "http://127.0.0.1:4173/", output: "/tmp/qaser-home-desktop.png", width: 1440, height: 1100 },
  { url: "http://127.0.0.1:4173/", output: "/tmp/qaser-home-mid-desktop.png", width: 1440, height: 1000, scrollY: 1100 },
  { url: "http://127.0.0.1:4173/", output: "/tmp/qaser-home-work-desktop.png", width: 1440, height: 1000, scrollY: 2550 },
  { url: "http://127.0.0.1:4173/ar/", output: "/tmp/qaser-home-mobile-ar.png", width: 390, height: 844, mobile: true },
  { url: "http://127.0.0.1:4173/blog/", output: "/tmp/qaser-blog-desktop.png", width: 1440, height: 1000 },
  { url: "http://127.0.0.1:4173/ar/blog/gypsum-board-handover-checklist/", output: "/tmp/qaser-article-mobile-ar.png", width: 390, height: 844, mobile: true }
];

function connect(url) {
  const socket = new WebSocket(url);
  let nextId = 0;
  const pending = new Map();
  const events = [];

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const request = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
    } else if (message.method) {
      events.push(message);
    }
  });

  const opened = new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", reject, { once: true });
  });

  return {
    opened,
    events,
    send(method, params = {}) {
      const id = ++nextId;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    },
    close() { socket.close(); }
  };
}

async function delay(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

for (const page of pages) {
  const target = await fetch("http://127.0.0.1:9222/json/new?" + encodeURIComponent("about:blank"), { method: "PUT" }).then((response) => response.json());
  const cdp = connect(target.webSocketDebuggerUrl);
  await cdp.opened;
  await cdp.send("Page.enable");
  await cdp.send("Runtime.enable");
  await cdp.send("Log.enable");
  await cdp.send("Emulation.setDeviceMetricsOverride", {
    width: page.width,
    height: page.height,
    deviceScaleFactor: 1,
    mobile: Boolean(page.mobile)
  });
  await cdp.send("Page.navigate", { url: page.url });
  await delay(900);
  await cdp.send("Runtime.evaluate", {
    expression: "document.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('revealed')); window.scrollTo(0," + (page.scrollY || 0) + ")"
  });
  await delay(300);
  const validation = await cdp.send("Runtime.evaluate", {
    expression: "(() => { const menu = document.querySelector('[data-menu]'); const nav = document.querySelector('[data-nav]'); let menuWorks = true; if (" + Boolean(page.mobile) + " && menu && nav) { menu.click(); menuWorks = nav.classList.contains('open') && menu.getAttribute('aria-expanded') === 'true'; menu.click(); } return { overflow: document.documentElement.scrollWidth > window.innerWidth, menuWorks, h1: document.querySelectorAll('h1').length }; })()",
    returnByValue: true
  });
  const state = validation.result.value;
  if (state.overflow || !state.menuWorks || state.h1 !== 1) {
    throw new Error(page.url + " failed browser checks: " + JSON.stringify(state));
  }
  const screenshot = await cdp.send("Page.captureScreenshot", { format: "png", fromSurface: true });
  await writeFile(page.output, Buffer.from(screenshot.data, "base64"));

  const problems = cdp.events.filter((event) =>
    event.method === "Runtime.exceptionThrown" ||
    (event.method === "Log.entryAdded" && event.params.entry.level === "error")
  );
  console.log(page.output + " " + page.width + "x" + page.height + " runtime_errors=" + problems.length + " layout=passed");
  cdp.close();
  await fetch("http://127.0.0.1:9222/json/close/" + target.id, { method: "PUT" });
}
