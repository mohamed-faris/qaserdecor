# File changelog

## Design and behaviour

- `assets/css/styles.min.css` — new luxury-editorial responsive design system with RTL and reduced-motion support.
- `assets/js/app.min.js` — mobile navigation, progressive reveal and current-year behaviour.
- `index.html`, `ar/index.html` — focused English and Arabic homepages.
- `about/`, `ar/about/` — scope-accurate company pages.
- `services/`, `ar/services/` — four bilingual gypsum-only service areas: ceilings, walls, lighting integration and style/execution.

## Journal and SEO

- `blog/`, `ar/blog/` — journal indexes plus 11 matched article pairs (22 articles).
- `sitemap.xml` — all 36 canonical URLs with reciprocal language alternates.
- `_redirects` — clean-URL redirects for every generated page.
- `_headers` — security headers and cache policy for non-fingerprinted assets.
- `site.webmanifest` — focused gypsum-board description and matching theme colours.

## Source and validation

- `scripts/content.mjs` — bilingual service and article source content.
- `scripts/build-site.mjs` — deterministic static-page, sitemap and redirect generator.
- `scripts/check-site.mjs` — structural, metadata, schema, link, article-depth and sitemap checks.
- `scripts/capture-pages.mjs` — Chrome DevTools desktop/mobile visual and interaction checks.
