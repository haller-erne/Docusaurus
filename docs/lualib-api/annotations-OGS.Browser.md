---
title: annotations/OGS.Browser
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/OGS.Browser.lua`.*

## Browser


```lua
Browser
```




## Browser


```lua
Browser
```




## Browser.ExecJS_async


```lua
(async) function Browser.ExecJS_async(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", script: string)
  -> success: boolean
```




## Browser.ExecJS_nonblocking


```lua
(async) function Browser.ExecJS_nonblocking(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", script: string)
  -> success: boolean
```




## Browser.ExecJS_sync


```lua
function Browser.ExecJS_sync(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", script: string)
  -> result: string
```




## Browser.GetState


```lua
function Browser.GetState(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView")
  -> isVisible: boolean
  2. url: string
```




## Browser.Hide


```lua
function Browser.Hide(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView")
```




## Browser.Navigate


```lua
(async) function Browser.Navigate(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", url: string, reload?: boolean)
  -> success: boolean|nil
```




## Browser.RegMsgHandler


```lua
function Browser.RegMsgHandler(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", fn?: fun(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", data: string), urlprefix?: string)
  -> On: fun(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", data: string)|true|nil
  2. error: string?
```




## Browser.Show


```lua
function Browser.Show(instance: "InstructionView"|"ProcessView"|"SidePanel"|"StartView", url: string, reload: integer, params: string)
  -> url: string|nil
```




## WebBrowserInstance



