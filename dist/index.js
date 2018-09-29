"use strict";


var PIXI = _interopRequireWildcard(_pixi);

var _initRenderer = require("./initRenderer");

var _initRenderer2 = _interopRequireDefault(_initRenderer);

var _preloadResources = require("./preloadResources");

var _preloadResources2 = _interopRequireDefault(_preloadResources);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var testStage = void 0;

var setup = function setup() {

    var renderer = (0, _initRenderer2.default)();

    // Create a container object called the `stage`
    testStage = new PIXI.Container();
    renderer.render(testStage);
};

/* ---------- Initialisation ---------- */

// Wait until the page is fully loaded
window.addEventListener("load", function () {

    // List of resources to load
    var resources = ["images/sprites.png"];

    // Then load the images
    (0, _preloadResources2.default)(resources, function () {

        // Then run the setup() function
        setup();
    });
});