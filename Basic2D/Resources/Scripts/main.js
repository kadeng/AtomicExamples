
// This script is the main entry point of the game

// called at the start of play
function Start() {

	var game = Atomic.game;

	// create a 2D scene
	game.createScene2D();

    var spaceNode = game.scene.createChild("Star");
    spaceNode.createJSComponent("Star");

}

// called per frame
function Update(timeStep) {


}
