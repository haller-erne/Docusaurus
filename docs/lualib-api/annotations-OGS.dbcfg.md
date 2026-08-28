---
title: annotations/OGS.dbcfg
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/OGS.dbcfg.lua`.*

## DBCfg_JobState

### JobState


```lua
integer|nil
```

Current state of the job (0 = not started, 1 = active, 2 = finished), or nil if not found

### TaskState


```lua
DBCfg_TaskState[]
```

State of the tasks in the job, or nil if not found




## DBCfg_ObjectType




## DBCfg_ObjectType




## DBCfg_TaskState

### TaskSeq


```lua
integer
```

Sequence number of the task in the job (starting with 1 for the first task)

### TaskState


```lua
integer
```

Current state of the task (0 = not started, 1 = active, 2 = finished), or nil if not found




## IsJobEnabled


```lua
function IsJobEnabled(RootName: string, JobName: string, DBJobID: integer, JobActive: boolean)
  -> isEnabled: boolean
```




## get_action_property


```lua
function get_action_property(paramName: string, jobSeq: integer, actionSeq: integer)
  -> value: string|nil
```




## get_current_action


```lua
function get_current_action()
  -> JobNum: integer
  2. TaskNum: integer
  3. ActionNum: integer
  4. Tool: integer|nil
  5. ToolType: integer|nil
```




## get_job_barcodes


```lua
function get_job_barcodes(DBJobID: integer)
  -> Returns: table|nil
```




## get_job_property


```lua
function get_job_property(paramName: string, jobSeq: integer)
  -> value: string|nil
```




## get_job_state


```lua
function get_job_state(jobSeq: integer)
  -> JobState: integer|nil
  2. TaskState: DBCfg_TaskState[]
```




## get_object_property


```lua
function get_object_property(objType: DBCfg_ObjectType, paramName: string|nil)
  -> value: any
```




## get_task_property


```lua
function get_task_property(paramName: string, jobSeq: integer, taskSeq: integer)
  -> value: string|nil
```



