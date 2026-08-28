---
title: annotations/modules/ogs.mod
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/modules/ogs.mod.lua`.*

## ogs

The OGS Lua module returned by `require("lualib.ogs")`.
Provides project bootstrap, alarm management, web interfaces and tool checks.

### AlarmManager


```lua
ogs.AlarmManager
```

Alarm manager facade exposed on the `ogs` module as `ogs.AlarmManager`.

### CheckTools


```lua
function ogs.CheckTools(info: any)
  -> nil
```

Verify every configured tool channel has a loaded driver.

Runs on the first StatePoll pass. Reports a Lua alarm for any channel in
station.ini that has no matching tool driver loaded.

@*param* `info` — State-poll context/info passed by the caller.

### Initialize


```lua
function ogs.Initialize(base_folder: string)
  -> nil
```

Initialize the custom OGS project from its config folder.

Prepends the project folder to `package.path`/`package.cpath`, validates that
`config.lua` exists there, records the project paths on `ogs.Project.Paths`,
and finally `require`s the project `config`.

@*param* `base_folder` — Path to the custom project folder containing `config.lua`.




## ogs

The OGS Lua module returned by `require("lualib.ogs")`.
Provides project bootstrap, alarm management, web interfaces and tool checks.

### AlarmManager


```lua
ogs.AlarmManager
```

Alarm manager facade exposed on the `ogs` module as `ogs.AlarmManager`.

### CheckTools


```lua
function ogs.CheckTools(info: any)
  -> nil
```

Verify every configured tool channel has a loaded driver.

Runs on the first StatePoll pass. Reports a Lua alarm for any channel in
station.ini that has no matching tool driver loaded.

@*param* `info` — State-poll context/info passed by the caller.

### Initialize


```lua
function ogs.Initialize(base_folder: string)
  -> nil
```

Initialize the custom OGS project from its config folder.

Prepends the project folder to `package.path`/`package.cpath`, validates that
`config.lua` exists there, records the project paths on `ogs.Project.Paths`,
and finally `require`s the project `config`.

@*param* `base_folder` — Path to the custom project folder containing `config.lua`.




## ogs.AlarmManager

Alarm manager facade exposed on the `ogs` module as `ogs.AlarmManager`.

### RegisterChangeCallback


```lua
function ogs.AlarmManager.RegisterChangeCallback(callback_fn: fun(context: any, item: table), context: any)
  -> nil
```

Register a callback invoked whenever the alarm state changes.

@*param* `callback_fn` — Function called with the alarm item.

@*param* `context` — Opaque value passed back to `callback_fn` on each change.



