# ![logo](logo.png) Corona HTML5 Plugin Boilerplate

__A bare-bones boilerplate to build Corona HTML5 plugins.__

## Overview

 - Plugin files must reside in the ___root___ directory.
 - Plugin files are compiled with the HTML5 build.
 - JS file must be named `<myplugin>_js.js` to work.
 - Lua file must be named `<myplugin>.lua` to work.
 - Refs to `myplugin` inside files must be changed to your plugin name.
 - Refs to `<myplugin>_js` inside files must be changed to your plugin name.

_Replace <myplugin\> with your plugin name._

## Direct Communication

__JavaScript__

_Window property must be named `<myplugin>_js`. Replace <myplugin\> with your plugin name._

```js
window.myplugin_js = 
{
  echo: function(str) {
    return str
  }
};
```

__Lua__

_Replace references to `myplugin` with your plugin name._

```lua
local myplugin = require("myplugin")

local result = myplugin.echo("Hello")

print(result) --> Hello
```

## Event Driven

__JavaScript__ (dispatcher)

_Window property must be named `<myplugin>_js`. Replace <myplugin\> with your plugin name._

```js
window.myplugin_js = 
{
  echo: function(str) {
    this.dispatchEvent({name: 'echo', data: { value: str }})
  }
}
```

__Lua__ (event listener)

_Replace references to `myplugin` with your plugin name._

```lua
local myplugin = require("myplugin")

local function echoListener(event)
  print(event.data.value) --> Hello
end

myplugin.addEventListener(echoListener)

myplugin.echo("Hello")
```

## Auto-Type Conversion

### Lua to JS

 - Number
 - String
 - Boolean
 - Array (table) -> Array
 - Table -> Object

 ### JS to Lua

 - Number
 - String
 - Boolean
 - Array -> Table (array)
 - Object -> Table

 ## Notes

  - To see Lua `print` output you must run the _index-debug.html_ of the HTML5 build (or use [this](https://github.com/develephant/corona-html5-console-plugin)).

## create.sh

The `create.sh` tool will only work on Mac OS (Windows submission welcome 😉). 

The tool creates a plugin directory and replaces all the `myplugin` file names and references with the specified plugin name.

⚠️ _NOTE: Use this tool at your own risk._

### Usage

Using the terminal, make sure you are in the root __corona-html5-plugin-boilerplate__ directory and run:

```sh
./create.sh <plugin_name> <plugin_directory_path>
```

The directory should not exist, it will be created for you.

__Example__

```sh
./create.sh show_alert ~/Desktop/show_alert
```

_Do not use dashes in your HTML5 plugin names._