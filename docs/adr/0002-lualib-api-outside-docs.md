# Move lualib-api docs out of the default docs folder

Supersedes [0001 — Use CommonMark for lualib-api docs](0001-commonmark-for-lualib-api.md).

## Context

The lualib API docs are produced by `lua-language-server --doc`, split, and converted
by `ConvertTo-DocusaurusDocs.ps1` (lualib repo), then synced into this site and served
by a dedicated `@docusaurus/plugin-content-docs` instance (`id: 'lualib-api'`).

Two symptoms were observed and originally blamed on the Markdown content:

1. **Build failure** — `Unexpected FunctionDeclaration in code: only import/exports are
   supported` on many lualib-api `.md` files when `markdown.format` was not `detect`.
2. **Broken page body** — with `markdown.format: 'detect'`, the build passed but every
   lualib-api page rendered the compiled MDX module prologue as visible text
   (`export const frontMatter = {...}; export const toc = [...]; import {Fragment...}`),
   instead of the rendered document.

## Root cause

Neither symptom was caused by the Markdown. The dedicated plugin's `path` was
`docs/lualib-api`, which lives **inside** the default `classic` preset docs plugin's
folder (`docs/`). Both plugins therefore scanned and compiled the same files
(verified: the build emitted pages under both `/docs/lualib-api/...` and
`/lualib-api/...`). This double registration poisoned the dedicated instance's MDX
module output, so the compiled ESM prologue leaked into the rendered page and, under
MDX parsing, the prologue's `function` tokens broke the build.

Confirmed by experiment:

- A minimal plain-text doc (no code fences, no Lua) placed under `docs/lualib-api`
  still leaked the prologue → content-independent.
- The default-plugin copy (`/docs/lualib-api/...`) leaked identically → not specific to
  the dedicated instance's options.
- `ogs-docs/` and `heOPTester/` (sibling folders, not under `docs/`) render cleanly.
- Moving the content to a sibling folder eliminated both symptoms and let us drop
  `markdown.format: 'detect'` entirely.

## Decision

- Move the lualib-api docs from `docs/lualib-api/` to the sibling folder
  `lualib-api-docs/` (same pattern as `ogs-docs/` and `heOPTester/`).
- Point the `lualib-api` plugin's `path` at `lualib-api-docs`.
- Remove `markdown.format: 'detect'` so all `.md` files are parsed as MDX again
  (Docusaurus default). No per-instance `exclude` and no CommonMark workaround.

## Consequences

- lualib-api pages render correctly (headings, code blocks, anchors, TOC) and the
  build passes with zero `FunctionDeclaration` errors.
- The converter (`ConvertTo-DocusaurusDocs.ps1`) no longer needs any MDX-hazard
  workarounds for this site; its safety-net wrapping of bare Lua `function` lines is
  harmless but not load-bearing.
- Rule of thumb: **never nest one content-docs plugin's `path` inside another's.** Each
  docs instance must own a disjoint top-level folder.
- The sync script's `-DocusaurusDocsPath` must target the new sibling folder.

Status: accepted.
