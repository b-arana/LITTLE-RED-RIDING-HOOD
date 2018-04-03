function Game(canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext('2d');
	this.width = 700;
	this.height = 900;
	this.house = new House(this.canvas, this.ctx);
	this.redRidingHood = new Characters(this.canvas, this.ctx);
	this.background = new Background(this.canvas, this.ctx);
	this.obstacles = new Obstacles(this.canvas, this.ctx);
	this.arrayObs = [];
	this.gameOver = false;
	this.interval;
}
Game.prototype.clear = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.start = function() {
	this.interval = setInterval(
		function() {
			this.clear();
			this.background.drawBackground();
			this.house.drawHouse();
			this.house.moveHouse();
			this.redRidingHood.drawRedHiringHood();
			this.redRidingHood.setListeners();
			this.redRidingHood.moveRedHiringHood();
			this.obstaclesController();
			this.addObstacles();
			this.stop();
		}.bind(this),
		60
	);
};
Game.prototype.obstaclesController = function() {
	this.arrayObs.forEach((e, i) => {
		if (e.live == false) {
			this.arrayObs.splice(i, 1);
		}
		e.drawObstacles();
		e.moveObstacles();
		if (e.y > this.height) {
			e.live = false;
		}
		if (e.collision(this.redRidingHood)) {
			this.gameOver = true;
			clearInterval(this.interval);
		}
	});

	if (this.house.isCollision(this.redRidingHood)) {
		this.gameOver = true;
		clearInterval(this.interval);
	}
};
Game.prototype.addObstacles = function() {
	if (this.arrayObs.length <= 5) {
		this.arrayObs.push(new Obstacles(this.canvas, this.ctx));
	}
};

Game.prototype.stop = function() {
	if (this.gameOver == true) {
		console.log('Game Over');
		// return prompt (" Game Over. Do you like to play again? ");
	}
};
