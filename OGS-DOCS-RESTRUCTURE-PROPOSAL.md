# OGS Documentation Restructure Proposal

> Branch: `research/ogs-docs-restructure`
> Date: 2026-08-24
> Status: **Implemented (pilot)**
>
> Implemented 2026-08-27. The `ogs-docs/` (Next) and `ogs_versioned_docs/version-3.1.9/` trees have both been reorganized. `npm run build` passes with `onBrokenLinks: 'throw'`.

## 1. Goal

Reorganize the OGS documentation around five audience- and task-oriented categories instead of the current flat file-type grouping. Make it easier for admins, installers, end users, integrators, and decision-makers to find what they need.

## 2. Final top-level categories

| # | Category | Audience | Notes |
|---|----------|----------|-------|
| 1 | **Installation & Administration** | IT / technicians installing OGS and OGS administrators | Merged from "Installation & Setup" + admin-focused application notes. |
| 2 | **User Guide** | Shop-floor operators / line managers | Day-to-day operation: runtime layout, editor guide, event log, printouts, traceability. |
| 3 | **Tool Configuration** | Integrators / advanced users | Consolidated current `tools/` content plus the PDF-based tool configuration guide. |
| 4 | **Features** | Prospects, sales, new users | Product highlights, BLE gateways, live video, multilanguage support, tool roaming, release notes. |
| 5 | **Lua API Reference** | Developers, integrators | Formerly "Lower ABI dogs". Lua scripting, interfaces, custom tools, helper libraries, debugging, data output formats. |

> **Naming confirmed:** "Lower ABI dogs" renamed to **Lua API Reference**.

## 3. Decisions made

| Open question | Decision |
|---|---|
| Data Output split | **Split** — `eventlog.md` and `printout.md` → User Guide; `xmlfile.md` and traceability format → Lua API Reference. |
| Tool config PDF | **Supplement** `tool-config/index.md`, not replace it. |
| Feature Gallery scope | **Include release notes.** |
| Versioning strategy | **Restructure both in lockstep** via `npx docusaurus docs:version:ogs 3.1.9`. |

### 3.1 Installation & Administration

New pages created:

| File | Source |
|---|---|
| `admin/index.md` | New overview page |
| `admin/system-requirements.md` | Stub |
| `admin/installing-ogs.md` | Converted from `heOGS - Installation and Configuration Guide-en.pdf` |
| `admin/first-start.md` | Stub |
| `admin/licensing-overview.md` | Converted from `h+e Software Licensing Guide-en.pdf` |
| `admin/updating-ogs.md` | Stub |
| `admin/firewall-network.md` | Stub |
| `admin/runtime-screen-layout.md` | Split from `appnotes/gui-layout-runtime.md` (admin/config parts) |

Existing pages moved:

| Current file | Implemented location |
|---|---|
| `appnotes/firebird-security.md` | `admin/firebird-security.md` |
| `appnotes/userdb.md` | `admin/user-management/index.md` |
| `appnotes/userdb-heusermanager.md` | `admin/user-management/heusermanager.md` |
| `appnotes/userdb-activedirectory.md` | `admin/user-management/activedirectory.md` |
| `appnotes/databanking.md` | `admin/databanking-and-rework.md` |
| `appnotes/station_io.md` | `admin/station-io.md` |

### 3.2 User Guide

| Current file | Implemented location |
|---|---|
| `appnotes/gui-layout-runtime.md` (operator parts) | `user/runtime-layout.md` |
| `dataoutput/eventlog.md` | `user/event-log.md` |
| `dataoutput/printout.md` | `user/printouts.md` |
| `dataoutput/traceability.md` (operational part) | `user/traceability.md` |
| `heOGS-V3.1-Editor-UG-en-R04.pdf` | `user/editor-user-guide.md` |

New overview page created: `user/index.md`.

### 3.3 Tool Configuration

| Current file | Implemented location |
|---|---|
| `tools/README.md` | `tool-config/index.md` |
| `tools/remote-tool.md` | `tool-config/remote-tool-gateway.md` |
| `tools/openprotocol/*.md` | `tool-config/openprotocol/` |
| `tools/non-openprotocol/*.md` | `tool-config/non-openprotocol/` |
| `tools/misc/*.md` | `tool-config/misc/` |
| `tools/positioning/*.md` | `tool-config/positioning/` |
| `heOGS - Tool configuration guide-en.pdf` | `tool-config/tool-configuration-guide.md` |

