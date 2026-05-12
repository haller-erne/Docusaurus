---
title: Settings & Configuration
sidebar_label: Settings
sidebar_position: 9
---

# Settings & Configuration

## Application Settings

Settings are automatically saved on exit and restored on launch. They are stored in the Windows application settings infrastructure.

### Connection Settings

| Setting | Default | Description |
|---------|---------|-------------|
| Host | `localhost` | Last connected host |
| Port | `4545` | Last connected port |
| Variant | `Rexroth` | Last selected protocol variant |
| Keep Alive (s) | `10` | Keep-alive interval |
| Auto-send MID0001 | `true` | Send Communication Start on connect |

### Window Settings

| Setting | Description |
|---------|-------------|
| Window position | X, Y coordinates |
| Window size | Width, Height |
| Maximized state | Whether window was maximized |

## Theme

The application uses a single **light theme** with a teal/lime brand palette. All UI colors are defined as static values in `AppColors.cs` — there is no theme switching mechanism.

## Panel Layout

The dockable panel layout is managed by Syncfusion DockingManager. You can:

- **Drag panels** to rearrange them within the window
- **Float panels** by dragging them outside the dock area
- **Auto-hide panels** using the pin icon in the panel header
- **Close panels** using the X button
- **Reopen panels** from the menu

### Saving Layout

Panel positions and visibility are saved automatically when you close the application.

## Recent Connections

The application maintains a list of recent connections. When you successfully connect to a controller, the host/port/variant combination is saved. Select a recent connection from the dropdown to quickly fill in the connection fields.

## File Locations

| File | Location | Purpose |
|------|----------|---------|
| Application settings | Windows app settings | Connection, window state |
| Test scripts | `%APPDATA%\Haller + Erne GmbH\heOPTester\Tests\` | Lua test files |
| Test metadata | Same as scripts (`.lua.meta` files) | Run history, tags |
| LSP binary | `<install dir>\tools\lua-language-server\bin\` | Lua diagnostics |
| License file | `C:\ProgramData\Haller + Erne GmbH\Licensing\OPTester.lic` | License activation |
