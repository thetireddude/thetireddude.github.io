# Omar comic portfolio

A static, GitHub Pages-ready portfolio with a comic-noir visual style.

## Local preview

Run a static file server from the repository root, for example:

```powershell
npx serve .
```

Then open the URL it prints. A server is required because the site uses JavaScript modules.

## Update portfolio content

Edit [`js/data.js`](js/data.js) to add, remove, reorder, or update projects and experience entries. The same project data powers the project cards, the cover timeline, and the project-detail modal.

Project artwork currently uses the original CSS mockups. Replace those variants with images in `assets/images/projects/` when screenshots are available.

## Deploy to GitHub Pages

Push this repository to GitHub, then select **Settings → Pages → Deploy from a branch**, choose the branch containing this repository, and set the folder to **/(root)**. The deployable entry point is `index.html`.

## Original mockup

The supplied, unmodified single-file mockup is retained at `source/omar-comic-portfolio (5).html`.
