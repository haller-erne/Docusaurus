---
title: annotations/OGS.Webbrowser
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/OGS.Webbrowser.lua`.*

## ExecJS_async


```lua
(async) function ExecJS_async(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", script: string)
  -> success: boolean
```




## ExecJS_nonblocking


```lua
(async) function ExecJS_nonblocking(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", script: string)
  -> success: boolean
```




## ExecJS_sync


```lua
function ExecJS_sync(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", script: string)
  -> result: string
```




## GetState


```lua
function GetState(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView")
  -> isVisible: boolean
  2. url: string
```




## Hide


```lua
function Hide(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView")
```




## Navigate


```lua
(async) function Navigate(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", url: string, reload?: boolean)
  -> success: boolean|nil
```




## RegMsgHandler


```lua
function RegMsgHandler(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", fn?: fun(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", data: string), urlprefix?: string)
  -> On: fun(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", data: string)|true|nil
  2. error: string?
```




## Show


```lua
function Show(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", url: string, reload: boolean, params: string)
  -> url: string|nil
```



