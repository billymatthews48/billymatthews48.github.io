# Personal Portfolio Site Plan

## Plan

Build a static, GitHub Pages user site for `billymatthews48.github.io`, with the complete Jekyll website at the repository root and an empty `baseurl`. Use Markdown pages with YAML front matter, reusable layouts and includes, semantic HTML, responsive CSS, accessible contrast, and a light/dark theme toggle.

The site will include Home, About, Work Experience, and Contact pages, shared navigation and footer, SEO metadata, a sitemap, and a favicon. Keep it to Jekyll, Markdown, HTML, CSS, and minimal JavaScript, with no backend, form processing, database, framework, or trackers. Include a README for editing content, local preview, GitHub Pages publishing from `main` and `/` (root), and Lighthouse checks.

## Content and assumptions

- No reference websites were provided; use the selected modern, clean font direction.
- The LinkedIn URL was provided, but its contents will not be fetched. About and experience copy will remain clearly marked placeholders until text or a résumé is supplied.
- Do not display an email address. The Contact page can link to the supplied LinkedIn profile.
- Interpret `billymatthews48.github.io` as the GitHub username `billymatthews48`; correct this if it is not right.
- Root-level Jekyll publishing is incompatible with retaining the generated API and Canvas sample apps. Proceeding will replace those scaffold files with the static site.

## Verification

Confirm the Jekyll site files are directly in the repository root, links use URL filters and work with an empty `baseurl`, the site builds for GitHub Pages, and layouts remain usable at 375px and 1280px. Check Lighthouse scores against the requested 90+ targets for Performance, Accessibility, Best Practices, and SEO.
