# Agam Singh Saini — Data Science Portfolio

Live: **https://doombuoy.github.io/Portfolio/** · Resume: **https://doombuoy.github.io/Portfolio/Agam_Singh_Saini_Resume.pdf**

A cinematic, data-driven portfolio ("Noise in. Signal out."). Every chart on the site is drawn from real project results — no stock imagery.

## What's in this repo

```
.github/workflows/deploy-site.yml   builds the resume PDF + the site, publishes to GitHub Pages
resume/resume.tex                   the resume (LaTeX) — the single source for the PDF
site/                               the website (Astro)
  src/content/work/*.md             one file per project: summary, metrics, links, case study
  src/pages/index.astro             home page sections (about, journey, community, contact…)
  src/pages/work/[slug].astro       case-study page template
  src/components/Hero.astro         scroll-driven live model-fit hero
  src/components/Artifact.astro     per-project charts and diagrams
  src/styles/global.css             colours, fonts, shared styles
  src/assets/images/                images (resized + converted to WebP at build)
  public/                           favicon, link-preview image
```

## Update the resume

1. Edit `resume/resume.tex`.
2. Commit and push to `master`.

GitHub Actions compiles it with `pdflatex`, puts the PDF on the site as `Agam_Singh_Saini_Resume.pdf` (the **Resume** buttons link to it) and redeploys, in about 2 minutes. The compiled PDF is also attached to each workflow run under **Actions → the run → Artifacts**.

Keep the file `pdflatex`-compatible: no `fontspec`, and write symbols as LaTeX (`R$^2$`, `$\sim$`) rather than pasting Unicode like `²`.

## Update the website

Add or edit a project in `site/src/content/work/`, or change text in `site/src/pages/index.astro`, then push. To preview locally:

```bash
cd site
npm install      # first time only
npm run dev      # http://localhost:4321/Portfolio/
```

The resume PDF isn't stored in git. For the Resume button to work locally, compile `resume/resume.tex` and copy the PDF to `site/public/Agam_Singh_Saini_Resume.pdf`.

## Design

- **Colours (60 · 30 · 10):** ink `#121110` · ivory `#FAF7F2` · burgundy `#6B1E2E`
- **Fonts:** Archivo (display), Space Grotesk (body), JetBrains Mono (data)
- **Stack:** Astro (static) · Motion (scroll reveals) · plain CSS
