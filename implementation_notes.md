# Implementation Notes

## Current Portfolio Structure

The active portfolio is now a static Ateeb-style single-page site in the repository root.

Public site files:

- `index.html`
- `styles.css`
- `script.js`
- `assets/favicon.svg`
- `assets/avatar.svg`
- `assets/social-preview.svg`
- `site.webmanifest`
- `robots.txt`

Research and planning files:

- `portfolio_profile_research_questions.md`
- `portfolio_content.md`
- `portfolio_data.json`
- `asset_checklist.md`
- `verification_needed.md`

## What Was Replaced

The previous Create React App / Soumyajit / Tisya portfolio implementation was removed:

- `src/`
- `public/`
- `build/`
- `Images/`
- old resume PDFs
- inherited profile image
- inherited project thumbnails
- old favicon assets
- `package-lock.json`
- old React dependency tree

The new site uses no bundled framework and has no build step.

## Ateeb-Style Template Direction

The layout uses the visual structure from the Ateeb reference:

- dark first-viewport hero
- sticky glass navigation
- animated neural/canvas background
- profile card
- glass-card sections
- metric cards
- experience timeline
- tabbed skill groups
- project cards
- contact form that opens a prefilled email

All public content has been replaced with Vedant-specific content.

## Published Content

The public site includes:

- Vedant Sawant name and headline
- State College, Pennsylvania location
- GitHub, LinkedIn, and email links
- about copy
- impact metrics
- Geisinger, Meditab, Penn State, and Madras Scientific Research Foundation experience
- backend/data/ML/cloud skill groups
- MeetMind, Reinforcement Learning Maze Solver, and Improved MeaCap project cards
- Penn State and University of Mumbai education

## Not Published Yet

These remain intentionally omitted from the public site:

- phone number
- exact street address
- visa or sponsorship status
- confidential healthcare details
- internal screenshots or dashboards
- unverified certifications
- unsupported project metrics
- Agentic RAG Assistant
- Deep Learning Classifier for LLM Identification
- resume PDF download

## Local Run

From the `Portfolio/` folder:

```bash
python3 -m http.server 3000
```

Then open:

```text
http://localhost:3000
```

The `npm start` script runs the same static server.

## Validation Run

Completed checks:

- `node --check script.js`
- `python3 -m json.tool package.json`
- `python3 -m json.tool site.webmanifest`
- `python3 -m json.tool portfolio_data.json`
- public-file scan for old Ateeb/Tisya/Soumyajit/n8n/RPA/UiPath/Dubai strings
- `npm run build`
- `curl -I http://localhost:3000`
- `curl -I http://localhost:3000/assets/avatar.svg`

## Next Implementation Items

- Add a public-safe resume PDF when approved.
- Add a real profile photo if Vedant wants one.
- Add project screenshots or short demo GIFs.
- Add a deployed URL to `og:url` when the final hosting target is chosen.
- Optionally move content into `portfolio_data.json` driven rendering if the site becomes larger.
