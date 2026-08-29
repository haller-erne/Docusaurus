---
title: barcode_base
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `barcode_base.lua`.*

## BarCode_AddNew


```lua
function BarCode_AddNew(source: any, name: any, rawCode: any)
  -> integer
```




## BarCode_Check


```lua
function BarCode_Check(tag: any, code: any)
  -> integer
```




## BarCode_CheckByName


```lua
function BarCode_CheckByName(source: any, name: any)
  -> integer
  2. string
  3. string
```




## BarCode_CheckPartID


```lua
function BarCode_CheckPartID(barcode_tbl: any)
  -> string
```




## BarCode_CheckTag


```lua
function BarCode_CheckTag(tag: any, value: any)
  -> integer|nil
```




## BarCode_GetActionBarcode


```lua
function BarCode_GetActionBarcode(mask: any)
  -> integer
  2. string
```




## BarCode_GetChangeflag


```lua
function BarCode_GetChangeflag()
  -> integer
```




## BarCode_GetLastMask


```lua
function BarCode_GetLastMask()
  -> string
```




## BarCode_GetMerged


```lua
function BarCode_GetMerged()
  -> unknown
```




## BarCode_GetOperationID


```lua
function BarCode_GetOperationID(CurrOp: any, CurrPartID: any)
  -> string
```




## BarCode_GetPartID


```lua
function BarCode_GetPartID()
  -> string
```




## BarCode_GetTable


```lua
function BarCode_GetTable()
  -> table
```




## BarCode_GetWorkflowSelector


```lua
function BarCode_GetWorkflowSelector()
  -> string
```




## BarCode_Init


```lua
function BarCode_Init()
  -> table
```




## BarCode_InsertByName


```lua
function BarCode_InsertByName(source: any, name: any, rawCode: any)
  -> integer
```




## BarCode_Reset


```lua
function BarCode_Reset(full: any)
```




## BarCode_ResetChangeflag


```lua
function BarCode_ResetChangeflag()
```




## Barcode_LastCode


```lua
string
```




## Barcode_SetFirstIfTblEmpty


```lua
function Barcode_SetFirstIfTblEmpty()
```




## Barcode_StartAssembly


```lua
function Barcode_StartAssembly()
```


```lua
function
```


```lua
function
```




## Barcode_StopAssembly


```lua
function Barcode_StopAssembly(final_state: any, last_task_state: any)
```


```lua
function
```




## action_barcode


```lua
string
```


```lua
string
```


```lua
string
```




## action_barcode_length


```lua
integer
```




## active_barcodes


```lua
table
```


```lua
table
```


```lua
table
```




## assembly_in_process


```lua
integer
```


```lua
integer
```


```lua
integer
```


```lua
integer
```




## barcode_changed


```lua
integer
```


```lua
integer
```


```lua
integer
```


```lua
integer
```


```lua
integer
```


```lua
integer
```




## barcode_first_change


```lua
integer
```


```lua
integer
```


```lua
integer
```


```lua
integer
```


```lua
integer
```




## barcodes


```lua
table
```




## match_mask


```lua
function match_mask(mask: any, str: any)
  -> boolean
```




## sanitize


```lua
function sanitize(val: any)
  -> string
```



