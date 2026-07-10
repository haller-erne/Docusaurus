# OGS MkDocs → Docusaurus Migration Audit

> Generated: 2026-07-10 (re-audited after origin sync)  
> Source project: `ogs-1` (MkDocs Material)  
> Target instance: `my-docs/ogs-docs` (Docusaurus v3 plugin `@docusaurus/plugin-content-docs`, route `/ogs`)  
> Audit method: strict source-only comparison against `ogs-1/mkdocs.yml` nav and `ogs-1/docs/` file tree.

---

## 1. Executive Summary

The OGS Docusaurus instance (`/ogs`) builds cleanly after the latest sync. The remaining gaps are small and well-defined:

- **Source nav entries with no source file**: `appnotes/sharedconfig.md` is referenced in `ogs-1/mkdocs.yml` but does not exist in `ogs-1/docs/`.
- **Renamed files**: 5 pages were migrated as `.mdx` in Docusaurus while the source still uses `.md`:
  - `tools/openprotocol/nexo.md` → `nexo.mdx`
  - `tools/misc/keyence-iv4.md` → `keyence-iv4.mdx`
  - `tools/misc/oetiker.md` → `oetiker.mdx`
  - `tools/misc/wenglor-weqube.md` → `wenglor-weqube.mdx`
  - `tools/positioning/positioning-art-dtrack.md` → `positioning-art-dtrack.mdx`
- **Missing CSS**: `css/neoteroi-mkdocs.css` is in source but not migrated to `src/css/`.
- **Docusaurus-only pages**: `appnotes/branding.md`, `tools/openprotocol/crane.md`, `tools/openprotocol/gehmeyr.md`, `tools/openprotocol/gwk.old.md`, `tools/positioning/positioning-digital.md`, `tools/positioning/positioning-io.md`.
- **All `hl_lines` attributes** have been stripped from code fences.

All source pages referenced in the current `ogs-1/mkdocs.yml` nav are now present in `ogs-docs/` and linked in `sidebarsOgs.ts`, except `sharedconfig.md` which is absent from the source tree itself.- MkDocs image attribute lists (`{ align=right }`, `{ width="300", align=right }`) are not supported by Docusaurus MDX and have been stripped from newly migrated pages.
- Unescaped angle-bracket placeholders (`<dbname>`, `<domain>`, `<project>`, etc.) that caused MDX parse/SSG errors have been wrapped in backticks.
---

## 2. Per-Document Traceability Matrix

