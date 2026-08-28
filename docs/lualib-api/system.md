---
title: system
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `system.lua`.*

## CheckExternalConditions


```lua
function CheckExternalConditions(secondsRunning: any, Socket: any)
  -> integer
```




## CloneTable


```lua
function CloneTable(original: any)
  -> table
```




## CurrentOperation

### BoltName


```lua
string
```

Current bolt name (same as TaskName, but repeated for ...)

### BoltNumber


```lua
integer
```

Current bolt number (same as TaskSeq, but repeated for ...)

### ByHandAck


```lua
integer
```

1, if current operation is a manual operation (ByHandAck), else 0

### CustomParam


```lua
string
```

Custom parameter

### JobName


```lua
string
```

Current job name

### JobSeq


```lua
integer
```

Current job sequence number

### Loosen


```lua
integer
```

1, if current operation is a loosen operation, else 0

### LoosenPrg


```lua
integer
```

Current loosen program number

### LoosenTool


```lua
integer
```

Loosen tool/channel number (if different from Tool)

### Model


```lua
string
```

Current model name (from workflow)

### Name


```lua
string
```

Current rundown/operation name

### Number


```lua
integer
```

Current rundown/operation number (Ablauf)

### Operation


```lua
string
```

Current operation name

### Prg


```lua
integer
```

Current tightening program number

### Scope


```lua
string
```

Current job scope (assembly name)

### SeletMode


```lua
integer
```

Current select mode

### Socket


```lua
integer
```

Current socket number

### Station


```lua
string
```

Current station name

### TaskName


```lua
string
```

Current task/bolt name

### TaskSeq


```lua
integer
```

Current task/bolt sequence number

### Tool


```lua
integer
```

Current tool/channel number

### ToolName


```lua
string
```

Tool name

### ToolType


```lua
integer
```

Tool type code (1=ERGOSPIN, 2=GWK, 3=NEXO, 4=HANDEINGABE, ...)

### Total


```lua
integer
```

Total number of rundowns/operations in current job (RundownCnt)

### Valid


```lua
boolean
```

true, if CurrentOperation data is valid




## CurrentOperation

### BoltName


```lua
string
```

Current bolt name (same as TaskName, but repeated for ...)

### BoltNumber


```lua
integer
```

Current bolt number (same as TaskSeq, but repeated for ...)

### ByHandAck


```lua
integer
```

1, if current operation is a manual operation (ByHandAck), else 0

### CustomParam


```lua
string
```

Custom parameter

### JobName


```lua
string
```

Current job name

### JobSeq


```lua
integer
```

Current job sequence number

### Loosen


```lua
integer
```

1, if current operation is a loosen operation, else 0

### LoosenPrg


```lua
integer
```

Current loosen program number

### LoosenTool


```lua
integer
```

Loosen tool/channel number (if different from Tool)

### Model


```lua
string
```

Current model name (from workflow)

### Name


```lua
string
```

Current rundown/operation name

### Number


```lua
integer
```

Current rundown/operation number (Ablauf)

### Operation


```lua
string
```

Current operation name

### Prg


```lua
integer
```

Current tightening program number

### Scope


```lua
string
```

Current job scope (assembly name)

### SeletMode


```lua
integer
```

Current select mode

### Socket


```lua
integer
```

Current socket number

### Station


```lua
string
```

Current station name

### TaskName


```lua
string
```

Current task/bolt name

### TaskSeq


```lua
integer
```

Current task/bolt sequence number

### Tool


```lua
integer
```

Current tool/channel number

### ToolName


```lua
string
```

Tool name

### ToolType


```lua
integer
```

Tool type code (1=ERGOSPIN, 2=GWK, 3=NEXO, 4=HANDEINGABE, ...)

### Total


```lua
integer
```

Total number of rundowns/operations in current job (RundownCnt)

### Valid


```lua
boolean
```

true, if CurrentOperation data is valid




## EvaluateExternalIO


```lua
function EvaluateExternalIO(Tool: any, Socket: any, Inputs: any, Outputs: any, Pos: any)
  -> unknown
  2. integer
```




## GetAbsolutePath


```lua
function GetAbsolutePath(base_dir: any, rel_path: any)
  -> string|nil
```




## GetCurveFileName


```lua
function GetCurveFileName(Name: any, IP: any, IDCode: any, Rack: any, Slot: any, Prg: any, Seq: any, QC: any, Year: any, Month: any, Day: any, Hour: any, Minute: any, Second: any, IDSeq: any)
  -> string
```




## GetIDCode


```lua
function GetIDCode()
  -> CurrentPartId: string
```


```lua
function GetIDCode()
  -> string
```




## GetParamsByDriverName


```lua
function GetParamsByDriverName(DriverName: any)
```




## JobResetCondition


```lua
function JobResetCondition(JobName: any, JobState: any, TaskName: any, TaskState: any)
  -> boolean
```




## RegisterOGSFunction


```lua
function RegisterOGSFunction(fname: any, local_f: any, front: any)
```




## StateChanged


```lua
function StateChanged(info: any)
```




## StateChangedFunctions


```lua
table
```




## StatePoll


```lua
function StatePoll(info: any)
```




## StateShutdown


```lua
function StateShutdown()
```




## StateShutdownFunctions


```lua
table
```




## TOOL_TYPE


```lua
table
```




## TargetSocket


```lua
integer
```




## TrimOrFill


```lua
function TrimOrFill(str: any, max: any, pad_char: any)
  -> string
```




## TrimOrFillLeft


```lua
function TrimOrFillLeft(str: any, max: any, pad_char: any)
  -> string
```




## communication_state


```lua
function communication_state(Name: any, State: any, ErrCode: any, ErrMsg: any, Seq: any)
```




## connection_drivers


```lua
table
```




## create_bolt_result


```lua
function create_bolt_result(station: any, part_seq: any, bolt_seq: any, name: any, tool: any, prg: any, torque: any, torque_min: any, torque_max: any, angle: any, angle_min: any, angle_max: any, result: any, qc: any, seq: any, tool_sn: any, operation: any, barcode: any)
```




## create_part_result


```lua
function create_part_result(station: any, part_seq: any, name: any, time: any, result: any)
```




## create_station_result


```lua
function create_station_result(name: any, host: any, time: any, info: any, worker: any, master: any, result: any)
```




## curr_path


```lua
string
```




## debug_values


```lua
table
```




## debug_values.Inputs


```lua
any
```




## debug_values.Pos


```lua
any
```




## debug_values.inp


```lua
integer
```




## debug_values.release


```lua
integer
```




## file_exists


```lua
function file_exists(filename: any)
  -> true
```




## ogs_virtual_table


```lua
table
```




## param_as_str


```lua
function param_as_str(param: any)
  -> string
```




## process


```lua
table
```




## process.id


```lua
nil
```




## process.type


```lua
nil
```




## process.version


```lua
string
```




## register_communication


```lua
function register_communication(Name: any, IP: any, Port: any, Param: any, State: any)
```




## station_results


```lua
table
```




## t


```lua
string|osdate
```




## valid_str


```lua
function valid_str(a: any)
  -> boolean
```




## version


```lua
string
```




## xml_bolt


```lua
string
```




## xml_part_beg


```lua
string
```




## xml_part_end


```lua
string
```




## xml_station_beg


```lua
string
```




## xml_station_end


```lua
string
```




## xml_text_beg


```lua
string
```




## xml_text_end


```lua
string
```



