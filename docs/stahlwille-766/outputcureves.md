# Output Curves Export & Posting (Tightening Graph Recorder)

This document explains how the tightening (torque/angle) graph is recorded, automatically exported as JSON, and posted to an external system (e.g. `sys3xxgateway`). It also describes the configuration files you must edit and how to troubleshoot or extend the behavior.

---
## 1. What Was Added / Changed
| Area | Change |
|------|--------|
| Recording | `TighteningGraphRecorder` now buffers tightening curve points (torque, angle, time). |
| Start Logic | Recording begins automatically on first significant change (torque-only vs angle+torque logic). |
| Stop Logic | Recording ends when `Result.Status != 1` (tool no longer active). |
| Export | A JSON payload is generated summarizing the cycle (steps, curve arrays, meta fields). |
| Posting | JSON is automatically posted asynchronously to the HTTP endpoint defined in `outputs.json`. |
| Config Split | Tool/program config remains in `appdata.json`; output/export settings moved to new `outputs.json`. |

---
## 2. Prerequisites
- Application is running (backend service `he.ctrlx.app.commsw`).
- `appdata.json` contains valid P-Set entries (program definitions).
- `outputs.json` exists beside `appdata.json` and defines at least `OutputHttpURL`.
- Your external receiver (e.g. `sys3xxgateway`) is reachable over HTTP (no auth yet).

---
## 3. File Locations
| Purpose | Path (Windows, Development) |
|---------|-----------------------------|
| Tool config (`appdata.json`) | `%USERPROFILE%\Documents\My ctrlX\he-ctrlx-app-commsw\appdata.json` |
| Output config (`outputs.json`) | `%USERPROFILE%\Documents\My ctrlX\he-ctrlx-app-commsw\outputs.json` |

(When snapped on a ctrlX Linux runtime: `$SNAP_COMMON/solutions/activeConfiguration/he-ctrlx-app-commsw/`)

---
## 4. Configuration Files
### 4.1 appdata.json (tool / program)
Example:
```json
{
  "IPAddress": "10.10.2.176",
  "IPPort": 4002,
  "Psets": [
    { "pset": 1,  "name": "My Prg 1",  "type": "JNT", "unit": "Nm", "t_min": 4.1, "t_tgt": 4.5, "t_max": 5.5 },
    { "pset": 11, "name": "My Prg 11", "type": "JNA", "a_min": 5, "a_tgt": 15, "a_max": 25, "t_thr": 4.0 },
    { "pset": 21, "name": "My Prg 21", "type": "JAT", "t_min": 4.2, "t_tgt": 4.6, "t_max": 5.6, "a_tgt": 15 },
    { "pset": 31, "name": "My Prg 31", "type": "JTA", "t_min": 4.3, "t_tgt": 4.7, "t_max": 5.7, "a_tgt": 15 }
  ]
}
```

### 4.2 outputs.json (export / posting)
Example:
```json
{
  "OutputHttpURL": "http://127.0.0.1:8889",
  "TempStoragePath": ""
}
```
Fields:
- `OutputHttpURL` (string, required): Base URL to POST the JSON to. No trailing `/x` is appended automatically—currently the code uses the URL as-is (trimmed). Adjust your endpoint accordingly.
- `TempStoragePath` (reserved, optional): Future use for local intermediate storage.

> If `OutputHttpURL` is missing or empty, posting is skipped with a warning log.

---
## 5. Recording Logic (When Data Is Captured)
| Mode (Derived from P-Set) | Start Condition | Sample Threshold Key |
|---------------------------|-----------------|----------------------|
| Torque-only (angle target ~ 0) | First significant torque delta | > 0.1 Nm (`TORQUE_NOISE_THRESHOLD`) |
| Angle+Torque | First significant angle delta | > 0.01° (`ANGLE_CHANGE_THRESHOLD`) |

