// ==UserScript==
// @name          Ninja Search
// @namespace     http://drnicwilliams.com/
// @description   Instant autocompletion for any <select> drop downs on any page
// @include       https://*
// @include       http://*
// @version       1.0
// ==/UserScript==

(function() {
  var head = document.getElementsByTagName("head")[0];
  
  var flexselect_theme = function() {
    var style = document.createElement("link");
    style.setAttribute("type", "text/css");
    style.setAttribute("rel", "stylesheet");
    style.setAttribute("media", "screen");
    style.setAttribute("href", "http://drnic.github.com/ninja-search-js/dist/stylesheets/flexselect.css");
    head.appendChild(style);
  };

  var require = function(src) {
    var script = document.createElement("script");
    script.setAttribute("language", "javascript");
    script.setAttribute("src", src);
    head.appendChild(script);
  };
  var load_latest_ninja_search = function() {
    if (typeof jQuery === "undefined" || jQuery === null) {
      require("http://drnic.github.com/ninja-search-js/dist/jquery.js");
      var script = document.createElement("script");
      script.innerHTML = "jQuery.noConflict();";
      head.appendChild(script);
    }
    require("http://drnic.github.com/ninja-search-js/dist/liquidmetal.js");
    require("http://drnic.github.com/ninja-search-js/dist/jquery.flexselect.js");
    require("http://drnic.github.com/ninja-search-js/dist/ninja_search.js");
  };
  
  flexselect_theme();
  load_latest_ninja_search();
})();
