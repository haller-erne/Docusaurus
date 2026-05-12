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
| `SendRaw(payload)` | `string` | Send raw ASCII (NUL appended automatically) |

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
