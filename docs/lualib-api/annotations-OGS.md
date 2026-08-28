---
title: annotations/OGS
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/OGS.lua`.*

## Character


```lua
Character
```




## Character


```lua
Character
```




## Character.hello


```lua
function Character.hello(name: string)
```




## GetNokBehaviour


```lua
function GetNokBehaviour(Tool: integer, State: integer, JobName: string, TaskName: string, RundownName: string, rework: integer, nokcount: integer)
  -> NOK: NokStrategy
```




## GetUserByID


```lua
function GetUserByID(cardnumber: any)
  -> UserName: string|nil
  2. UserLevel: integer|nil
```




## LogonMode


```lua
enum LogonMode
```




## LogonMode


```lua
enum LogonMode
```




## Lua_SendFTP


```lua
function Lua_SendFTP(command: string, part_idocde: string, mode: integer, username: string)
```




## NokStrategy


```lua
enum NokStrategy
```




## NokStrategy


```lua
enum NokStrategy
```




## ProcessNOKCounters


```lua
function ProcessNOKCounters(error_code: integer, nok_count: integer)
  -> nil: nil
```




## ProcessUserLogin


```lua
function ProcessUserLogin(username: string, timeout: integer, mode: LogonMode)
```




## ReadIniSection


```lua
function ReadIniSection(sectionName: string)
  -> sectionValues: table|nil
```




## ReadIniValue


```lua
function ReadIniValue(sectionName: string, keyName: string)
  -> value: string|nil
```




## ResetLuaAlarm


```lua
function ResetLuaAlarm(alarmKey: string)
```




## SaveJobLocal


```lua
function SaveJobLocal(jobName: string)
```




## SetLuaAlarm


```lua
function SetLuaAlarm(alarmKey: string, alarmLevel: integer, alarmText: string)
```




## SetUserLanguage


```lua
function SetUserLanguage(language: string, mode?: integer)
  -> Returns: string|nil
```




## TCPSocket


### close


```lua
(method) TCPSocket:close()
```


Closes a TCP object.
The internal socket used by the object is closed and the local address to which the object was bound is made available to other applications.
No further operations (except for further calls to the close method) are allowed on a closed socket.

Note: It is important to close all used sockets once they are not needed, since, in many systems,
each socket uses a file descriptor, which are limited system resources.
Garbage-collected objects are automatically closed before destruction, though.

### connect


```lua
(method) TCPSocket:connect(address: string, port: integer)
  -> 1|nil
  2. string|nil
```


Attempts to connect a master object to a remote host, transforming it into a client object.
Client objects support methods send, receive, getsockname, getpeername, settimeout, and close.

Note: The function socket.connect is available and is a shortcut for the creation of client sockets.
Note: Starting with LuaSocket 2.0, the settimeout method affects the behavior of connect, causing it to return with an error in case of a timeout. If that happens, you can still call socket.select with the socket in the sendt table. The socket will be writable when the connection is established.
Note: Starting with LuaSocket 3.0, the host name resolution depends on whether the socket was created by socket.tcp, socket.tcp4 or socket.tcp6. Addresses from the appropriate family (or both) are tried in the order returned by the resolver until the first success or until the last failure. If the timeout was set to zero, only the first address is tried.

@*param* `address` — IP address or a host name

@*param* `port` — TCP port, in the range [1..64K)

@*return* — In case of error, the method returns nil followed by a string describing the error. In case of success, the method returns 1.

```lua
return #1:
    | 1
```




## TimerToFront


```lua
function TimerToFront(timerName: 'BarcodeTimer'|'ProcessTimer', force: integer)
  -> result: integer|nil
```




## UserManager_GetUserDataFromDB


```lua
function UserManager_GetUserDataFromDB(userName: string)
  -> userData: string
```




## UserManager_GetUserFromDByID


```lua
function UserManager_GetUserFromDByID(cardID: string)
  -> userName: string
  2. userLevel: integer
```




## UserManager_HasRight_2


```lua
function UserManager_HasRight_2(currenRight: '0x0002'|'0x0004'|'0x0008'|'0x0010'|'0x0020'...(+10))
  -> hasRight: boolean
```




## UserRight




## WorkflowClearJob


```lua
function WorkflowClearJob(jobName: string, restartJob: boolean|nil, useName: boolean|nil, clearSubsequent: boolean|nil)
  -> result: integer|nil
```




## WorkflowJumpToTask


```lua
function WorkflowJumpToTask(objectName: string, objectType: integer|nil)
  -> result: integer|nil
```




## XTRACE


```lua
function XTRACE(lvl: integer, message: string)
```




## check_alternative_tool_request


```lua
function check_alternative_tool_request(need: boolean, Tool: integer, AlternativeTool: integer, ToolType: integer, AlternativeToolType: integer, OpName: string, Program: integer, AlternativePrg: integer)
  -> Return: boolean
```




## luaExecFirebirdStoredProc


```lua
function luaExecFirebirdStoredProc(storedProcName: string, params?: table)
  -> ErrorMessage: string|nil
```




## luaExecFirebirdUpdate


```lua
function luaExecFirebirdUpdate(sqlText: string)
  -> ErrorMessage: string|nil
```




## luaExecSQL


```lua
function luaExecSQL(connectionString: string, sqlQuery: string)
  -> ResultTable: table|nil
  2. ErrorMessage: string|nil
```




## luaExecStoredProc


```lua
function luaExecStoredProc(connectionString: string, storedProcName: string, params?: table)
  -> ErrorMessage: string|nil
```




## luaFirebirdRestartTransaction


```lua
function luaFirebirdRestartTransaction(command: 'commit'|'rollback')
  -> Success: boolean|nil
  2. ErrorMessage: string|nil
```




## luaGetUserByName


```lua
function luaGetUserByName()
```




## luaOpenExcel


```lua
function luaOpenExcel(connectionString: string, sqlQuery: string)
  -> ResultTable: table|nil
  2. ErrorMessage: string|nil
```




## luaOpenFirebirdSQL


```lua
function luaOpenFirebirdSQL(sqlText: string, params?: table)
  -> ResultTable: table|nil
  2. ErrorMessage: string|nil
```




## luaOpenFirebirdStoredProc


```lua
function luaOpenFirebirdStoredProc(storedProcName: string, params?: table)
  -> ResultTable: table|nil
  2. ErrorMessage: string|nil
```




## luaOpenSQL


```lua
function luaOpenSQL(connectionString: string, sqlQuery: string)
  -> ResultTable: table|nil
  2. ErrorMessage: string|nil
```




## luaOpenStoredProc


```lua
function luaOpenStoredProc(connectionString: string, storedProcName: string, params?: table)
  -> ResultTable: table|nil
  2. ErrorMessage: string|nil
```




## luaRegisterFirebirdRequest


```lua
function luaRegisterFirebirdRequest(fn: function, params: table)
```




## luaValidateUser


```lua
function luaValidateUser()
```



