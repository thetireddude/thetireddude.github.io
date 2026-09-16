# Omar comic portfolio

A static, GitHub Pages-ready portfolio with a comic-noir visual style.

## Local preview

Run a static file server from the repository root, for example:

```powershell
npx serve .
```

Then open the URL it prints. A server is required because the site uses JavaScript modules.

## Update portfolio content

All editable portfolio content lives in [`js/data.js`](js/data.js). The page renders these exports automatically, so you generally do not need to edit `index.html` or `js/main.js` when changing your information.

### Projects

Each object in `projects` creates a card in the Projects section and its detail modal.

```js
{
  id: "unique-project-id",
  title: "Project Name",
  type: "Hackathon Project",
  period: "September 2026",
  coverLabel: "SEPTEMBER 2026 - SHORT DESCRIPTION",
  sfx: "ACTION!",
  summary: "Short description shown on the project card.",
  tags: ["REACT", "NODE.JS"],
  links: [{ label: "GitHub", url: "https://github.com/username/repository" }],
  paragraphs: ["First modal paragraph.", "Second modal paragraph."],
  artwork: "project",
  rank: null,
  images: [{ src: "assets/images/projects/project-id/screenshot.png", alt: "Describe what the screenshot shows" }]
}
```

- `id` must be unique and should use lowercase letters and hyphens.
- `rank` controls the compact project list on the cover. Use a number to display the project there; lower numbers appear first. Use `null` to show it only in the full Projects section.
- `images` controls both the card preview and the modal gallery. The first image becomes the card preview. Add image files beneath `assets/images/projects/<project-id>/` and provide meaningful `alt` text for each.
- An empty `images: []` list displays the generic artwork and **NO IMAGES YET** in the modal.
- `links` supports any destination, such as GitHub, a live demo, Devpost, or a demo video.

### Experience

Each object in `experiences` renders one entry in the Experience section.

```js
{
  periodStart: "JUL. 2026",
  periodEnd: "AUG. 2026",
  title: "Software Engineering Intern",
  organization: "Example Company - Remote",
  sfx: "KAPOW!",
  highlights: ["Achievement or responsibility."],
  tags: ["NEXT.JS", "TYPESCRIPT"]
}
```

Use `highlights: []` when there are no bullets to show. Entries appear in the order they are written in the array.

### Skills

Each object in `skills` creates a Skills-section card. Skills are grouped by their `category`.

```js
{ name: "TypeScript", category: "Languages", glyph: "TS", level: 4, rank: 1 }
```

- `level` is a number from `1` to `5` and controls the filled proficiency markers.
- `glyph` is the short text or symbol shown on the card.
- `rank` controls the highlighted skill chips on the cover; lower numbers appear first. Set it to `null` to keep the skill out of that cover panel.

### About and contact information

The `about` object supplies both About Me text blocks and the right-hand detail boxes.

```js
export const about = {
  abstract: ["Cover-panel paragraph."],
  description: ["Full About Me section paragraph."],
  details: [{ label: "Location", value: "San Luis Obispo" }]
};
```

The `contact` object supplies both contact areas. Update `label`, `display`, `href`, and `icon` for each link. Set `external: true` for destinations that should open in a new tab; keep email links as `external: false`.

```js
export const contact = {
  links: [
    { label: "GitHub", display: "github.com/username", href: "https://github.com/username", icon: "&lt;/&gt;", external: true }
  ]
};
```

### Resume and headshot

- Replace `assets/documents/resume.pdf` to update the resume viewer and download button.
- Replace `assets/images/headshot.jpg` to update the About Me portrait.

After editing `data.js` or adding assets, refresh the local preview, verify the affected card and modal, then commit and push the changes.
## Deploy to GitHub Pages

Push this repository to GitHub, then select **Settings → Pages → Deploy from a branch**, choose the branch containing this repository, and set the folder to **/(root)**. The deployable entry point is `index.html`.

## Original mockup

The supplied, unmodified single-file mockup is retained at `source/omar-comic-portfolio (5).html`.
