---
title: annotations/LuaOSTools
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/LuaOSTools.lua`.*

## GetUserName


```lua
function GetUserName(format: integer|UserNameFormat)
  -> UserName: string|nil
  2. ErrorMessage: integer|nil
```




## GetUserTokenDialog


```lua
function GetUserTokenDialog()
  -> Token: integer|nil
  2. Username: string|integer
```




## IsMemberOf


```lua
function IsMemberOf()
```




## ShowCredUIDialog


```lua
function ShowCredUIDialog()
  -> UserName: string|nil
  2. Password: string|integer
```




## plctag

### new


```lua
(method) plctag:new()
  -> Ok: true|nil
  2. Error: string?
```

Open the virtual com port to the device

@*return* `Ok` — Returns true, if ok, else nil,error

@*return* `Error` — Error message

```lua
Ok:
    | true
```



