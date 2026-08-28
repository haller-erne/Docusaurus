---
title: annotations/LuaBluegiga
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/LuaBluegiga.lua`.*

## BluegigaDevice

### attclient_attribute_read_by_handle


```lua
(method) BluegigaDevice:attclient_attribute_read_by_handle(hConn: integer, hAttr: integer)
  -> Return: nil
```

Read attribute

@*param* `hConn` — Connection handle (as received through 'ble_evt_connection_status' event)

@*param* `hAttr` — Attribute value handle

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### attclient_attribute_write


```lua
(method) BluegigaDevice:attclient_attribute_write(hConn: integer, hAttr: integer, data: integer[])
  -> Return: nil
```

Write value for attribute

@*param* `hConn` — Connection handle (as received through 'ble_evt_connection_status' event)

@*param* `hAttr` — Attribute value handle

@*param* `data` — Array of (byte) data

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### attclient_find_information


```lua
(method) BluegigaDevice:attclient_find_information(hConn: integer, hStart: integer|nil, hEnd: integer|nil)
  -> Return: nil
```

Find information, i.e. return all attributes information for a given handle range

@*param* `hConn` — Connection handle (as received through 'ble_evt_connection_status' event)

@*param* `hStart` — Attribute value handle to start searching (0x0001 = FIRST_HANDLE, default)

@*param* `hEnd` — Attribute value handle to stop searching (0xFFFF = LAST_HANDLE, default)

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### attclient_read_by_group_type


```lua
(method) BluegigaDevice:attclient_read_by_group_type(hConn: integer, uuid16: integer, hStart: integer|nil, hEnd: integer|nil)
  -> Return: nil
```

Read attribute group ranges

@*param* `hConn` — Connection handle (as received through 'ble_evt_connection_status' event)

@*param* `uuid16` — 16-bit UUID of group to read

@*param* `hStart` — Attribute value handle to start searching (0x0001 = FIRST_HANDLE, default)

@*param* `hEnd` — Attribute value handle to stop searching (0xFFFF = LAST_HANDLE, default)

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### attclient_write_command


```lua
(method) BluegigaDevice:attclient_write_command(hConn: integer, hAttr: integer, data: integer[])
  -> Return: nil
```

Write command to attribute

@*param* `hConn` — Connection handle (as received through 'ble_evt_connection_status' event)

@*param* `hAttr` — Attribute value handle

@*param* `data` — Array of (byte) data

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### close


```lua
(method) BluegigaDevice:close()
  -> Return: nil
```

Close the virtual com port to the device

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### connection_disconnect


```lua
(async) (method) BluegigaDevice:connection_disconnect(hConn: integer)
```

Disconnect connection

@*param* `hConn` — Connection handle

### gap_connect_direct


```lua
(async) (method) BluegigaDevice:gap_connect_direct(ble_addr: string|integer[], addr_type: integer, conn_interval_min: integer, conn_interval_max: integer, timeout: integer, latency: integer)
  -> Return: nil
```

Initiate a direct GAP connect

@*param* `ble_addr` — Ble connect address, e.g. `{0xDC,0x53,0x6A,0x1D,0x86,0x99}` or 'DC:53:6A:1D:86:99'

@*param* `addr_type` — Address type (one of PUBLIC, RANDOM, MAX)

@*param* `conn_interval_min` — minimum connection interval

@*param* `conn_interval_max` — maximim connection interval

@*param* `timeout` — Timeout

@*param* `latency` — Latency

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### gap_discover_start


```lua
(async) (method) BluegigaDevice:gap_discover_start(mode?: integer, class_filter?: integer, id_filter?: string)
  -> Return: nil
```

Start receiving advertisement data (listen for bluetooth discovery frames)

@*param* `mode` — Discover mode (1, 2, 3, default = 1)

@*param* `class_filter` — 16-bit UUID filter (default = 0 = no filter)

@*param* `id_filter` — String (MAC address) in the format "ab:cd:03:04:05:06" (default = no filter)

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### gap_discover_stop


```lua
(async) (method) BluegigaDevice:gap_discover_stop()
  -> Return: nil
