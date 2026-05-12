# heOPTester — Screenshot Checklist

> All screenshots go in `heOPTester/screenshots/`.
> ✅ = Already captured | ❌ = Still needed

---

## 1. Getting Started (`01-getting-started.md`)

- [x] **main-window.png** — Main application window with labeled areas (Menu Bar, Connection Panel, Log Panel, Status Bar, Docked Panels)

## 2. Connection (`02-connection.md`)

- [x] **connection-panel.png** — Connection panel with all fields labeled (Host, Port, Keep Alive, Variant, Auto-send checkbox)
- [x] **connected-state.png** — Connected state showing green status indicator
- [x] **recent-connections.png** — Recent connections dropdown expanded

## 3. MID Panels (`03-mid-panels.md`)

- [x] **mid-panel.png** — A MID panel (e.g., MID 0060) showing revision selector, input fields, and Send button
- [x] **revision-selector.png** — Revision dropdown showing multiple revision options

## 4. Log Viewer (`04-log-viewer.md`)

- [x] **log-panel.png** — Log panel overview showing messages with color-coded entries
- [x] **log-datagrid.png** — DataGrid mode with visible columns (Direction, Timestamp, MID, Description, Raw Data)
- [x] **log-treeview.png** — TreeView mode with an expanded message showing parsed fields
- [x] **log-wireshark.png** — Wireshark mode with dissected protocol fields
- [x] ~~**log-hide-alive.png**~~ — Removed: "Hide Alive" is a Settings menu checkbox, not a visual panel
- [x] ~~**interactive-log.png**~~ — Removed: panel is a read-only master-detail view, not a command input; described in text instead

## 5. Lua Scripting (`05-lua-scripting.md`)

- [x] **test-suites-quickstart.png** — Test Suites window with a simple script loaded and Run button visible
- [x] **test-steps-results.png** — Test results showing steps with pass/fail indicators
- [x] **breakpoint-paused.png** — A paused test at a breakpoint with Resume button

## 6. Test Suites (`07-test-suites.md`)

- [x] **test-suites-window.png** — Full Test Suites window with tree (left), code editor (center), results (bottom)
- [x] **test-suites-toolbar.png** — Test Suites toolbar with labeled controls (Host, Port, Variant, Run, Run All, Stop, Report)
- [x] **code-editor.png** — Code editor with syntax highlighting, error markers, and autocomplete popup
- [x] **test-results.png** — Test results panel showing steps, status, and duration
- [x] **create-test-from-log.png** — "Create Test from Log" wizard dialog

## 7. Tools (`08-tools.md`)

- [x] **autosender.png** — Autosender panel with interval and message fields, Start/Stop button
- [x] ~~**hex-editor.png**~~ — Removed: Hex Editor menu item doesn't exist
- [x] **header-editor.png** — Header Editor with all header fields visible
- [ ] **statistics.png** — Statistics panel showing message counters

## 8. Settings (`09-settings.md`)

_No screenshots needed — theme section was removed (single light theme only)._

## 9. Licensing (`10-licensing.md`)

- [x] **demo-reminder.png** — Demo reminder dialog (showing countdown timer, Load License button, reminder number)
- [x] **load-license.png** — Load License File dialog

---

**Status: 23/24 done — 1 remaining (statistics.png)**
