# Corona HTML5 Plugin Boilerplate

A dry structure to build Corona HTML5 plugins.

## Overview

 - Plugin files must reside in the ___root___ directory.
 - Plugin files are compiled with the HTML5 build.
 - JS file must be named `<myplugin>_js.js` to work.
 - Lua file shoud be named `<myplugin>.lua`.

## Direct Communication

__JavaScript__

```js
window.myplugin_js = 
{
  echo: function(str) {
    return str
  }
};
```

__Lua__

```lua
local myplugin = require("myplugin")

local result = myplugin.echo("Hello")

print(result) --> Hello
```

## Event Listeners

__JavaScript__

```js
window.myplugin_js = 
{
  echo: function(str) {
    this.dispatchEvent({name: 'echo', value: str})
  }
}
```

__Lua__

```lua
local myplugin = require("myplugin")

local function echoListener(event)
  event = json.decode(event)

  print(event.value) --> Hello
end

myplugin.addEventListener(echoListener)

myplugin.echo("Hello")
```

## Data Types

### Lua to JS

 - Number
 - String
 - Boolean
 - Array (Table)
 - Table

 ### JS to Lua

 - Number
 - String
 - Boolean
 - Array
 - Object