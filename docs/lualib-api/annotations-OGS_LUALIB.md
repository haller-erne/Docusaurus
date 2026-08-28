---
title: annotations/OGS_LUALIB
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/OGS_LUALIB.lua`.*

## UserManagerBase

### autologon


```lua
integer
```

Defines, if the AutoLogon user is logged in currently (1 = autologon user logged in, 0 otherwise). Note that this is reset to 0 with the first logoff.

### last_valid_id


```lua
string?
```

User-ID (cardnumber) of currently logged on secondary/elevated user, empty string if not logged in

### master


```lua
string
```

User name of currently logged on secondary/elevated user (empty string if no secondary/elevated user logged in)

### master_id


```lua
string?
```

User-ID (cardnumber) of currently logged on secondary/elevated user, empty string if not logged in

### master_level


```lua
integer
```

User level of currently logged on secondary/elevated user

### user


```lua
string
```

User name of currently logged on user (empty string if nobody logged in)

### user_id


```lua
string?
```

User-ID (cardnumber) of currently logged on user, empty string if not logged in

### user_level


```lua
integer
```

User level of currently logged on user (0 if nobody logged in, 1=User, 2=Supervisor, 3=Admin, ...)




## xxx_UpdateStatus


```lua
function xxx_UpdateStatus(userName: string, userLevel: integer, elevatedName: string, elevatedLevel: integer, autoLogon: integer, userID: string, elevatedID: string)
```




## xxx_UserRight
