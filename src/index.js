import * as PIXI from "pixi.js";
import initRenderer from "./initRenderer";
import preloadResources from "./preloadResources";
import getTexture from "./getTexture";
import PixiFps from "pixi-fps";
import tweenManager from "pixi-tween";
import ParticleFire from "./ParticleFire";


require("./style.css");
var _pixi = require("pixi.js");

var testStage;
var renderer;

let TextureCache;
const redraw = (time, renderer) => {

 
    requestAnimationFrame(t => redraw(t, renderer));
	PIXI.tweenManager.update();
    // Render the scene
    renderer.render(testStage);
};
const setup = () => {
	TextureCache= PIXI.utils.TextureCache;
     renderer = initRenderer();
	const fpsCounter = new PixiFps();
    // Create a container object called the `stage`
    testStage = new PIXI.Container();
	
	addCardsStack();
	addParticles();
	testStage.addChild(fpsCounter);
	 redraw(-1, renderer);
	
};
function addParticles(){
	
	
	

			
			new ParticleFire(
				// The image to use
				["images/hexa.png", "images/spear.png","images/triangle.png","star.png"],

				// Emitter configuration, edit this to change the look
				// of the emitter
				{
					"alpha": {
						"start": 0.62,
						"end": 0
					},
					"scale": {
						"start": 0.25,
						"end": 0.75
					},
					"color": {
						
						"list": [
							{"value":"fff191", "time":0},
							{"value":"ff622c", "time":1}
						],
						"isStepped": false
					},
					"speed": {
						"start": 500,
						"end": 500
					},
					"startRotation": {
						"min": 265,
						"max": 275
					},
					"rotationSpeed": {
						"min": 50,
						"max": 50
					},
					"lifetime": {
						"min": 0.1,
						"max": 0.75
					},
					"blendMode": "normal",
					"frequency": 0.001,
					"emitterLifetime": 0,
					"maxParticles": 1000,
					"pos": {
						"x": 0,
						"y": 50
					},
					"addAtBack": false,
					"spawnType": "circle",
					"spawnCircle": {
						"x": 0,
						"y": 0,
						"r": 10
					}
				}, null, false, 5,testStage,renderer);
		
}


function addCardsStack(){
	
	for (var i = 1; i < 145; i++) {
    
		const padding = 5;
        // magically works since the spritesheet was loaded with the pixi loader
        let CardTex  =getTexture("images/spritesCard.json")['YGOGX_SpellCards_' + i + '.png'];
		let CardSprite = new PIXI.Sprite(CardTex);
		CardSprite.position.set(80,padding*i);
		//fCardSprite.nos =i;
		const tween = PIXI.tweenManager.createTween(CardSprite);
		tween.from({ y: CardSprite.y }).to({ x:200, y: padding*(145-i) })
		tween.time = 2000;
		tween.delay= 1000*(145-i);
		tween.repeat = 0;
		tween.on('start', () => {testStage.addChild(CardSprite); console.log('tween started') });
		//tween.on('repeat', ( loopCount ) => { console.log('loopCount: ' + loopCount) });
		tween.start();
		testStage.addChild(CardSprite);
   }
	
}
/* ---------- Initialisation ---------- */

// Wait until the page is fully loaded
window.addEventListener("load", () => {

    // List of resources to load
    const resources = ["images/spritesCard.json"];

    // Then load the images
    preloadResources(resources, () => {
	setup();
        // Then run the setup() function
       
    });
});
function onAssetsLoaded()
{
    // create an array of textures from an image path
    
     

    // create an AnimatedSprite (brings back memories from the days of Flash, right ?)
    
}

window.addEventListener("resize",  () => {
  renderer.resize(window.innerWidth, window.innerHeight);
});
