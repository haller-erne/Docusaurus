---
title: user_manager_base
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `user_manager_base.lua`.*

## UserManager

### GUILogon


```lua
function UserManager.GUILogon(rawCode: any)
```

-------------------------------------------------
 source: Barcode scanner in "keyboard" mode

### LogonMode


```lua
table
```

### Logout


```lua
function UserManager.Logout()
```

-------------------------------------------------
 Logout the currently logged on user

### RfidLogon


```lua
function UserManager.RfidLogon(rawCode: any)
```

### ShowInstructionView


```lua
function UserManager.ShowInstructionView(logon_as_master: any)
```

-------------------------------------------------------------------------------------------------------------
  If necessary, copy/modify template functions in the custom area 
-------------------------------------------------------------------------------------------------------------




## UserManager

### GUILogon


```lua
function UserManager.GUILogon(rawCode: any)
```

-------------------------------------------------
 source: Barcode scanner in "keyboard" mode

### LogonMode


```lua
table
```

### Logout


```lua
function UserManager.Logout()
```

-------------------------------------------------
 Logout the currently logged on user

### RfidLogon


```lua
function UserManager.RfidLogon(rawCode: any)
```

### ShowInstructionView


```lua
function UserManager.ShowInstructionView(logon_as_master: any)
```

-------------------------------------------------------------------------------------------------------------
  If necessary, copy/modify template functions in the custom area 
-------------------------------------------------------------------------------------------------------------




## UserManager_GetCurrentID


```lua
function UserManager_GetCurrentID()
  -> unknown|nil
```




## UserManager_GetCurrentUser


```lua
function UserManager_GetCurrentUser()
  -> string
```




## UserManager_HasRight


```lua
function UserManager_HasRight(currenRight: '0x0002'|'0x0004'|'0x0008'|'0x0010'|'0x0020'...(+10))
  -> hasRight: boolean
```


```lua
function UserManager_HasRight(right: any)
  -> boolean
```




## UserManager_UpdateStatus


```lua
function UserManager_UpdateStatus(userName: string, userLevel: integer, elevatedName: string, elevatedLevel: integer, autoLogon: integer, userID: string, elevatedID: string)
```


```lua
function UserManager_UpdateStatus(user: any, user_level: any, master: any, master_level: any, autologon: any, user_id: any, master_id: any)
  -> boolean
```




## user_rights


```lua
table
```




## user_rights.1000


```lua
nil
```


```lua
integer
```



