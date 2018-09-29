"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pixi = require("pixi.js");

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *  Loads the resources we need in the Game
 *  and calls the provided callback when done.
 *
 *  @param {Array}      resources       The resources to load
 *  @param {Function}   cb              The function to call when the loading is completed
 *
 *  @returns {Void}
 */
var preloadResources = function preloadResources(resources, cb) {

  // Add the resources and trigger Callback when loaded
  PIXI.loader.add(resources)
  // .on("progress", loader => console.log(`${loader.progress}% completed`))
  .load(cb);
};

exports.default = preloadResources;