| # | Source path (`ogs-1/docs/...`) | Migrated path (`my-docs/ogs-docs/...`) | Sidebar (`sidebarsOgs.ts`) | Status | Notes / Remediation |
|---|----------------------------------|----------------------------------------|------------------------------|--------|----------------------|
| 1 | `index.md` | `index.md` | ✅ Home | Migrated | |
| 2 | `tools/README.md` | `tools/README.md` | ✅ Overview | Migrated | |
| 3 | `tools/remote-tool.md` | `tools/remote-tool.md` | ✅ Overview | Migrated | |
| 4 | `tools/openprotocol/README.md` | `tools/openprotocol/README.md` | ✅ Overview | Migrated | |
| 5 | `tools/openprotocol/nexo.md` | `tools/openprotocol/nexo.mdx` | ✅ Nexo/Nexo2 | Migrated | Renamed `.mdx`. |
| 6 | `tools/openprotocol/sys350-cs351.md` | `tools/openprotocol/sys350-cs351.md` | ✅ CS351 | Migrated | |
| 7 | `tools/openprotocol/sys350-ke350.md` | `tools/openprotocol/sys350-ke350.md` | ✅ KE350 | Migrated | |
| 8 | `tools/openprotocol/opexplus.md` | `tools/openprotocol/opexplus.md` | ✅ OPEXplus | Migrated | |
| 9 | `tools/openprotocol/gwk.md` | `tools/openprotocol/gwk.md` | ✅ GWK OP22/OP+ | Migrated | |
| 10 | `tools/openprotocol/pf6-pf8.md` | `tools/openprotocol/pf6-pf8.md` | ✅ Atlas Copco PowerFocus 4000/6000/8 | Migrated | |
| 11 | `tools/openprotocol/mtc.md` | `tools/openprotocol/mtc.md` | ✅ Atlas Copco MicroTorque | Migrated | |
| 12 | `tools/openprotocol/sturtevant.md` | `tools/openprotocol/sturtevant.md` | ✅ Sturtevant 400mp/TCVe2 | Migrated | |
| 13 | `tools/openprotocol/amt.md` | `tools/openprotocol/amt.md` | ✅ AMT/EST SX Wifi tools | Migrated | |
| 14 | `tools/openprotocol/cleco.md` | `tools/openprotocol/cleco.md` | ✅ Cleco Wifi tools | Migrated | |
| 15 | `tools/openprotocol/makita.md` | `tools/openprotocol/makita.md` | ✅ Makita Wifi tools | Migrated | |
| 16 | `tools/openprotocol/hstechnik.md` | `tools/openprotocol/hstechnik.md` | ✅ HS-Technik NutBee riveting tool | Migrated | |
| 17 | `tools/non-openprotocol/ngineric.md` | `tools/non-openprotocol/ngineric.md` | ✅ n-gineric | Migrated | |
| 18 | `tools/non-openprotocol/doga-wifi.md` | `tools/non-openprotocol/doga-wifi.md` | ✅ Doga BM-series | Migrated | |
| 19 | `tools/non-openprotocol/stahlwille.md` | `tools/non-openprotocol/stahlwille.md` | ✅ Stahlwille Manoskop 766 WiFi | Migrated | |
| 20 | `tools/misc/gui-input.md` | `tools/misc/gui-input.md` | ✅ OGS GUI input | Migrated | |
| 21 | `tools/misc/aioi-pick2light.md` | `tools/misc/aioi-pick2light.md` | ✅ AIOI Pick2Light | Migrated | |
| 22 | `tools/misc/gesipa-mqtt.md` | `tools/misc/gesipa-mqtt.md` | ✅ Gesipa riveting tool | Migrated | |
| 23 | `tools/misc/sylvac.md` | `tools/misc/sylvac.md` | ✅ Sylvac Meters | Migrated | |
| 24 | `tools/misc/oetiker.md` | `tools/misc/oetiker.mdx` | ✅ Oetiker EPC01 pincer | Migrated | Renamed `.mdx`. |
| 25 | `tools/misc/keyence-iv4.md` | `tools/misc/keyence-iv4.mdx` | ✅ Keyence IV4 AI Vision sensor | Migrated | Renamed `.mdx`. |
| 26 | `tools/misc/hikrobot-vm.md` | `tools/misc/hikrobot-vm-tcp.md` (id: `hikrobot-vm-tcp`) | ✅ HikRobot VisionMaster | Migrated | File ID is `hikrobot-vm-tcp` in Docusaurus; sidebar updated. |
| 27 | `tools/misc/wenglor-weqube.md` | `tools/misc/wenglor-weqube.mdx` | ✅ Wenglor weQube Smart camera | Migrated | Renamed `.mdx`. |
| 28 | `tools/positioning/README.md` | `tools/positioning/README.md` | ✅ Overview | Migrated | |
| 29 | `tools/positioning/positioning-referencing.md` | `tools/positioning/positioning-referencing.md` | ✅ Referencing | Migrated | |
| 30 | `tools/positioning/positioning-art-dtrack.md` | `tools/positioning/positioning-art-dtrack.mdx` | ✅ ART SmartTrack/DTrack | Migrated | Renamed `.mdx`. |
| 31 | `tools/positioning/positioning-art-verpose.md` | `tools/positioning/positioning-art-verpose.md` | ✅ ART Verpose | Migrated | |
| 32 | `tools/positioning/positioning-robot-urdf.md` | `tools/positioning/positioning-robot-urdf.md` | ✅ URDF Robot FK Positioning | Migrated | |
| 33 | `tools/misc/socket-tray.md` | `tools/misc/socket-tray.md` | ✅ Socket trays | Migrated | |
| 34 | `tools/misc/projector.md` | `tools/misc/projector.md` | ✅ Projector | Migrated | |
| 35 | `dataoutput/xmlfile.md` | `dataoutput/xmlfile.md` | ✅ End-of-process (XML) file | Migrated | |
| 36 | `dataoutput/printout.md` | `dataoutput/printout.md` | ✅ Printout and label printing | Migrated | |
| 37 | `dataoutput/traceability.md` | `dataoutput/traceability.md` | ✅ Traceability | Migrated | |
| 38 | `dataoutput/eventlog.md` | `dataoutput/eventlog.md` | ✅ Event logging | Migrated | |
| 39 | `v3/getting-started.md` | `v3/getting-started.md` | ✅ Getting Started | Migrated | |
| 40 | `v3/lua/eventlog.md` | `v3/lua/eventlog.md` | ✅ Eventlog | Migrated | |
| 41 | `v3/lua/webbrowser.md` | `v3/lua/webbrowser.md` | ✅ Web browsers | Migrated | |
| 42 | `v3/lua/webserver.md` | `v3/lua/webserver.md` | ✅ Webserver (and REST API) | Migrated | |
| 43 | `v3/lua/bluetooth-le.md` | `v3/lua/bluetooth-le.md` | ✅ Bluetooth LE | Migrated | |
| 44 | `v3/lua/sidepanel.md` | `v3/lua/sidepanel.md` | ✅ Sidepanel | Migrated | |
| 45 | `v3/lua/lean-button.md` | `v3/lua/lean-button.md` | ✅ Lean button | Migrated | |
| 46 | `v3/lua/database.md` | `v3/lua/database.md` | ✅ Database access | Migrated | Stub content; added to sidebar. |
| 47 | `v3/lua/userrights.md` | `v3/lua/userrights.md` | ✅ User rights | Migrated | Added to sidebar. |
| 48 | `v3/lua/customtools.md` | `v3/lua/customtools.md` | ✅ LUA custom tools | Migrated | |
| 49 | `libs/lua-ads.md` | `libs/lua-ads.md` | ✅ ADS communication | Migrated | |
| 50 | `libs/lua-opcua.md` | `libs/lua-opcua.md` | ✅ OpcUA communication | Migrated | |
| 51 | `libs/lua-modbus.md` | `libs/lua-modbus.md` | ✅ Modbus/TCP/UDP communication | Migrated | |
| 52 | `libs/lua-hid.md` | `libs/lua-hid.md` | ✅ USB HID Devices | Migrated | |
| 53 | `libs/lua-dpapi.md` | `libs/lua-dpapi.md` | ✅ Data Protection API | Migrated | |
| 54 | `libs/lua-ostools.md` | `libs/lua-ostools.md` | ✅ LUA Windows OS tools | Migrated | |
| 55 | `libs/lua-net.md` | `libs/lua-net.md` | ✅ LUA network helpers | Migrated | |
| 56 | `appnotes/sharedconfig.md` | **Missing** | ❌ Missing from sidebar | **Source nav broken** | Referenced by `ogs-1/mkdocs.yml` but file does not exist. |
| 57 | `appnotes/databanking.md` | `appnotes/databanking.md` | ✅ Databanking and multi-station rework | Migrated | |
| 58 | `appnotes/userdb.md` | `appnotes/userdb.md` | ✅ Overview (under Central user administration) | Migrated | |
| 59 | `appnotes/userdb-heusermanager.md` | `appnotes/userdb-heusermanager.md` | ✅ heUserManager | Migrated | |
| 60 | `appnotes/userdb-activedirectory.md` | `appnotes/userdb-activedirectory.md` | ✅ Active Directory | Migrated | |
| 61 | `appnotes/toolgateway.md` | `appnotes/toolgateway.md` | ✅ Tool roaming and dynamic parameters | Migrated | |
| 62 | `appnotes/traceability.md` | `appnotes/traceability.md` | ✅ Traceability | Migrated | |
| 63 | `appnotes/gui-layout-runtime.md` | `appnotes/gui-layout-runtime.md` | ✅ OGS runtime screen layout | Migrated | |
| 64 | `appnotes/debugging.md` | `appnotes/debugging.md` | ✅ Debugging LUA Scripts | Migrated | |
| 65 | `appnotes/station_io.md` | `appnotes/station_io.md` | ✅ Station IO | Migrated | |
| 66 | `appnotes/firebird-security.md` | `appnotes/firebird-security.md` | ✅ Firebird SQL configuration | Migrated | |
| 67 | `appnotes/blegateway-openmqttgateway.md` | `appnotes/blegateway-openmqttgateway.md` | ✅ OpenMQTT-Gateway | Migrated | |
| 68 | `appnotes/blegateway-minew-mg6.md` | `appnotes/blegateway-minew-mg6.md` | ✅ Minew MG6 Gateway | Migrated | |
| 69 | `appnotes/branding.md` | `appnotes/branding.md` | ✅ Branding | Docusaurus-only stub | Not in source nav; kept as sidebar item. |
| 70 | `tools/openprotocol/crane.md` | `tools/openprotocol/crane.md` | ❌ Not in source nav | Docusaurus-only page | Exists only in Docusaurus. |
| 71 | `tools/openprotocol/gehmeyr.md` | `tools/openprotocol/gehmeyr.md` | ❌ Not in source nav | Docusaurus-only page | Exists only in Docusaurus. |
| 72 | `tools/openprotocol/gwk.old.md` | `tools/openprotocol/gwk.old.md` | ❌ Not in source nav | Docusaurus-only archive | Exists only in Docusaurus. |
| 73 | `tools/positioning/positioning-digital.md` | `tools/positioning/positioning-digital.md` | ❌ Not in source nav | Docusaurus-only page | Exists only in Docusaurus. |
| 74 | `tools/positioning/positioning-io.md` | `tools/positioning/positioning-io.md` | ❌ Not in source nav | Docusaurus-only page | Exists only in Docusaurus. |

