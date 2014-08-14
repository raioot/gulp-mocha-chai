;(function() {
  'use strict';

  var root = this,
    myLib = (function() {
      var theThing = {
        sum: function() {
          var args = Array.prototype.slice.call(arguments);
          return args.reduce(function(prev, current){
            return prev + current
          }, 0);
        }
      };

      return Object.freeze ? Object.freeze(theThing) : theThing;
    }());

  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = myLib;
    }
    exports.myLib = myLib;
  } else {
    root.myLib = myLib;
  }
}.call(this));