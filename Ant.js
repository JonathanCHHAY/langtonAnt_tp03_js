const N = 0, E = 1, S = 2, O = 3;

class Ant {

	constructor (board, x, y) {
		this.board = board;
		this.orientation = N;
		this.x = x;
		this.y = y;
		this.cell = this.board.getCellByIndexes(this.x, this.y);
		this.board.invertCellColor(this.cell);
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

	stepForward() {
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

		this.cell = this.board.getCellByIndexes(this.x, this.y);
	}

	move() {
		if(this.board.isCellBlack(this.cell)) {
			this.turnRight();
			
		} else {
			this.turnLeft();
		}
		this.board.invertCellColor(this.cell);

		this.stepForward();
	} ;

}
