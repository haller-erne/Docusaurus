---
title: Lua API Reference
sidebar_label: Lua API Reference
sidebar_position: 6
---

# Lua API Reference

Complete API reference for the three global objects available in Lua test scripts.

---

## `session` — Connection & Messaging

### Connection

| Function | Parameters | Description |
|----------|------------|-------------|
| `Connect()` | — | Connect using toolbar Host/Port/Variant |
| `Connect(host, port, variantId)` | `string, number, string` | Connect to a specific controller |
| `Disconnect()` | — | Hard TCP close |
| `DisconnectWithMid3()` | — | Send MID 0003 then close TCP |
| `Sleep(ms)` | `number` | Pause execution (max 60,000ms) |

**Variant IDs**: `"OpenProtocol_Rexroth"`, `"OpenProtocol_BMW"`, `"OpenProtocol_Ford"`

### Handshake

| Function | Parameters | Description |
|----------|------------|-------------|
| `Handshake()` | — | Send MID 0001, wait for MID 0002 (10s timeout) |
| `Handshake(timeoutMs)` | `number` | Handshake with custom timeout |

### Sending

| Function | Parameters | Description |
|----------|------------|-------------|
| `SendMid(midNumber)` | `number` | Send MID with empty body |
| `SendMid(midNumber, fields)` | `number, table` | Send MID with body fields |
| `SendMid(midNumber, fields, headerOverrides)` | `number, table?, table` | Send MID with body fields and per-call header overrides |
| `SendRaw(payload)` | `string` | Send raw ASCII (NUL appended automatically) |

### Header Control

Control header fields sent with `SendMid()`. By default, `SendMid` uses revision=1 and zeros for all other fields.

| Function | Parameters | Description |
|----------|------------|-------------|
| `SetHeader(fields)` | `table` | Set persistent header defaults for all subsequent `SendMid` calls |
| `SetHeader(nil)` | — | Clear all persistent header defaults |
| `GetHeader()` | — | Returns table with current persistent header defaults |
| `ClearHeader()` | — | Clear all persistent header defaults |

**Controllable fields** (all optional):

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `revision` | number | 1 | MID revision number |
| `station` | string | `"00"` | Station ID |
| `spindle` | string | `"00"` | Spindle ID |
| `sequence` | string | `"00"` | Message sequence number |
| `noAck` | number | 0 | No-acknowledge flag (0 or 1) |
| `partCount` | string | `"0"` | Part count |
| `partNumber` | string | `"0"` | Part number |

**Precedence**: per-call overrides > persistent defaults > built-in defaults.

**Example:**
```lua
-- Set defaults once
session:SetHeader({ revision = 3, station = "01", spindle = "02" })

-- All SendMid calls now use rev 3, station 01, spindle 02
session:SendMid(10)
session:SendMid(60, { torqueMin = "100" })

-- Override revision for just this call (station/spindle still from SetHeader)
session:SendMid(8, nil, { revision = 999 })

-- Clear when done
session:ClearHeader()
```

### Receiving

| Function | Parameters | Returns | Description |
|----------|------------|---------|-------------|
| `WaitForMid(mid, timeoutMs)` | `number, number` | `table` | Wait for specific MID (throws on timeout) |
| `WaitForRawResponse(timeoutMs)` | `number` | `table` | Wait for any message (throws on timeout) |
| `TryWaitForRawResponse(timeoutMs)` | `number` | `table\|nil` | Wait for any message (nil on timeout) |

### High-Level Helpers

| Function | Parameters | Description |
|----------|------------|-------------|
| `SelectJob(jobId)` | `number` | Send MID 0038, wait for accept/reject (10s) |
| `StartTightening()` | — | Subscribe to MID 0060 via MID 0008 |
| `StopTightening()` | — | Unsubscribe from MID 0060 via MID 0009 |
| `WaitForResult(timeoutMs)` | `number` | Wait for MID 0061 tightening result |

### Network Simulation

| Function | Parameters | Description |
|----------|------------|-------------|
| `SetNetworkProfile(name)` | `string` | Apply built-in profile (must call before Connect) |
| `SetNetworkProfileCustom(config)` | `table` | Apply custom profile (must call before Connect) |

**Built-in profiles**: `"normal"`, `"poor_radio"`, `"slow_station"`, `"disconnect_after_3"`

**Custom config fields**:

| Field | Type | Default | Description |
|-------|------|---------|-------------|
| `sendDelayMs` | number | 0 | Delay per send (ms) |
| `receiveDelayMs` | number | 0 | Delay per receive (ms) |
| `jitterMs` | number | 0 | Random ± jitter (ms) |
| `packetLossPercent` | number | 0 | Drop probability 0–100 |
| `disconnectAfterMessages` | number | 0 | Auto-disconnect after N messages |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `IsConnected` | boolean | Whether TCP connection is active |
| `ToolHost` | string | Toolbar host value |
| `ToolPort` | number | Toolbar port value |
| `ToolVariantId` | string | Toolbar variant value |

---

## Response Table Structure

Every received message returns a table with:

| Field | Type | Description |
|-------|------|-------------|
| `mid` | number | MID number |
| `revision` | number | Revision number |
| `length` | number | Total message length (bytes) |
| `raw` | string | Full raw ASCII message |
| `body` | string | Body after 20-byte header |
| `parseError` | string/nil | Error if parsing failed |
| `header` | table | Parsed header (see below) |
| `fields` | table | Parsed body fields (**all values are strings**) |

### `header` Sub-Table

| Field | Type | Description |
|-------|------|-------------|
| `Mid` | number | MID number |
| `Revision` | number | Revision |
| `Length` | number | Total length |
| `NoAckFlag` | number | No-ack flag (0 or 1) |
| `Station` | string | Station ID |
| `Spindle` | string | Spindle ID |
| `Sequence` | string | Sequence number |
| `PartCount` | string | Number of message parts |
| `PartNumber` | string | Current part number |

---

## `assert` — Assertions

All assertions accept an optional `message` as the last parameter.

### General

| Function | Parameters | Description |
|----------|------------|-------------|
| `IsTrue(cond, msg?)` | `boolean, string?` | Assert condition is true |
| `IsFalse(cond, msg?)` | `boolean, string?` | Assert condition is false |
| `Equals(expected, actual, msg?)` | `any, any, string?` | Assert values are equal |
| `NotEquals(expected, actual, msg?)` | `any, any, string?` | Assert values differ |
| `NotNil(value, msg?)` | `any, string?` | Assert value is not nil |
| `Fail(message)` | `string` | Unconditionally fail |

### Tightening-Specific

| Function | Parameters | Description |
|----------|------------|-------------|
| `TorqueWithin(result, min, max)` | `table, number, number` | Assert torque in [min, max] |
| `AngleWithin(result, min, max)` | `table, number, number` | Assert angle in [min, max] |
| `NoAlarm(result)` | `table` | Assert no error code |
| `MidFieldEquals(result, field, expected)` | `table, string, any` | Assert field equals value |

---

## `log` — Logging & Steps

| Function | Parameters | Description |
|----------|------------|-------------|
| `Step(label)` | `string` | Mark a logical test step |
| `Info(message)` | `string` | Log informational message |
| `Warn(message)` | `string` | Log warning |
| `Error(message)` | `string` | Log error (marks step as Failed) |
| `Debug(message)` | `string` | Log debug message |
| `Break(label?)` | `string?` | Pause for manual inspection (5 min auto-resume) |

---

## Global Functions

| Function | Returns | Description |
|----------|---------|-------------|
| `createSession()` | `ScriptSession` | Create an independent TCP session |
| `print(...)` | — | Redirected to `log:Debug()` |
