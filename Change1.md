# Change 1: Make the site easier to navigate

Branch: `improve-navigation`

## Problem

- The home page only points visitors onward through one sentence of inline links, and it skips the About page entirely. A visitor has to notice the header navigation to find the rest of the site.
- A mistyped or outdated URL shows GitHub's generic "404 – File not found" page. It has none of the site's design or navigation, so visitors have no obvious way back.

## Goals

1. Give the home page a clear "Explore" section that links to About, Work Experience, and Contact, each with a one-line description of what the visitor will find there.
2. Add a custom `404.html` page that uses the site's layout, explains that the page wasn't found, and links back to every page.
3. Keep content separate from design: both the home page links and the 404 links come from `_data/navigation.yml`, so adding or renaming a page in one place updates the header, the home page, and the 404 page together.

## Plan

- Add a short `description` to each entry in `_data/navigation.yml`.
- Create a reusable `_includes/page-links.html` that renders the navigation data as a list of links, skipping the page the visitor is already on.
- Use that include on the home page (replacing the inline sentence) and on the new `404.html`.
- Style the links as simple bordered cards in `assets/css/portfolio.css`, using the existing color tokens so they work in both light and dark themes, in one column on phones and three columns on wider screens.
- Exclude `Change1.md` from the published site in `_config.yml`.

## Out of scope

- No new pages, JavaScript, or libraries.
- No changes to the placeholder biography or experience text.

## How to check it

- Home page shows three linked cards below the introduction; each opens the right page.
- Visiting a URL that doesn't exist (for example `/missing-page/`) shows the site's own 404 page with working links back.
- Layout holds at 375px and 1280px widths, in light and dark themes.
