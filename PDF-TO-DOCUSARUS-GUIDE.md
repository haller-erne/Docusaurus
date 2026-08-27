# Guide: Converting PDFs to Docusaurus Markdown/MDX

This guide documents how to convert existing PDF documentation into Docusaurus-compatible Markdown/MDX files for the Haller + Erne documentation site.

## Table of contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Conversion workflow](#conversion-workflow)
4. [Post-conversion cleanup](#post-conversion-cleanup)
5. [MDX pitfalls and fixes](#mdx-pitfalls-and-fixes)
6. [Asset handling](#asset-handling)
7. [Frontmatter and metadata](#frontmatter-and-metadata)
8. [Integration into the site](#integration-into-the-site)
9. [Validation](#validation)
10. [Checklist](#checklist)

## Overview

Docusaurus v3 uses MDX 3 by default. MDX is strict about JSX-like syntax: any `<word>` token that looks like an HTML/JSX tag must either be valid JSX or escaped. PDF converters produce plain Markdown, but legacy documentation often uses angle brackets for placeholders like `<installation-folder>`, `<ctrl>`, or `<languagecode>`, which MDX tries to parse as JSX elements and fails.

The simplest and most reliable way to handle these conversions is to tell Docusaurus to treat the converted file as CommonMark (`format: md`) instead of MDX. CommonMark still supports standard Markdown, tables, images, and links, but does not parse `<...>` as JSX.

## Prerequisites

- A PDF-to-Markdown conversion tool. Options include:
  - `pdf2md` / `marker` / `nougat`
  - Adobe Acrobat export
  - Pandoc: `pandoc input.pdf -t markdown -o output.md`
  - Any custom pipeline already in use in this repo
- A working local Docusaurus dev/build environment
- The converted `.md` file and any extracted image assets

## Conversion workflow

1. **Convert the PDF** using your tool of choice.
2. **Create a destination folder** under the correct Docusaurus content plugin path, for example:
   - `ogs-docs/admin/` for installation/admin guides
   - `ogs-docs/tool-config/` for tool configuration guides
   - `ogs-docs/user/` for end-user guides
   - `ogs-docs/features/` for application notes and feature highlights
   - `ogs-docs/reference/` for API/format references
3. **Copy the Markdown file** into the destination and rename it to a URL-friendly slug, e.g. `tool-configuration-guide.md`.
4. **Copy image assets** into a `resources/` subfolder next to the Markdown file, e.g. `ogs-docs/tool-config/resources/`.
5. **Rewrite image references** so they point to the `resources/` subfolder:
   ```markdown
   <!-- converter output -->
   ![](_page_5_Picture_3.jpeg)

   <!-- corrected -->
   ![](resources/_page_5_Picture_3.jpeg)
   ```

## Post-conversion cleanup

1. **Add frontmatter** at the top of the file:
   ```markdown
   ---
   title: Tool configuration guide
   sidebar_label: Tool configuration guide
   mdx:
     format: md
   ---
   ```
   The `mdx.format: md` line is the key setting that prevents MDX JSX errors.

2. **Fix title casing** if the converter produced odd casing like `Installing Ogs`.

3. **Remove or simplify auto-generated table-of-contents blocks** if they are just page-number references from the PDF. Docusaurus will generate a right-hand TOC from headings automatically.

4. **Review tables.** PDF table-to-Markdown conversion often produces messy or misaligned tables. Fix them by hand or remove them if they are not useful.

5. **Check headings.** Converters sometimes create every line as a heading. Normalize to a logical `h1` → `h2` → `h3` hierarchy.

## MDX pitfalls and fixes

| Pitfall | Example | Fix |
|---|---|---|
| Placeholder angle brackets | `<installation-folder>` | Use `mdx.format: md` frontmatter, or replace with backticks: `` `<installation-folder>` `` |
| Key combinations | `<ctrl>+<ins>` | Replace with backticks: `` `<ctrl>+<ins>` `` |
| Autolinks with backslashes | `[https://github.com/...\)](...)` | Fix to normal Markdown link syntax |
| Stray HTML-like tags | `<languagecode>`, `<version>` | Either escape as `&lt;languagecode&gt;` or use `mdx.format: md` |
| Inline HTML from converter | `<span id="page-3-0"></span>` | Allowed in CommonMark (`format: md`) but must be valid JSX in MDX. Prefer removing page anchors or converting to Markdown headings |
| Curly quotes / special characters | `“Mode”` | Usually fine, but verify encoding is UTF-8 |

### When to use `format: md` vs. full MDX cleanup

Use `format: md` when:

- The document is long and contains many `<...>` placeholders.
- The document does not need interactive React components.
- You want a quick, reliable conversion with minimal cleanup.

Convert to proper MDX when:

- The document needs Docusaurus-specific features (tabs, admonitions, code blocks with titles, etc.).
- You have time to manually replace all stray angle brackets.
- The page is intended to be highly interactive or reuse React components.

## Asset handling

1. Place images in a `resources/` folder next to the Markdown file.
2. Use relative paths:
   ```markdown
   ![Alt text](resources/_page_5_Picture_3.jpeg)
   ```
3. Supported formats: `.png`, `.jpg`, `.jpeg`, `.gif`, `.svg`, `.webp`.
4. If a file has many assets, consider naming them semantically after conversion rather than keeping `_page_X_Picture_Y.jpeg` names.

## Frontmatter and metadata

Minimum recommended frontmatter:

```markdown
---
title: Page title
sidebar_label: Short label
mdx:
  format: md
---
```

Optional fields:

- `description:` for SEO
- `tags:` for search/filtering
- `sidebar_position:` if the page needs explicit ordering

Do **not** use `id` or `slug` in shared/submodule content per project conventions.

## Integration into the site

1. Add the page to the appropriate sidebar file, e.g. `sidebarsOgs.ts`:
   ```typescript
   {type: 'doc', id: 'tool-config/tool-configuration-guide', label: 'Tool configuration guide'},
   ```

2. Update any index/overview pages that list the new section.

3. Update cross-links from other pages if the PDF replaces or supplements an existing page.

## Validation

1. Run a production build to catch broken links and MDX errors:
   ```bash
   npm run build
   ```
2. Fix any broken links reported by Docusaurus.
3. Serve the static build locally:
   ```bash
   npx docusaurus serve --dir build --port 4000
   ```
4. Open `http://localhost:4000/Docusaurus/` and navigate to the new page.
5. Check:
   - Headings render correctly
   - Images load
   - Tables are readable
   - Sidebar navigation is correct

## Checklist

- [ ] PDF converted to Markdown
- [ ] Markdown file placed in the correct `ogs-docs/...` folder
- [ ] File renamed to a URL-friendly slug
- [ ] Frontmatter added with `mdx.format: md`
- [ ] Image assets copied to `resources/` subfolder
- [ ] Image references rewritten to `resources/...`
- [ ] Tables cleaned up
- [ ] Headings normalized
- [ ] Page added to `sidebarsOgs.ts`
- [ ] Related index/overview pages updated
- [ ] `npm run build` passes with no broken links
- [ ] Page visually inspected in served build
