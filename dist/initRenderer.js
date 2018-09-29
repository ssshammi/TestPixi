"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _pixi = require("pixi.js");

var PIXI = _interopRequireWildcard(_pixi);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *  Creates the Renderer
 *
 *  @returns {PIXIRenderer}
 */
var initRenderer = function initRenderer() {

    // Create the renderer (auto detect Canvas / WebGL)
    var renderer = PIXI.autoDetectRenderer(640, 320, {
        antialias: false,
        transparent: false,
        resolution: 1
    });

    // Style the renderer
    renderer.view.className = "renderArea";

    // Add to the DOM
    document.getElementById("pixicanvas").appendChild(renderer.view);

    // Return the reference of the renderer
    return renderer;
};

exports.default = initRenderer;