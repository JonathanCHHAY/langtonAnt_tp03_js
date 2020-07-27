window.onload = function() {

	console.log("Start");
	var emptyBoard = document.getElementById("board");
	const sizeOfBoard = 100;

	var board = new Board(emptyBoard, sizeOfBoard);
	var cell = board.getCellByIndexes(1,1);
	console.log(cell);
	//board.invertCellColor(cell);
	//console.log(board.isCellBlack(cell));

	console.log("GridSize = " + board.size);
	var ant = new Ant(board, board.size / 2, board.size / 2);


	//console.log("orientation : " + ant.getStringOrientation());
	//console.log("coord : " + ant.x + " " + ant.y);
	
	startAnt();

	function startAnt() {
		setInterval(function() {
			ant.move();
		}, 1)
	}

}

