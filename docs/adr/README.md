# Architecture Decision Records & Incident Reports

Decisions and post-mortems for this documentation site.

## ADRs

| # | Title | Status |
|---|-------|--------|
| [0001](0001-commonmark-for-lualib-api.md) | Use CommonMark for lualib-api docs | **Superseded** by 0002 |
| [0002](0002-lualib-api-outside-docs.md) | Move lualib-api docs out of the default docs folder | **Accepted** |

## Incident reports

| Date | Title | Status |
|------|-------|--------|
| 2026-08-29 | [lualib-api docs rendered raw compiled MDX / failed MDX build](incident-2026-08-29-lualib-api-mdx-leak.md) | Resolved |

---

**Headline lesson (0002 / the incident):** never nest one `plugin-content-docs`
instance's `path` inside another's content folder — double registration corrupts the
MDX output. Each docs instance must own a disjoint top-level folder.
