# Change 2: Replace placeholders with my real introduction and experience

Branch: `add-real-content`

## Problem

Every page still shows bracketed placeholders: the site name is `[Your Name]`, the home page introduction is a template, the About page is a note, and Work Experience lists a sample `[Job title] — [Employer]` entry. A visitor can't tell who the site belongs to or what I've done.

## Goals

1. Show my name across the site: header, footer, page titles, and search/social metadata.
2. Give the home page a short, accurate introduction.
3. Write an About page covering my background, education, and interests.
4. List my real work experience at Bain & Company, OneLeap, and City Football Group, with the results I can stand behind, and say that I'm returning to Bain.
5. Keep the Contact page pointing to LinkedIn only.

## Source and rules

- Content comes from my résumé (November 2025). My Bain & Company Summer Associate role (June–August 2026, San Francisco Bay Area) postdates the résumé, so it comes from my LinkedIn profile, along with my confirmation that I'm returning to Bain. Nothing else is added.
- Figures that are redacted on the résumé (for example `$XXXk` or `$Xm`) are left out rather than estimated. Only figures that are stated in full are used: the NPS increase of 30, the 4.8/5 satisfaction rating, about 50 stakeholders, 25 executives, 13 clubs, and the $1 trillion+ AUM of the bank client.
- My phone number and email address stay off the public site.

## Plan

- Update `title`, `name`, `description`, and `social.name` in `_config.yml`.
- Rewrite `index.md`, `about.md`, `work-experience.md`, and `contact.md` and their front matter descriptions.
- Show each employer on Work Experience as a card using the existing `.experience-entry` and `.experience-meta` styles, keeping the content in Markdown (`markdown="1"`) so it stays easy to edit.
- Update the README's editing notes now that the placeholders are gone.
- Exclude `Change2.md` from the published site in `_config.yml`.

## Out of scope

- No layout, navigation, or JavaScript changes.
- No new pages or projects.

## How to check it

- No `[` placeholder text remains on any page.
- Each page's browser tab title and meta description use my name.
- Work Experience shows two employer cards with roles, dates, and bullet points.
- Layout holds at 375px and 1280px in light and dark themes.
