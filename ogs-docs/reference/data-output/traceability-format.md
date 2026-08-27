---
title: Traceability data format
sidebar_label: Traceability format
---

## Reference

### Custom file name generation

By default, the file for transmitting to FTP is generated internally in the following form:

```
<hostdir>/<YYYY-MM-DD_HH>/<YYYYMMDDHHmmSS>_<IPAddr>_<Channel>_<seq>.json
```

Where:

- `<hostdir>` as specified in the `[FTP_CLIENT]` section (Parameter `TargetFolderOnHost`)
- `<YYYY-MM-DD_HH>` and `<YYYYMMDDHHmmSS>` date/time stamps
- `<IPAddr>` the tools IP address (or connection string), maybe overridden in the `CHANNEL_xx_INFO` parameters
- `<Channel>` channel number of the tool
- `<seq>` result sequence counter value (if any) of the tool

For custom tools, the generated file can be modified by overriding the LUA function `GetFTPFilename()`. 

The function has the following signature:

``` lua
function GetFTPFilename(idcode, IP, Rack, Slot, Seq)

    -- Your code to create a relative filename in the format 
    --    &lt;subfolder(s)&gt;/&lt;filename&gt;

    return filename
end
```

### LUA tools result data

A custom LUA tool can also generate a tracability result file. The low-level OGS API responsible to generate the actual data is the function `LUA_GetJSON()` - however, it is **not recommended** to override this function, as the LUA custom tool interface provides a more convenient wrapper (see [LUA custom tools](../lua/custom-tools.md) by calling the tool drivers `process_param_list()`, `get_tags()`, `extended_param_list()` and `extended_function_list()` interface functions.

To get more info about custom tracebility output formatting for LUA tools, see the default implementation in `<install dir>\lualib\json_ftp.lua`. 



