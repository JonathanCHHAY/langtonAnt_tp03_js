window.onload = function() {

	console.log("Start");
	var emptyBoard = document.getElementById("board");
	const sizeOfBoard = 100;

	var board = new Board(emptyBoard, sizeOfBoard);
	//console.log(board.getCellByIndexes(1,1));

	/*


	console.log("GridSize = " + boardJS.size);
	var ant = new Ant(boardJS, boardJS.size / 2, boardJS.size / 2);
	ant.move();
	console.log("orientation : " + ant.orientation);
	console.log("coord : " + ant.x + " " + ant.y);
	
	setInterval(function() {
		ant.move();
		
		
	}, 1)
	*/
	
	//console.log(boardJS.isBlack(0, 0));

	/*
	ant.stepForward();
	boardJS.invertColorCase(ant.y, ant.x);
	ant.stepForward();
	boardJS.invertColorCase(ant.y, ant.x);
	ant.stepForward();
	boardJS.invertColorCase(ant.y, ant.x);
	*/
	
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

