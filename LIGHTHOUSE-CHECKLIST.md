# Lighthouse 100 checklist

This project is designed to target 100 Accessibility and SEO in Lighthouse.

## Accessibility coverage
- Semantic `header`, `nav`, `main`, `section`, `article`, `aside`, and `footer`
- One clear page-level `h1`
- Logical heading hierarchy
- Skip-to-content link
- Keyboard-visible focus states
- Keyboard-accessible mobile menu
- Escape key closes mobile menu and returns focus
- Accessible form labels and validation
- `aria-invalid` and `aria-live` feedback
- Descriptive link text
- Decorative initials marked `aria-hidden`
- Responsive layout
- `prefers-reduced-motion` support
- 44px minimum button target

## SEO coverage
- Unique page titles
- Unique meta descriptions
- Canonical links
- Open Graph metadata
- `robots.txt`
- `sitemap.xml`
- Web manifest
- Mobile viewport
- Crawlable static HTML
- Descriptive headings and body copy

## Before production
Replace `https://example.com/` in the canonical tags, Open Graph URLs, and sitemap/robots with the real deployed domain.

Lighthouse scores can vary by hosting, redirects, third-party resources and deployment configuration. The project itself contains no third-party scripts or tracking resources.
