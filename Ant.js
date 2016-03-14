var N = 0, E = 1, S = 2, O = 3;

function Ant(board, x, y) {
		this.board = board;
		this.orientation = N;
		this.x = x;
		this.y = y;
		
		board.invertColorCase(y, x);
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
		this.turnLeft();
	}
} ;

