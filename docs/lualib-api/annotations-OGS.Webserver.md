---
title: annotations/OGS.Webserver
toc_min_heading_level: 2
toc_max_heading_level: 3
---

*Auto-generated API documentation for `annotations/OGS.Webserver.lua`.*

## Webserver

### GetRoot


```lua
function Webserver.GetRoot()
  -> basepath: string
```

Get the filesystem base path for the webserver

@*return* `basepath` — Returns the web server base path (filesystem root)

### MapUrl


```lua
function Webserver.MapUrl(urlprefix: string, path: string)
  -> success: boolean
```

Register a URL mapping, so requests to this URL are mapped to a different filesystem path
This allows hosting web resources in another filesystem location and is used by 
the lualib libraries to allow serving content from outside the project folder. 
If called with a nil path, it unregisters the mapping (URL-prefix).

@*return* `success` — Returns true, if mapping was registered/deleted

### RegUrl


```lua
function Webserver.RegUrl(urlprefix: string, handler: fun(AbsPath: string, QueryString: stringlib, Verb: integer, Data: stringlib, FullUrl: string):string|nil)
```

Register a URL in the webserver, so requests to this URL are handled through LUA 
If a URL is registered, then the LUA code is called instead of the default
web server (file) handler. LUA has to handle the request and provide a response.
The URL is treated as a prefix match, so sub-urls are matched as well.
If called with a nil function, it unregisters the handler (URL-prefix).

@*param* `urlprefix` — URL path prefix for matching ('/x/y')




## Webserver

### GetRoot


```lua
function Webserver.GetRoot()
  -> basepath: string
```

Get the filesystem base path for the webserver

@*return* `basepath` — Returns the web server base path (filesystem root)

### MapUrl


```lua
function Webserver.MapUrl(urlprefix: string, path: string)
  -> success: boolean
```

Register a URL mapping, so requests to this URL are mapped to a different filesystem path
This allows hosting web resources in another filesystem location and is used by 
the lualib libraries to allow serving content from outside the project folder. 
If called with a nil path, it unregisters the mapping (URL-prefix).

@*return* `success` — Returns true, if mapping was registered/deleted

### RegUrl


```lua
function Webserver.RegUrl(urlprefix: string, handler: fun(AbsPath: string, QueryString: stringlib, Verb: integer, Data: stringlib, FullUrl: string):string|nil)
```

Register a URL in the webserver, so requests to this URL are handled through LUA 
If a URL is registered, then the LUA code is called instead of the default
web server (file) handler. LUA has to handle the request and provide a response.
The URL is treated as a prefix match, so sub-urls are matched as well.
If called with a nil function, it unregisters the handler (URL-prefix).

@*param* `urlprefix` — URL path prefix for matching ('/x/y')




## Webserver.GetRoot


```lua
function Webserver.GetRoot()
  -> basepath: string
```




## Webserver.MapUrl


```lua
function Webserver.MapUrl(urlprefix: string, path: string)
  -> success: boolean
```




## Webserver.RegUrl


```lua
function Webserver.RegUrl(urlprefix: string, handler: fun(AbsPath: string, QueryString: stringlib, Verb: integer, Data: stringlib, FullUrl: string):string|nil)
```



