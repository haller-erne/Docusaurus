# lualib API docs — Context

## Purpose
Auto-generated reference documentation for the OGS lualib workspace, produced by `lua-language-server --doc` and published to this Docusaurus site.

## Terms
- **LLS output**: Markdown produced by `lua-language-server --doc`.
- **Splitter**: `Docs/split-lualib-docs.ps1` in the lualib repo; splits `doc.md` into per-source `by-file/*.md`.
- **Converter**: `ConvertTo-DocusaurusDocs.ps1`; post-processes LLS Markdown into Docusaurus-compatible Markdown.
- **MDX hazard**: content that MDX parses as JSX/JavaScript, such as a bare Lua `function` line.
- **CommonMark mode**: Docusaurus configuration that parses `.md` files as standard Markdown without MDX/JSX.

## Decisions
- See `docs/adr/0001-commonmark-for-lualib-api.md`.
