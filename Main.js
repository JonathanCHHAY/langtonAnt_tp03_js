window.onload = function() {
	console.log("Start");
	var boardJS = new Board(20);
	console.log(boardJS.size);
	var ant = new Ant(boardJS, boardJS.size / 2, boardJS.size / 2);
	
	console.log(ant.orientation);
	console.log("coord : " + ant.x + " " + ant.y);
	console.log(boardJS.isBlack(0, 0));

	/*
	console.log("test turnLeft")
	console.log(ant.orientation);
	ant.turnLeft()
	console.log(ant.orientation);
	ant.turnLeft()
	console.log(ant.orientation);
	ant.turnLeft()
	console.log(ant.orientation);
	ant.turnLeft()
	console.log(ant.orientation);
	ant.turnLeft()
	console.log(ant.orientation);
	*/
	
	/*
	console.log("test turnRight")
	console.log(ant.orientation);
	ant.turnRight()
	console.log(ant.orientation);
	ant.turnRight()
	console.log(ant.orientation);
	ant.turnRight()
	console.log(ant.orientation);
	ant.turnRight()
	console.log(ant.orientation);
	ant.turnRight()
	console.log(ant.orientation);
	*/
	
	//console.log(boardJS.invertColorCase(30, 30));
}