During recording:
- Only materially changing points are appended (noise filtered by thresholds above).
- Final point is always added even if change is below threshold.
- Time axis is seconds since start (rounded to 2 decimals).

Stop triggers when `Result.Status != 1` (non-active). On stop:
1. Final data point appended if needed.
2. JSON is generated (`ExportAsJson`).
3. JSON is posted asynchronously (`PostDataAsync`).

---
## 6. JSON Payload Schema (Sample)
Example (abridged):
```json
{
  "nr": 1,
  "cycle": 852345678.1234,
  "result": "OK",
  "channel": "ST100|NEXO2-A-15",
  "prg nr": 11,
  "prg name": "My Prg 11",
  "prg date": "2025-09-11T15:32:45",
  "nominal torque": 5.5,
  "date": "2025-09-11 15:32:45",
  "torque unit": "Nm",
  "last cmd": "My Prg 11",
  "quality code": "3",
  "total time": "1.240000",
  "tool serial": "473000017",
  "tightening steps": [
    {
      "result": "OK",
      "name": "Tightening",
      "step type": "standard",
      "last cmd": "My Prg 11",
      "torque": 4.48,
      "angle": 14.9,
      "duration": 1.24,
      "quality code": "3",
      "speed": 50,
      "tightening functions": [
        { "name": "TF Angle", "nom": 15.0, "act": 14.9 },
        { "name": "MFs TimeMax", "nom": 100.0, "act": 1.24 },
        { "name": "MFs TorqueMax", "nom": 5.5, "act": 4.48 }
      ],
      "graph": {
        "angle values": [0, 0.5, 1.2, 2.0, 5.0, 10.2, 14.9],
        "torque values": [0, 0.2, 0.5, 1.1, 2.5, 3.9, 4.48],
        "time values":   [0, 0.1, 0.2, 0.35, 0.6, 0.9, 1.24]
      }
    }
  ]
}
```
Field notes:
- `nr`: Sequential cycle number placeholder (fixed 1 currently).
- `cycle`: Seconds since 1998-09-06 (basis used by some tightening ecosystems).
- `result`: Overall cycle result derived from tool status (3 = OK, else NOK).
- `tightening steps`: Always a single tightening step in current implementation.
- `graph` arrays are parallel: same length & index alignment.

---
## 7. Posting Mechanism
- Implemented in `TighteningGraphRecorder.PostDataAsync`.
- Uses `HttpClient.PostAsync` with content type `application/json`.
- Endpoint = value from `outputs.json` (no additional path suffix automatically added in the current refactored version—confirm your code branch; earlier versions appended `/x`).
- Asynchronous fire-and-forget (`async void`): failures are logged but do not block the tightening workflow.

### Return / Error Handling
| Scenario | Behavior |
|----------|----------|
| 2xx response | Info log: success |
| Non-2xx | Error log with status code |
| Exception | Error log with exception details |
| Missing URL | Warning log, skip post |

---
## 8. Integrating with `sys3xxgateway`
(Assuming `sys3xxgateway` is an HTTP ingestion service waiting for tightening curve payloads.)

### Steps
1. Start (or configure) `sys3xxgateway` to listen on the same host/port you place in `outputs.json`.
2. Confirm it accepts POST with `Content-Type: application/json`.
3. Place the base URL (e.g. `http://192.168.1.50:9000/api/tightening`) in `outputs.json`:
   ```json
   { "OutputHttpURL": "http://192.168.1.50:9000/api/tightening" }
   ```
4. Perform a tightening cycle with the app enabled.
5. Monitor gateway logs for receipt; compare payload to schema above.
6. If needed, transform the JSON downstream (e.g. map to database or forward to MES).

