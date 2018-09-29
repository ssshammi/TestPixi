import * as PIXI from "pixi.js";
import particles from "pixi-particles";


const ParticleFire =  function(imagePaths, config, type, useParticleContainer, stepColors,testStage,renderer)
	{
	
		var stage = testStage,
			emitter = null,
			bg = null;

	
		// Calculate the current time
		var elapsed = Date.now();

		var updateId;

		// Update function every frame
		var update = function(){

			// Update the next frame
			updateId = requestAnimationFrame(update);

			var now = Date.now();
			if (emitter)
				emitter.update((now - elapsed) * 0.001);

		

			elapsed = now;

			
			renderer.render(stage);
		};

		// Resize the canvas to the size of the window


		// Preload the particle images and create PIXI textures from it
		var urls, makeTextures = false;
		if(imagePaths.spritesheet)
			urls = [imagePaths.spritesheet];
		else if(imagePaths.textures)
			urls = imagePaths.textures.slice();
		else
		{
			urls = imagePaths.slice();
			makeTextures = true;
		}
		urls.push("images/bg.png");
		var loader = PIXI.loader;
		for(var i = 0; i < urls.length; ++i)
			loader.add("img" + i, urls[i]);
		loader.load(function()
		{
			
			//collect the textures, now that they are all loaded
			var art;
			if(makeTextures)
			{
				art = [];
				for(var i = 0; i < imagePaths.length; ++i)
					art.push(PIXI.Texture.fromImage(imagePaths[i]));
			}
			else
				art = imagePaths.art;
			// Create the new emitter and attach it to the stage
			var emitterContainer;
			if(useParticleContainer)
			{
				emitterContainer = new PIXI.ParticleContainer();
				emitterContainer.setProperties({
					scale: true,
					position: true,
					rotation: true,
					uvs: true,
					alpha: true
				});
			}
			else
				emitterContainer = new PIXI.Container();
			stage.addChild(emitterContainer);
			emitter = new PIXI.particles.Emitter(
				emitterContainer,
				art,
				config
			);
			if (stepColors)
				emitter.startColor = PIXI.particles.ParticleUtils.createSteppedGradient(config.color.list, stepColors);
			if(type == "path")
				emitter.particleConstructor = PIXI.particles.PathParticle;
			else if(type == "anim")
				emitter.particleConstructor = PIXI.particles.AnimatedParticle;
			emitter.emit = true;
			// Center on the stage
			emitter.updateOwnerPos(30, 220);

	
			update();

			
		});
	};



export default ParticleFire;
