# Incident: lualib-api docs rendered raw compiled MDX / failed MDX build

**Date:** 2026-08-29 · **Status:** Resolved · **Severity:** Site section broken (content unreadable)

**Affected:** all 38 pages of the `lualib-api` docs section (`/lualib-api/...`).

**Resolution commits:**
- `my-docs` `f0c87e9` — move docs out of default docs folder (the fix).
- `lualib` `7f13814` — sync README guidance.

**ADRs:** [`0001-commonmark-for-lualib-api.md`](0001-commonmark-for-lualib-api.md) (superseded) → [`0002-lualib-api-outside-docs.md`](0002-lualib-api-outside-docs.md) (accepted).

---

## Symptoms

Two distinct symptoms, both initially blamed on the Markdown content:

1. **Build failure** — with default MDX parsing, the build failed on many
   lualib-api `.md` files with:

   ```
   Unexpected FunctionDeclaration in code: only import/exports are supported
   ```

2. **Broken page body** — setting `markdown.format: 'detect'` made the build pass,
   but every lualib-api page then rendered the **compiled MDX module prologue as
   visible body text** instead of the document:

   ```
   export const frontMatter = { title: 'annotations/OGS', ... };
   export const contentTitle = undefined;
   export {default as metadata} from '@site/.docusaurus/...json'
   export const toc = [{ "value": "Character", ... }];
   import {Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs} from "react/jsx-runtime";
   ```

   The page chrome (title, sidebar, breadcrumbs) rendered fine because those come from
   plugin metadata, but the actual documentation content was garbage.

---

## Root cause

The dedicated `@docusaurus/plugin-content-docs` instance for lualib-api was configured
with:

```ts
{
  id: 'lualib-api',
  path: 'docs/lualib-api',   // <-- nested inside the default docs plugin folder
  routeBasePath: 'lualib-api',
  sidebarPath: './sidebarsLualib.ts',
}
```

`docs/lualib-api` sits **inside** `docs/`, which is the default `classic` preset docs
plugin's content folder. **Both** docs plugins therefore scanned, registered, and
compiled the same 38 files. This was confirmed directly: the production build emitted
the same pages under **two** route trees — `/docs/lualib-api/...` (default plugin) and
`/lualib-api/...` (dedicated plugin).

The double registration poisoned the dedicated instance's MDX module pipeline. The
compiled MDX output (which begins with the ESM `export const frontMatter/toc` prologue)
was fed back through the loader / rendered as source, so:

- under **MDX** parsing, the prologue's `function _createMdxContent(props)` token is a
  bare `FunctionDeclaration` → build error (symptom 1);
- under **CommonMark** (`format: 'detect'`) parsing, the prologue is tolerated as text
  and dumped into the page body → the visible garbage (symptom 2).

It was never a Markdown-syntax problem.

---

## Why it was hard to find (dead ends investigated)

The investigation ruled out, with experiments, each of these hypotheses:

| Hypothesis | Why it was suspected | How it was disproved |
|---|---|---|
| Unbalanced ` ```lua ` fences in generated `.md` | errors pointed at fenced blocks | files compile cleanly standalone through the real Docusaurus MDX processor |
| The converter's bare-`function` safety net was insufficient | errors named `FunctionDeclaration` | a **plain-text** doc (no code/lua/tables) leaked the prologue too |
| Relative `.md`→`.md` links caused a webpack `require()` cycle | `transformLinks` rewrites them | rewrote all links to URL-paths; leak persisted; many leaking pages have **no** links |
| Front matter presence triggered it | leaking files have front matter | stripped front matter → still leaked (`export const frontMatter = {}`) |
| Body not starting with an `# H1` heading | clean `ogs` files start with `#` | added an H1 → still leaked |
| The dedicated instance's config (missing `remarkMath`/`rehypeKatex`) | the only config diff vs `ogs` | the **default** plugin's own copy leaked identically |
| `exclude: ['lualib-api/**']` on the default plugin | would stop the double scan | stopped it but broke SSR (`DocItem reading 'id'`) — proved the dedicated instance was corrupt on its own, pointing back to nesting |

The decisive experiment: a minimal plain-text page under `docs/lualib-api` still leaked,
while sibling-folder sections (`ogs-docs/`, `heOPTester/`) were always clean. Moving the
content out from under `docs/` eliminated both symptoms at once.

---

## Fix

1. **Move the content to a sibling folder** so only the dedicated plugin owns it:

   ```bash
   git mv docs/lualib-api lualib-api-docs
   ```

2. **Point the plugin at the new path:**

   ```ts
   {
     id: 'lualib-api',
     path: 'lualib-api-docs',   // sibling of docs/, NOT inside it
     routeBasePath: 'lualib-api',
     sidebarPath: './sidebarsLualib.ts',
   }
   ```

3. **Remove `markdown.format: 'detect'`** — it was only masking the build error while
   breaking the rendered output. With the root cause fixed, default MDX parsing builds
   cleanly (zero `FunctionDeclaration` errors) and renders correctly.

4. **Update the sync target** — `Sync-LualibApiDocs.ps1 -DocusaurusDocsPath` now points
   at `lualib-api-docs`.

The converter (`ConvertTo-DocusaurusDocs.ps1`) needed **no changes** — the committed
pipeline produces clean output once the folder is no longer double-registered.

---

## Verification

Clean `npm run build` (no `detect`):

- `BUILD SUCCESS`, **0** `FunctionDeclaration` errors, no `DocItem`/`reading 'id'` SSR errors.
- Spot-checked `annotations-OGS`, `json_ftp`, `annotations-modules-ogs.mod`, and the
  section index — all render headings, anchored links, and syntax-highlighted Lua code
  blocks; no `export const frontMatter` leak.
- Other sections (`ogs`, `heoptester`, main `docs`) unaffected.

## Prevention / rule of thumb

> **Never nest one `plugin-content-docs` instance's `path` inside another's content
> folder.** Each docs instance must own a disjoint top-level folder (this is why
> `ogs-docs/` and `heOPTester/` were always fine).

If a docs section ever renders its compiled `export const frontMatter...` prologue as
body text, or fails MDX builds with `Unexpected FunctionDeclaration` across many
generated files, check for **double plugin registration / overlapping `path`s first** —
not the Markdown content.