### Validation Tip
Use a local mock first:
```bash
# Example (PowerShell) using a quick listener
# Requires `socat` or use a small Node/Express/Flask stub instead.
```
Or with a lightweight Node script:
```js
import http from 'http';
http.createServer((req,res)=>{ if(req.method==='POST'){ let b=''; req.on('data',d=>b+=d); req.on('end',()=>{ console.log('Received:', b); res.writeHead(200); res.end('OK'); }); } else { res.writeHead(404); res.end(); }}).listen(8889);
```
Set `OutputHttpURL` to `http://127.0.0.1:8889` and run a cycle.

---
## 9. How to Disable / Pause Export
Currently export is tied to recording stop. To effectively disable posting:
- Remove or blank the `OutputHttpURL` in `outputs.json` (will log a warning and skip).
- (Optional) Add a feature flag in code (future enhancement).

---
## 10. Troubleshooting
| Symptom | Likely Cause | Resolution |
|---------|--------------|-----------|
| Warning: URL not configured | Missing / empty `OutputHttpURL` | Edit `outputs.json` & restart app (or trigger reload). |
| Error: Failed to post graph data | Gateway down or wrong URL | Ping the host; verify port; test with curl. |
| No recording starts | Torque/angle change below thresholds | Check actual tool output; lower thresholds (code constants). |
| Graph arrays empty | Recording never started | Confirm P-Set logic & tool status transitions. |
| Wrong program meta | Active P-Set not passed correctly | Inspect caller supplying `activePSet` to `ProcessData`. |
| Multiple cycles overwrite | `nr` fixed at 1 | Extend implementation to increment or include external cycle ID. |

### Logging
Search for tags:
- `Graph recording started`
- `Graph recording stopped`
- `Graph data exported`
- `Successfully posted graph data`

---
## 11. Extending Behavior
| Goal | Hint |
|------|------|
| Persist local copy | Write `jsonData` to `TempStoragePath` if set. |
| Retry logic | Replace `async void` with `Task` + retry policy (e.g. Polly). |
| Authentication | Add headers (Bearer token / Basic) before `PostAsync`. |
| Batch upload | Accumulate multiple cycles then post array. |
| Data Layer mirror | Publish JSON or curve arrays to ctrlX Data Layer nodes. |

---
## 12. Security Considerations
- Currently no TLS / certificate validation customization (plain HTTP allowed). Prefer HTTPS for production.
- No authentication—ensure gateway is on a protected network segment.
- Data volume: curves can grow; consider size limits or compression if network constrained.

---
## 13. Quick Checklist
- [ ] `appdata.json` valid & P-Sets loaded (log shows each PSet).
- [ ] `outputs.json` contains correct `OutputHttpURL`.
- [ ] External listener reachable (curl test succeeds).
- [ ] Perform tightening → logs show start + stop + export + post.
- [ ] Receiver logs / console show JSON.

---
## 14. Example Manual Test Flow
1. Edit `outputs.json` → set `http://127.0.0.1:8889`.
2. Start local mock listener (see Node snippet above).
3. Start backend (`dotnet run ...`).
4. Trigger tightening cycle on tool (ensure status transitions off `1`).
5. Observe console: should show exported + posted.
6. Inspect mock output.

---
## 15. Future Improvements (Backlog Ideas)
- Incremental cycle counter (`nr`).
- Configurable thresholds via `outputs.json`.
- Offline buffering + resend on reconnect.
- Optional WebSocket streaming.
- Multi-step tightening support (array of steps). 
- Data Layer node publishing for real-time curve.

---
## 16. Summary
You configure tool behavior in `appdata.json` and export/post behavior in `outputs.json`. The system auto-detects the start and end of a tightening cycle, records meaningful torque/angle/time points, exports a compact JSON describing the cycle, and posts it to your configured HTTP endpoint (e.g. `sys3xxgateway`). Minimal setup: ensure `OutputHttpURL` is set and that a listener is running.

If you need more automation (retry, batching, security), extend `PostDataAsync` accordingly.

---
**Need help or want an enhancement?** Add it to your internal backlog or open a ticket referencing this document (outputcureves.md).
