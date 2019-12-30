

class Board {

	constructor(emptyBoard, size) {
		this.size = size;
		this.board = emptyBoard;
		this.generate(this.board);
	}

	generate(emptyBoard) {
		var board = "";
		
		for (var i = 0; i < this.size; i++) {
			board += '<tr> \n';

			for (var j = 0; j < this.size; j++) {
				board += '<td id="cell' + '-c' + j + '-l' + i + '"></td> \n';
			}

			board += '</tr> \n';

		}

		emptyBoard.innerHTML = board;
		console.log("[OK] Board generated");
	}

}

/*

Board.prototype.invertColorCase = function(i, j) {
	if (i < this.size && j < this.size) {
		$("td#cell-c" + j + "-l" + i).toggleClass("black");
		return true;
	}

	return false;
};

Board.prototype.isBlack = function(i, j) {
	var cell = $("td#cell-c" + j + "-l" + i)

	if (cell.hasClass("black")) {
		return true;
	}

	return false;
};
*/