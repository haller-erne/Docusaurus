---
title: Data Layer Control
sidebar_label: Data Layer
---

## Main Node
`he/commsw/app/tool1` exposing `command`, `state`, `lastResult`.

Write `command` to set `pset` and pulse `enable` (rising edge loads PSet; falling edge aborts active tightening). Continuous enable not supported.

Errors (missing PSet, transfer failures) reported through `state`.

### Summary
- `command`: write (pset + enable edge)
- `state`: read (connection/operational)
- `lastResult`: read (torque/angle/result JSON)

> TODO Image 3 placeholder (Data Layer browser view).
:::note Image Placeholder
`/img/user-guide/datalayer-nodes.png` – Data Layer browser with nodes expanded.
`/img/user-guide/datalayer-lastresult.png` – Example `lastResult` JSON payload.
:::