---

## 3. Missing Content Checklist

### 3.1 Source nav entry with no source file

- [ ] `appnotes/sharedconfig.md` is referenced in `ogs-1/mkdocs.yml` under **Enterprise functionality → Central/shared configuration database**, but the file does not exist in `ogs-1/docs/appnotes/`. Decision needed:
  - Option A: Remove the entry from `ogs-1/mkdocs.yml`.
  - Option B: Create `ogs-1/docs/appnotes/sharedconfig.md` and then migrate it.

### 3.2 Docusaurus-only pages (editorial decision)

- [ ] `appnotes/branding.md` — stub, not in source nav. Kept in sidebar for now; expand or remove?
- [ ] `tools/openprotocol/crane.md` — not in source nav. Keep or delete?
- [ ] `tools/openprotocol/gehmeyr.md` — not in source nav. Keep or delete?
- [ ] `tools/openprotocol/gwk.old.md` — archive file. Keep or delete?
- [ ] `tools/positioning/positioning-digital.md` — not in source nav. Keep or delete?
- [ ] `tools/positioning/positioning-io.md` — not in source nav. Keep or delete?

### 3.3 Missing CSS asset

- [ ] `css/neoteroi-mkdocs.css` is present in source but not migrated to `src/css/`. Review whether its rules are needed and port if so.