```

Stop receiving advertisment data

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### gap_set_scan_parameters


```lua
(async) (method) BluegigaDevice:gap_set_scan_parameters(scan_interval?: integer, scan_window?: integer, active_scan?: integer)
  -> Return: nil
```

Set the BLE scan parameters

@*param* `scan_interval` — Scan interaval in milliseconds (default 125ms)

@*param* `scan_window` — Scan windows in milliseconds (default 125ms)

@*param* `active_scan` — Scan mode (default 0 = no active scan)

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### open


```lua
(method) BluegigaDevice:open()
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

### poll


```lua
(method) BluegigaDevice:poll(timeout: integer|nil)
  -> Ok: true|nil
  2. Error: string?
```

Poll function. Must be called cyclically to process messages

@*param* `timeout` — Timeout for polling in milliseconds (default 0, i.e. not blocking)

@*return* `Ok` — Returns true, if ok, else nil,error

@*return* `Error` — Error message

```lua
Ok:
    | true
```

### register_callback


```lua
(method) BluegigaDevice:register_callback(eventName: "ble_evt_attclient_attribute_value"|"ble_evt_attclient_find_information_found"|"ble_evt_attclient_group_found"|"ble_evt_attclient_procedure_completed"|"ble_evt_connection_disconnected"...(+12), callbackFn: any)
  -> Ok: true|nil
  2. Error: string?
```

Register a callback function for a given bluetooth event

@*param* `eventName` — Name of callback

@*return* `Ok` — Returns true, if ok, else nil,error

@*return* `Error` — Error message

```lua
eventName:
    | "ble_rsp_system_get_info" -- Request bluetooth system info (version, etc.) 
    | "ble_rsp_gap_set_scan_parameters"
    | "ble_evt_gap_scan_response"
    | "ble_evt_connection_status"
    | "ble_evt_attclient_group_found"
    | "ble_evt_attclient_procedure_completed"
    | "ble_evt_attclient_find_information_found"
    | "ble_evt_attclient_attribute_value"
    | "ble_evt_connection_disconnected"
    | "ble_rsp_system_whitelist_append"
    | "ble_evt_sm_bond_status"
    | "ble_evt_sm_bonding_fail"
    | "ble_rsp_sm_encrypt_start"
    | "ble_rsp_sm_set_bondable_mode"
    | "ble_rsp_attclient_read_by_handle"
    | "ble_rsp_attclient_write_command"
    | "ble_rsp_attclient_attribute_write"

Ok:
    | true
```

### sm_delete_bonding


```lua
(async) (method) BluegigaDevice:sm_delete_bonding(hBond: integer)
  -> Return: nil
```

Delete the bonding from the Bluegigas internal (persistent) bonding table

@*param* `hBond` — Bonding handle

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### sm_encrypt_start


```lua
(async) (method) BluegigaDevice:sm_encrypt_start(hConn: integer, mode: integer)
```

Start encryption sequence

@*param* `hConn` — Connection handle

@*param* `mode` — Set the bonding mode (1 = create bonding if not already esists, 0 = do not create bonding)

### sm_set_bondable_mode


```lua
(async) (method) BluegigaDevice:sm_set_bondable_mode(mode: integer)
  -> Return: nil
```

Set bondable mode

@*param* `mode` — Set the bonding mode

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### system_get_info


```lua
(async) (method) BluegigaDevice:system_get_info()
  -> Return: nil
```

Exectue the get system info command

@*return* `Return` — The function always returns nil, if there is an error, it throws()

### system_reset


```lua
(async) (method) BluegigaDevice:system_reset(mode: integer)
  -> Return: nil
```

Execute a system reset

@*param* `mode` — Set the reset mode

@*return* `Return` — The function always returns nil, if there is an error, it throws()




## BluegigaEvents



