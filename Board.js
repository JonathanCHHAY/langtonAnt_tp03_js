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
				board += '<td id="cell' + '-c' + j + '-l' + i + '"class="white"></td> \n';
			}

			board += '</tr> \n';

		}

		emptyBoard.innerHTML = board;
		console.log("[OK] Board generated");
	}

	getCellByIndexes(i, j) {
		var cell = document.getElementById("cell-c" + j + "-l" + i)
		return cell; 
	}

	isCellBlack(cell) {
		if (cell == null) {
			return null;
		}

		var color = cell.getAttribute("class");
		
		if (color == "black") {
			return true;
		}

		return false;
	}

	invertCellColor(cell) {
		if (cell == null) {
			return false;
		}

		if (this.isCellBlack(cell) == true) {
			cell.setAttribute("class", "white");
		}
		else {
			cell.setAttribute("class", "black");
		}

		return true;
	}

}