---

## 4. Syntax / Formatting Fixes Applied

The following MkDocs/Material-specific `hl_lines` attributes were replaced with Docusaurus built-in metastring line-highlighting ranges (`{1,3-5}`):

| File | Previous fence opener | Current fence opener |
|------|----------------------|----------------------|
| `tools/positioning/positioning-robot-urdf.md` | `\`\`\` lua hl_lines="4 5 6"` | `\`\`\` lua {4,5,6}` |
| `tools/positioning/README.md` | `\`\`\`  lua hl_lines="7"` | `\`\`\`  lua {7}` |
| `tools/positioning/README.md` | `\`\`\` ini hl_lines="6"` | `\`\`\` ini {6}` |
| `tools/positioning/README.md` | `\`\`\` ini hl_lines="9"` | `\`\`\` ini {9}` |
| `tools/positioning/positioning-art-dtrack.mdx` | `\`\`\`  lua hl_lines="7"` | `\`\`\`  lua {7}` |
| `tools/misc/hikrobot-vm.md` | `\`\`\`  lua hl_lines="7"` | `\`\`\`  lua {7}` |
| `tools/misc/keyence-iv4.mdx` | `\`\`\`  lua hl_lines="7"` | `\`\`\`  lua {7}` |
| `tools/misc/oetiker.mdx` | `\`\`\`  lua hl_lines="7"` | `\`\`\`  lua {7}` |
| `tools/misc/wenglor-weqube.mdx` | `\`\`\`  lua hl_lines="7"` | `\`\`\`  lua {7}` |
| `appnotes/userdb-activedirectory.md` | `\`\`\` lua hl_lines="6" title="config.lua"` | `\`\`\` lua {6} title="config.lua"` |
| `appnotes/userdb-heusermanager.md` | `\`\`\` lua hl_lines="6" title="config.lua"` | `\`\`\` lua {6} title="config.lua"` |