### 3.4 Features

| Current file | Implemented location |
|---|---|
| `appnotes/blegateway-openmqttgateway.md` | `features/ble-gateways/openmqttgateway.md` |
| `appnotes/blegateway-minew-mg6.md` | `features/ble-gateways/minew-mg6.md` |
| `heOGS-AN-Live video integration-en-R01.pdf` | `features/live-video-integration.md` |
| `heOGS-AN-Multilanguage support-en-R02.pdf` | `features/multilanguage-support.md` |

New stub pages created:

- `features/index.md`
- `features/whats-new.md`
- `features/ai-documentation-chat.md`
- `features/tool-roaming.md`
- `features/traceability-highlights.md`
- `features/release-notes.md`
- `features/ble-gateways/index.md`

### 3.5 Lua API Reference

| Current file | Implemented location |
|---|---|
| `v3/getting-started.md` | `reference/lua/getting-started.md` |
| `v3/lua/*.md` | `reference/lua/interfaces/` |
| `v3/lua/customtools.md` | `reference/lua/custom-tools.md` |
| `libs/*.md` | `reference/lua/helper-libraries/` |
| `dataoutput/xmlfile.md` | `reference/data-output/xml-file-format.md` |
| `dataoutput/traceability.md` (format part) | `reference/data-output/traceability-format.md` |
| `appnotes/debugging.md` | `reference/lua/debugging.md` |
| `appnotes/branding.md` | `reference/branding.md` |
| `appnotes/gui-layout-runtime.md` (technical parts) | `admin/runtime-screen-layout.md` + `reference/branding.md` |

New overview pages created:

- `reference/index.md`
- `reference/lua/interfaces/index.md`
- `reference/lua/helper-libraries/index.md`
- `reference/data-output/index.md`

## 4. Implementation details

- All old source directories (`ogs-docs/appnotes/`, `ogs-docs/dataoutput/`, `ogs-docs/tools/`, `ogs-docs/v3/`, `ogs-docs/libs/` and their counterparts in `ogs_versioned_docs/version-3.1.9/`) were removed.
- Relative links were rewritten to match the new paths.
- Image and resource assets were copied next to their new markdown locations.
- `sidebarsOgs.ts` was rewritten to use the five-category layout.
- The OGS home-page quick links in `src/pages/index.tsx` were updated to point to the new routes.
- The versioned snapshot was regenerated using the Docusaurus versioning command:
  ```bash
  npx docusaurus docs:version:ogs 3.1.9
  ```
- Converted PDF pages use `mdx.format: md` frontmatter to avoid MDX JSX parsing issues from `<...>` placeholders in the raw output.
- A conversion guide was captured in `PDF-TO-DOCUSARUS-GUIDE.md`.

## 5. Build status

```bash
npm run build
# [SUCCESS] Generated static files in "build".
```

The build passes with `onBrokenLinks: 'throw'`. Broken anchors are currently warnings only.

## 6. Open questions resolved

| # | Question | Decision |
|---|----------|----------|
| 1 | Audience split for Data Output | **Split** — Event Log/Printout → User Guide; XML/Traceability format → Lua API Reference. |
| 2 | Tool Configuration PDF | **Supplement** `tool-config/index.md`, not replace it. |
| 3 | Feature Gallery scope | **Include release notes.** |
| 4 | Versioning strategy | **Restructure both in lockstep** via `npx docusaurus docs:version:ogs 3.1.9`. |

## 7. Suggested next steps

1. Fill remaining `(TBD)` stub pages under `admin/`, `user/`, `features/`, `reference/`, and `tool-config/` (category index pages).
2. Review converted PDF pages for heading cleanup, table formatting, and semantic image names.
3. Tighten `onBrokenAnchors` and clean up remaining anchor warnings if desired.
4. Decide whether to integrate the remaining German / revision-variant PDFs in `pdf-conversions/`.
5. Move `PDF-TO-DOCUSARUS-GUIDE.md` to a permanent docs location if the root is not suitable.
