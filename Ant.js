var N = 0, E = 1, S = 2, O = 3;

function Ant(board, x, y) {
		this.board = board;
		this.orientation = N;
		this.x = x;
		this.y = y;
		
}

Ant.prototype.turnLeft = function() {
	if(this.orientation > N) {
		this.orientation--;
		
	} else {
		this.orientation = O;
	}
	
} ;

Ant.prototype.turnRight = function() {
	if(this.orientation < O) {
		this.orientation++;
		
	} else {
		this.orientation = N;
	}
	
} ;

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

