---
title: lua_tool
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `lua_tool.lua`.*

## base_lua_tool


```lua
table
```




## base_lua_tool.activate_if


```lua
function base_lua_tool.activate_if(impl: any, channel: any, state: any)
```




## base_lua_tool.deactivate_if


```lua
function base_lua_tool.deactivate_if(impl: any, channel: any, state: any)
```




## base_lua_tool.default_activate


```lua
function base_lua_tool.default_activate()
  -> boolean
```




## base_lua_tool.default_check_connection


```lua
function base_lua_tool.default_check_connection()
  -> boolean
```




## base_lua_tool.default_deactivate


```lua
function base_lua_tool.default_deactivate()
  -> boolean
```




## base_lua_tool.default_disable


```lua
function base_lua_tool.default_disable()
  -> boolean
```




## base_lua_tool.default_enable


```lua
function base_lua_tool.default_enable()
  -> boolean
```




## base_lua_tool.default_init


```lua
function base_lua_tool.default_init()
  -> string
```




## base_lua_tool.disable_if


```lua
function base_lua_tool.disable_if(impl: any, channel: any, state: any)
```




## base_lua_tool.enable_if


```lua
function base_lua_tool.enable_if(impl: any, channel: any, state: any)
```




## base_lua_tool.get_conn_attr


```lua
function base_lua_tool.get_conn_attr(impl: any, tool: any)
  -> integer
  2. unknown|nil
```




## base_lua_tool.get_footer_string


```lua
function base_lua_tool.get_footer_string(impl: any, tool: any)
  -> string
```




## base_lua_tool.get_prg_string


```lua
function base_lua_tool.get_prg_string(impl: any, tool: any)
  -> string
```




## base_lua_tool.get_tool_result_string


```lua
function base_lua_tool.get_tool_result_string(impl: any, tool: any)
  -> string
```




## base_lua_tool.get_tool_units


```lua
function base_lua_tool.get_tool_units(impl: any, tool: any, prg: any)
  -> string
  2. string
  3. nil
  4. nil
```




## base_lua_tool.poll


```lua
function base_lua_tool.poll(impl: any, tool: any, state: any)
  -> integer
```




## base_lua_tool.process_tool_result


```lua
function base_lua_tool.process_tool_result(impl: any, tool: any)
  -> integer
```




## base_lua_tool.registration


```lua
function base_lua_tool.registration(impl: any, tool: any, ini_params: any)
  -> string
```




## base_lua_tool.save_results


```lua
function base_lua_tool.save_results(impl: any, tool: any, values: any)
  -> integer
```




## base_lua_tool.start


```lua
function base_lua_tool.start(impl: any, tool: any, prg: any)
  -> integer
```




## dll_tool_disable


```lua
integer
```




## dll_tool_enable


```lua
integer
```




## dll_tool_idle


```lua
integer
```




## dll_tool_wait_release


```lua
integer
```




## lua_known_tool_types


```lua
table
```




## lua_known_tool_types.add_tool


```lua
function lua_known_tool_types.add_tool(tool: any, tool_type: any)
```




## lua_known_tool_types.add_type


```lua
function lua_known_tool_types.add_type(type_obj: any)
```




## lua_known_tool_types.get_impl


```lua
function lua_known_tool_types.get_impl(tool_type: any, function_name: any)
  -> integer|function|unknown|nil
  2. table|nil
```




## lua_known_tool_types.get_tool_type


```lua
function lua_known_tool_types.get_tool_type(tool: any)
  -> unknown
```




## lua_task_cnt_reset


```lua
integer
```




## lua_task_completed


```lua
integer
```




## lua_task_fault


```lua
integer
```




## lua_task_idle


```lua
integer
```




## lua_task_info_sent


```lua
integer
```




## lua_task_invalid_prg


```lua
integer
```




## lua_task_not_ready


```lua
integer
```




## lua_task_processing


```lua
integer
```




## lua_task_reset_act_en


```lua
integer
```




## lua_task_started


```lua
integer
```




## lua_task_wait_acten_off


```lua
integer
```




## lua_task_wait_ccw_incy


```lua
integer
```




## lua_task_wait_cw


```lua
integer
```




## lua_task_wait_cycmp


```lua
integer
```




## lua_task_wait_en_reset


```lua
integer
```




## lua_task_wait_ext_releas


```lua
integer
```




## lua_task_wait_ftp


```lua
integer
```




## lua_task_wait_incy


```lua
integer
```




## lua_task_wait_noack


```lua
integer
```




## lua_task_wait_rdy


```lua
integer
```




## lua_tool_conn_error


```lua
integer
```




## lua_tool_connected


```lua
integer
```




## lua_tool_connecting


```lua
integer
```




## lua_tool_get_conn_attr


```lua
function lua_tool_get_conn_attr(tool: any)
  -> integer|unknown|nil
```




## lua_tool_param_error


```lua
integer
```




## lua_tool_poll


```lua
function lua_tool_poll(tool: any, state: any)
  -> integer|unknown|nil
```




## lua_tool_reg_error


```lua
integer
```




## lua_tool_registration


```lua
function lua_tool_registration(tool: any, tool_type: any, params: any)
  -> string|unknown
```




## lua_tool_save_results


```lua
function lua_tool_save_results(tool: any, values: any)
  -> integer|unknown|nil
```




## lua_tool_script_error


```lua
integer
```




## lua_tool_start


```lua
function lua_tool_start(tool: any, prg: any)
  -> integer|unknown|nil
```




## lua_tool_state


```lua
table
```




## process_nok_dont_check_rights


```lua
integer
```




## process_nok_loosen


```lua
integer
```




## process_nok_repeat


```lua
integer
```




## process_nok_skip


```lua
integer
```




## process_nok_stop


```lua
integer
```



