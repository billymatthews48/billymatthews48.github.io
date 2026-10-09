# Personal Portfolio

This repository is a static Jekyll user site for GitHub Pages. The website files live at the repository root so GitHub Pages can publish the `main` branch from `/(root)` without a separate build workflow.

## Update the site

- Edit `index.md`, `about.md`, `work-experience.md`, and `contact.md` to update page content.
- Replace every bracketed placeholder with details you have supplied and verified. Do not leave sample roles or invented achievements in the published site.
- Update `title`, `name`, and `description` in `_config.yml` when you have the final public name and introduction.
- Update the LinkedIn URL in `_config.yml` and `contact.md` if needed. The current link is the one provided for this site.
- Edit `_data/navigation.yml` to change the page navigation.
- Adjust colors, spacing, and typography in `assets/css/portfolio.css`. The theme button switches between light and dark mode; its choice is stored only in the visitor's browser.
- Keep `baseurl` empty for a GitHub user site at `billymatthews48.github.io`.

## Preview and build locally

Install Ruby and Bundler, then run:

```sh
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000/`. To check a one-time production build:

```sh
bundle exec jekyll build
```

The generated `_site/` folder is a build output and is intentionally excluded from version control.

## Publish with GitHub Pages

1. Make sure the GitHub repository is named `billymatthews48.github.io`.
2. Push the site files to the `main` branch.
3. In the repository's **Settings → Pages**, choose **Deploy from a branch**, select `main`, and select `/(root)`.
4. GitHub Pages will build and publish the Jekyll site from the repository root.

No `baseurl` or manual publishing build step is needed for this user site.

## Run Lighthouse

After previewing the site locally or opening the published site, use Chrome DevTools → **Lighthouse**. Run the Performance, Accessibility, Best Practices, and SEO categories on both the home page and any page with substantial content. Aim for 90 or higher in each category; review the report and fix any flagged issues before publishing.
