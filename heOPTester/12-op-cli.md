---
title: op-cli — Headless Test Runner (CI)
sidebar_label: op-cli (CI)
sidebar_position: 12
---

# op-cli — Headless Test Runner

`op-cli` runs the same Lua test scripts as the GUI — headless, from the command line or a CI pipeline. It ships inside the OpenProtocol Tester installer (0.10.0-alpha onward) as `op-cli.exe` and needs no separate runtime.

```powershell
op-cli run script.lua --host 10.10.2.244 --port 4545 --junit result.xml
if ($LASTEXITCODE -ne 0) { /* step fails */ }
```

The scripting API (`session`, `assert`, `log`) is identical to the GUI — see the [Lua API Reference](06-lua-api-reference.md). This page covers what is *different* when no GUI is involved: licensing, exit codes, reports, and CI patterns.

## Licensing for Headless Runs

Headless runs are **fail-closed** — the opposite of the GUI's demo mode. There is no demo, no grace period, and no reminder dialog a pipeline could click through. The license is checked **before the script file is read**, so an unlicensed run executes nothing.

- The license is bound to the **machine name**: each PC or CI runner needs its own `OPTester.lic` (see [Licensing](10-licensing.md) for obtaining one). Copying a file from another machine fails validation with a signature error — this is expected, not a bug.
- Default location: `C:\ProgramData\Haller + Erne GmbH\Licensing\OPTester.lic`. Reading it requires no elevation, so CI service accounts work.
- Override per run with `--license <path>` when the file lives elsewhere (e.g., a secured agent tool directory).
- Every failure mode exits **4** and says exactly what is wrong on stderr: file not found (path named), store unreadable (a directory sits at the license path), invalid/corrupt document, or validation failure with the specific cause.

```text
License error: license file is invalid or corrupt (no valid activation key). Headless operation requires a valid license.
```

## Command Line

```
op-cli run <script.lua> [options]
```

| Option | Default | Purpose |
|---|---|---|
| `--host <host>` | `localhost` | tool host for `session:Connect()` |
| `--port <port>` | `4545` | tool port |
| `--variant <id>` | `OpenProtocol_Rexroth` | `OpenProtocol_Rexroth` / `_BMW` / `_Ford` / `_Generic` |
| `--timeout <ms>` | `300000` | hard backstop for hung scripts |
| `--unrestricted` | off | full Lua standard library (see Sandbox) |
| `--junit <file>` | off | JUnit XML report |
| `--json <file>` | off | NDJSON machine log (independent of `--junit`) |
| `--license <path>` | default store | license file override |
| `-h`, `--help` | — | usage; works anywhere in the line, exits 0 |

## Exit Codes

The contract — stable and safe to gate pipelines on:

| Code | Meaning | stderr line |
|---|---|---|
| 0 | pass | — (steps always stream to stdout) |
| 1 | assertion failed | `Test failed (assertion): <message>` |
| 2 | connection error | `Connection error: <message>` |
| 3 | hard timeout | `Timeout: Hard timeout (<ms>) exceeded` |
| 4 | license missing/invalid | `License error: <cause>` |
| 5 | usage / script / internal | usage block for bad args; `Script error: <message>` for script failures |
| 130 | cancelled | `Cancelled: run aborted by user or pipeline` |

Notes:

- **Argument parse errors (5) are caught before the license gate** — a typo fails fast without touching licensing. Everything else passes the gate first.
- Failures are classified by *exception type*, not message text: a script file-I/O error is exit 5, never disguised as a connection error.
- **Ctrl+C** unwinds cleanly to 130 instead of killing the process.

## Reports

- `--junit` — JUnit XML; each `log:Step` becomes a test case. A connection failure is reported as `tests=1, failures=0, errors=1` so dashboards show it as an error, not a failed assertion.
- `--json` — NDJSON (one JSON object per line, flushed live), ending with a `runFinished` summary: test name, status, outcome, exit code, duration, error message.
- A broken report path **does not change the exit code** — a distinct `Report error:` line names the problem while the run's own verdict stands.

## Sandbox

Scripts run in a soft Lua sandbox by default: `io`, `os`, and other system libraries are unavailable. `--unrestricted` opts into the full standard library — scripts can then read and write the file system. Only use it with scripts you trust; CI jobs should normally stay sandboxed.

## Behavior Corner Cases

- **Mid-run controller drop:** the current `session:` wait runs to its timeout (exit 3). The *next* `session:` call auto-reconnects (with re-handshake); a failed reconnect reports exit 2. So a blip recovers, a dead controller fails loudly.
- **Breakpoints** auto-continue — scripts using `breakpoint:` never block headless.
- `.lua.meta` sidecars feed description/tags into reports, same as the GUI.
- `--host/--port/--variant` become the `session` defaults, so scripts can call `session:Connect()` bare and still be aimed from the command line.

## CI Patterns

Minimal pipeline step:

```yaml
- script: op-cli run tests/handshake.lua --host $(ControllerIp) --junit $(Build.ArtifactStagingDirectory)/result.xml
  displayName: Controller smoke test
```

License handling on agents: place the machine-specific `OPTester.lic` in `C:\ProgramData\Haller + Erne GmbH\Licensing\` once per agent (survives upgrades), or keep it in a secured store and pass `--license`.

Gating on specific outcomes, e.g. allow retry on connection errors only:

```powershell
op-cli run script.lua --host $ip
switch ($LASTEXITCODE) {
  0 { break }
  2 { Write-Host "Controller unreachable — retrying later"; break }
  default { exit $LASTEXITCODE }
}
```

## Quick Troubleshooting

| Symptom | Cause / fix |
|---|---|
| exit 4, "license file not found" | place `OPTester.lic` in the ProgramData path or pass `--license` |
| exit 4, "Cryptographic signature validation failed" | license belongs to a different machine name — obtain one for this host |
| exit 2 on a reachable controller | wrong `--variant` or port; check the controller's Open Protocol settings |
| exit 3 with a long hang before it | script waits longer than expected — pass `--timeout`, or the controller dropped mid-wait (see corner cases) |
| exit 5, "attempt to index a nil value" on `io`/`os` | sandboxed run — add `--unrestricted` only if the script is trusted |
