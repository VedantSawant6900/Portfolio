# Vedant Sawant Portfolio

Static portfolio site for Vedant Sawant.

## Overview

This repository contains the public portfolio for Vedant Sawant, focused on backend engineering, data systems, MLOps, and applied AI work. The site is implemented as a static multi-page HTML/CSS/JavaScript project and can be deployed directly to any static host.

## Pages

- Home
- Experience
- Projects
- Certifications
- Education
- Contact

## Local Development

Run a local static server from the repository root:

```bash
python3 -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

## Project Structure

- `index.html` — homepage
- `experience/`, `projects/`, `certifications/`, `education/`, `contact/` — section pages
- `site-assets/` — shared styles, favicon, images, and static runtime assets
- `robot-hero.js` — animated 3D hero model
- `portfolio.js` — shared page behavior
- `images/` — project artwork

## Deployment

The site does not require a build step. Deploy the repository contents as static files.
