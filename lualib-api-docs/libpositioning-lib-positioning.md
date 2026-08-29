---
title: libpositioning/lib/positioning
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `libpositioning/lib/positioning.lua`.*

## GetJobReleaseByName


```lua
function GetJobReleaseByName(JobName: any, ScopeName: any)
  -> boolean
```




## PS_CheckToolPosition


```lua
function PS_CheckToolPosition(Tool: any, JobName: any, BoltName: any, PosCtrl: any, ToolPosDef: any, TaskState: any, TaskStep: any)
  -> boolean|string|nil
  2. string|nil
```




## PS_TeachToolPosition


```lua
function PS_TeachToolPosition(State: any, Tool: any, JobName: any, BoltName: any, PosCtrl: any, ToolPosDef: any)
  -> string|integer|nil
  2. unknown|nil
  3. unknown|nil
  4. string|unknown|nil
  5. string|nil
  6. string|nil
```




## Panel_OnSTKNButtonClicked


```lua
function Panel_OnSTKNButtonClicked(tool: any, toolType: any, WFState: any, WFLockReason: any)
  -> boolean
```




## Panel_OnToolButtonClicked


```lua
function Panel_OnToolButtonClicked(tool: any, toolType: any, WFState: any, WFLockReason: any)
  -> boolean
```




## PreliminaryCheckResult


```lua
function PreliminaryCheckResult(first: any, tool: any, tooltype: any, overlay_tool: any)
  -> boolean
```



