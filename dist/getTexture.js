"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pixi = require("pixi.js");

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *  Fetches the (preloaded) texture by filename
 *
 *  @param {String}     name    Name of the texture to load
 *
 *  @returns {PIXITexture}      The texture
 */
var getTexture = function getTexture(name) {
  return PIXI.loader.resources[name].texture;
};

exports.default = getTexture;