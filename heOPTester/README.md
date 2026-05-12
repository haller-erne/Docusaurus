---
title: OpenProtocol Tester — User Guide
sidebar_label: Home
---

# OpenProtocol Tester — User Guide

:::warning[Beta Software]
OpenProtocol Tester is currently in **beta**. You may encounter bugs, and the following aspects may change before the stable release:
- **UI layout and features**
- **Lua scripting API** (function signatures, behavior)
- **Test suite functionality and report formats**

This documentation will be updated alongside the application.
:::

Welcome to the **OpenProtocol Tester** user guide. This application allows you to communicate with tightening controllers using the Open Protocol (Bosch Rexroth, BMW, and Ford variants) over TCP/IP.

---

## Table of Contents

1. [Getting Started](01-getting-started.md) — Installation, first launch, and UI overview
2. [Connecting to a Controller](02-connection.md) — Host, port, variant, keep-alive, recent connections
3. [Sending & Receiving MIDs](03-mid-panels.md) — Using MID panels to send protocol messages
4. [Log Viewer](04-log-viewer.md) — Monitoring traffic in DataGrid, TreeView, and Wireshark modes
5. [Lua Scripting](05-lua-scripting.md) — Writing automated test scripts
6. [Lua API Reference](06-lua-api-reference.md) — Complete API for `session`, `assert`, and `log`
7. [Test Suites](07-test-suites.md) — Managing workspaces, running tests, generating reports
8. [Tools & Utilities](08-tools.md) — Autosender, Hex Editor, Header Editor, Statistics
9. [Settings & Configuration](09-settings.md) — Application settings, themes, workspace layouts
10. [Licensing](10-licensing.md) — Demo mode, loading license files, registration
11. [Troubleshooting & FAQ](11-troubleshooting.md) — Common issues and solutions

---

## Quick Start

1. Launch **OpenProtocol Tester**
2. In the **Connection** panel, enter the controller's IP address and port (default: 4545)
3. Select the protocol variant (Rexroth, BMW, or Ford)
4. Click **Connect**
5. Open a MID panel from the menu (e.g., MID 0001 — Communication Start)
6. Click **Send** to transmit the message
7. Watch the response in the **Log** panel

For automated testing, see [Lua Scripting](05-lua-scripting.md).