No `!!!` admonitions, `???` collapsible admonitions, `===` tab markers, `:material-`, or `:fontawesome-` shortcodes remain in `ogs-docs/`.

Additional fixes applied to newly migrated content:
- MkDocs image attribute lists (`{ align=right }`, `{ width="300", align=right }`) were stripped from `tools/misc/hikrobot-vm.md`, `tools/openprotocol/mtc.md`, and `tools/openprotocol/pf6-pf8.md` because Docusaurus MDX interprets them as JSX expressions, then later restored using Docusaurus-compatible JSX `<img>` tags with `require()` and inline `float: right` styling.
- Unescaped angle-bracket placeholders (`<dbname>`, `<domain>`, `<project>`) were wrapped in backticks/code fences in `appnotes/firebird-security.md` and `appnotes/userdb-activedirectory.md` to prevent MDX parse errors.
- Explicit heading anchors `{#tool-data-http-output}` were added to `tools/openprotocol/mtc.md` and `tools/openprotocol/pf6-pf8.md` to resolve broken-anchor warnings.
- **Image alignment restoration**: All pages that originally had right-aligned images in MkDocs were updated to use Docusaurus-compatible JSX `<img>` tags with `require()` and inline `float: right` styling. This keeps the image on the right with text wrapping, matching the MkDocs layout. Files updated:
  - `tools/openprotocol/amt.md`
  - `tools/openprotocol/cleco.md`
  - `tools/openprotocol/makita.md`
  - `tools/openprotocol/mtc.md`
  - `tools/openprotocol/pf6-pf8.md`
  - `tools/openprotocol/sys350-ke350.md`
  - `tools/misc/hikrobot-vm.md`
  - `tools/misc/keyence-iv4.mdx`
  - `tools/misc/oetiker.mdx`
  - `tools/misc/wenglor-weqube.mdx`
  - `tools/misc/sylvac.md` (both images)
  - `tools/positioning/positioning-art-dtrack.mdx` (splash screen only; sidepanel image already in a grid layout)
  
  Example of the pattern used:
  ```mdx
  <img style={{float: 'right', margin: '0 0 1rem 1rem'}} width="300" src={require('./resources/amt-tools.png').default} alt="AMT tightening tools" />
  ```
- **Code-annotation limitation**: Material for MkDocs `content.code.annotate` (clickable inline `(1)` markers that link to footnotes below code blocks) has no built-in Docusaurus equivalent and no community plugin. The `(1)` markers remain visible inside the code, and the footnotes remain as plain numbered lists below the code block. Only the line highlighting was restored (via metastring ranges).

### 4.1 MkDocs extensions mapping status

