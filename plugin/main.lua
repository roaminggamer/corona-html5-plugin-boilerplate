-- 
-- main.lua
-- Copyright (c) 2018 Corona Labs Inc. All rights reserved.
--
-- A sample of using JS native plugin for Corona

local myplugin = require("myplugin")

local result = myplugin.echo("myplugin is cool!")

print(result)