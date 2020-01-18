const N = 0, E = 1, S = 2, O = 3;

class Ant {

	constructor (board, x, y) {
		this.board = board;
		this.orientation = N;
		this.x = x;
		this.y = y;

		var cell = this.board.getCellByIndexes(this.x, this.y);
		board.invertCellColor(cell);
	}

	turnLeft() {
		if(this.orientation > N) {
			this.orientation--;
			
		} else {
			this.orientation = O;
		}
	}

	turnRight() {
		if(this.orientation < O) {
			this.orientation++;
			
		} else {
			this.orientation = N;
		}
	}
	
	getStringOrientation() {
		switch (this.orientation) {
			case N: return "N";
			case E: return "E";
			case S: return "S";
			case O: return "O";
			default: return null;
		}
	}

}


/*

Ant.prototype.move = function() {
	if(this.board.isBlack(this.y, this.x)) {
		this.turnRight();
		
	} else {
		this.turnLeft();
	}
	
	this.board.invertColorCase(this.y, this.x);
	
	this.stepForward();
} ;

Ant.prototype.stepForward = function() {
	switch (this.orientation) {
	case N:
		if(this.y > 0) {
			this.y--;
		}
		break;
		
	case E:
		if(this.x < this.board.size) {
			this.x++;
		}
		break;
		
	case S:
		if(this.y < this.board.size) {
			this.y++;
		}
		break;
		
	case O:
		if(this.x > 0) {
			this.x--;
		}
		break;

	default:
		break;
	}
} ;
*/
