// 
// myplugin_js.js
// Copyright (c) 2018 Corona Labs Inc. All rights reserved.
//

// JS plugin is an child object of 'window'
window.myplugin_js = 
{
  echo: function(str) {
    return str
  }

  //more functions here
};

console.log('myplugin_js is loaded');
