# Somya Bharti — Personal Portfolio

A multi-page, responsive portfolio built with semantic HTML5, CSS and vanilla JavaScript.

## Pages
- `index.html` — Home
- `about.html` — About / education
- `projects.html` — Projects
- `skills.html` — Skills
- `contact.html` — Accessible contact form

## Run locally
No build tool is required.

1. Extract the project.
2. Open `index.html` in a browser.

For a local development server, use VS Code Live Server or any static HTTP server.

## Accessibility
The project includes:
- Semantic HTML5 landmarks and heading hierarchy
- Skip-to-content link
- Keyboard-visible focus indicators
- Accessible mobile navigation with `aria-expanded`
- Proper form labels and validation messages
- `aria-live` status feedback
- Responsive layouts
- `prefers-reduced-motion` support
- Sufficiently distinct text/background colors
- External links marked with `rel="noopener noreferrer"`

## Customization
Update the content in the HTML files and the design tokens at the top of `assets/styles.css`.
The contact form is intentionally frontend-only; connect it to a backend or form service before using it in production.