| MkDocs extension | Docusaurus equivalent | Status |
|------------------|----------------------|--------|
| `pymdownx.superfences` (mermaid) | `@docusaurus/theme-mermaid` | ✅ Configured |
| `pymdownx.highlight` / `anchor_linenums` | Prism | ⚠️ `hl_lines` not supported; stripped. Restore with ` {1,3-5} ` metastring if needed. |
| `pymdownx.tabbed` | `<Tabs>` / `<TabItem>` | ✅ No raw `===` markers remain; `.mdx` files used where needed. |
| `pymdownx.details` | `<details>` or `:::note` | ✅ No occurrences found. |
| `pymdownx.emoji` | None configured | ✅ No `:material-`/`:fontawesome-` shortcodes found. |
| `content.tabs.link` | No direct equivalent | ⚠️ Tab state synchronization lost. Not used in current content. |
| `glightbox` | `docusaurus-plugin-image-zoom` | ✅ Configured |
| `neoteroi-mkdocs.css` | `src/css/custom.css` | ⚠️ CSS file not migrated (see §3.3). |

---

## 5. Assets Inventory

Asset files were compared by relative path. After copying the latest source assets, the migrated tree contains the image resources used by the current pages.

Known asset issues:

- `tools/positioning/resources/robot-sidepanel.png.png` is still present (duplicate extension). Consider renaming to `robot-sidepanel.png` and updating references.
- `v3/lua/2026-01-31_18h02_29.png` filename is a screenshot date. Consider renaming for clarity.

---

## 6. Configuration Mapping

| MkDocs (`ogs-1/mkdocs.yml`) | Docusaurus (`my-docs/docusaurus.config.ts`) | Status |
|-----------------------------|---------------------------------------------|--------|
| `site_name: OGS Documentation` | `title: Haller + Erne Documentation` (portal) | ⚠️ OGS-specific title not preserved in navbar. |
| `site_url: https://haller-erne.github.io/ogs/` | `baseUrl: '/Docusaurus/'`, route `/ogs/` | ⚠️ URL changed from `/ogs/` to `/Docusaurus/ogs/`. |
| `theme: material` | `preset-classic` | ✅ Migrated |
| `extra_css: css/neoteroi-mkdocs.css` | `customCss: ./src/css/custom.css` | ⚠️ CSS content not migrated. |
| `plugins: search, glightbox` | `@easyops-cn/docusaurus-search-local`, `docusaurus-plugin-image-zoom` | ✅ Migrated |
| `markdown_extensions: pymdownx.*` | MDX + remark/rehype + theme-mermaid | ⚠️ See §4.1. |

---

## 7. Recommended Action Plan

1. **Resolve source nav broken link**
   - Decide on `appnotes/sharedconfig.md` (create source page or remove nav entry).

2. **Editorial decisions**
   - Decide whether to keep the 6 Docusaurus-only pages listed in §3.2.
   - Address remaining `TODO` markers in content (e.g., `appnotes/databanking.md`, `v3/lua/webbrowser.md`, `libs/lua-modbus.md`, `libs/lua-dpapi.md`, `libs/lua-net.md`).
   - Replace stub content in `v3/lua/database.md` or mark it clearly as TODO.

3. **CSS migration**
   - Review `ogs-1/docs/css/neoteroi-mkdocs.css` and port any needed rules into `src/css/custom.css`.

4. **Validation**
   - Run `npm run build` after any further changes.
   - Verify all sidebar links resolve.

---

## 8. Build Status

- **Last validated:** 2026-07-10
- **Result:** `npm run build` succeeded with no errors, warnings, or broken anchors.

---

## 9. Reference Files

- Source nav: `ogs-1/mkdocs.yml`
- Target sidebar: `my-docs/sidebarsOgs.ts`
- Target config: `my-docs/docusaurus.config.ts`
- Migration scripts: `my-docs/fix_frontmatter_tags.py`, `my-docs/fix_indented_codeblocks.py`

---

*End of audit.*
