# Agam Singh Saini — Data Science Portfolio

Live: **https://doombuoy.github.io/Portfolio/**

A cinematic, data-driven portfolio ("Noise in. Signal out."). Every chart on the site is drawn from real project results — no stock imagery.

- **Stack:** [Astro](https://astro.build) (static) · [Motion](https://motion.dev) for scroll reveals · plain CSS
- **Colours (60 · 30 · 10):** ink `#121110` · ivory `#FAF7F2` · burgundy `#6B1E2E`
- **Fonts:** Archivo (display), Space Grotesk (body), JetBrains Mono (data)

## Run it locally

```bash
cd site
npm install      # first time only
npm run dev      # http://localhost:4321/Portfolio/
```

`npm run build` writes the production site to `site/dist`, and `npm run preview` serves that build.

## Where things live

| What | Where |
|---|---|
| Projects (one Markdown file each, with metrics and links) | `site/src/content/work/*.md` |
| Home page sections | `site/src/pages/index.astro` |
| Case-study pages | `site/src/pages/work/[slug].astro` |
| Scroll-driven model-fit hero | `site/src/components/Hero.astro` |
| Per-project charts and diagrams | `site/src/components/Artifact.astro` |
| Colours, fonts, shared styles | `site/src/styles/global.css` |
| Images (resized and converted to WebP at build) | `site/src/assets/images/` |
| Resume PDF | `site/public/Agam_Singh_Saini_Resume.pdf` |

## Deploy

Pushing to `master` runs `.github/workflows/deploy-site.yml`, which builds `site/` and publishes it to GitHub Pages
(repository **Settings → Pages → Source: GitHub Actions**).
