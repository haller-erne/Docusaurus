---
title: libtools/tool/button_ble
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `libtools/tool/button_ble.lua`.*

## BleAdvertismentData

### bthome


```lua
BleBtHomeData|nil
```

If the device is a bthome device, then decoded data here

### id


```lua
string
```

Unique MAC address of the BLE device

### name


```lua
string
```

Local device name (if provided, else empty string)

### response


```lua
table<integer, string>
```

The actual advertisment data as key/value (binary string) data

### rssi


```lua
integer
```

The RSSI level

### service


```lua
integer
```

16-Bit service id (32/128-bit IDs are only provided in the response data)




## BleBtHomeData

### action


```lua
integer
```

Action code (0 = none, 1 = click, 2 = doubleclick, ...)

### battery


```lua
integer
```

Battery level (0-100)

### button


```lua
string
```

decoded action ('press', 'double_press', ...)

### flags


```lua
integer
```

BTHome flags 0x40 = cyclic bthome, 0x44 = trigger bthome

### seq


```lua
integer
```

Sequence number (to detect multiple frames, e. g. increments once per button press)



