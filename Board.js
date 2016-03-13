function Board(size) {
		this.size = size;
		this.generate();
	}
	
	Board.prototype.generate = function() { 

		var boardJS = "";
		
		for (var i = 0 ; i < this.size ; i++ ) {
			boardJS += '<tr> \n';
			
			for (var j = 0 ; j < this.size ; j++ ) {
				boardJS += '<td id="cell'
					+ '-c' + j
					+ '-l' + i
					+ '"></td> \n';
			}
			
			boardJS += '</tr> \n' ;
		}
		
		$("#board").html(boardJS);
		console.log("Board generated");
	} ;
	
	Board.prototype.invertColorCase = function(i, j) {
		if(i < this.size && j < this.size) {
			var cell = $("td#cell-c" + j + "-l" + i).toggleClass("black");
			return true;
		}
		
		return false;
	};
