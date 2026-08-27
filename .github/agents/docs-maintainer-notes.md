# Docs-Maintainer Agent Notes

This file is updated by the `docs-maintainer` agent whenever it learns something new about the project.

## 2026-08-25 — Initial discovery

- **Framework**: Docusaurus v3 with TypeScript config (`docusaurus.config.ts`).
- **Shared content**: `docs/shared/` is a Git submodule (`shared-docs`).
  - Contains `stahlwille/` and `opex-gwk/` user guides.
  - Must never contain `id` or `slug` frontmatter.
  - Must use relative links.
- **Sidebars**: `sidebars.ts` (main), `sidebarsOgs.ts`, `sidebarsHeOPTester.ts`.
- **Scripts**: `npm start`, `npm run build` (strict link checking), `npm run clear`.
- **Private sibling**: `my-docs private` runs on port 3001; shares `docs/shared/`.
- **Lua docs workflow**: Tested `lua-language-server --doc` export.
  - Executable located at: `C:\Users\Maher.Sairawan\.vscode\extensions\sumneko.lua-3.19.1-win32-x64\server\bin\lua-language-server.exe`
  - Output dir must exist before running; produces `doc.md` and `doc.json`.
  - No `.lua` files exist in this repo currently; export was verified with a sample in `lua-sample/`.
- **PDF extraction tools present**: Marker, MinerU, and `@sylphx/citra` have all been used in this repo; exact working command depends on input/path quoting.
