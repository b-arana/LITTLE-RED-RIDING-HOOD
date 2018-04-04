function Game(canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext('2d');
	this.width = 700;
	this.height = 900;
	this.background = new Background(this.canvas, this.ctx);
	this.house = new House(this.canvas, this.ctx);
	this.redRidingHood = new Characters(this.canvas, this.ctx);
	this.obstacles = new Obstacles(this.canvas, this.ctx);
	this.strawberries = new Strawberries(this.canvas, this.ctx);
	this.chronometer = new Chronometer(this.canvas, this.ctx);
	this.bonus = new Bonus(this.canvas, this.ctx, this);
	this.arrayObs = [];
	this.arrayStrawberries = [];
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
			this.chronometer.drawTimer();
			this.house.drawHouse();
			this.house.moveHouse();
			this.redRidingHood.drawRedHiringHood();
			this.redRidingHood.setListeners();
			this.redRidingHood.moveRedHiringHood();
			this.obstaclesController();
			this.addObstacles();
			this.strawberriesController();
			this.addStrawberries();

			this.stop();
		}.bind(this),
		60
	);
	this.chronometer.runingTime();
	this.bonus.drawBonus();
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
Game.prototype.strawberriesController = function() {
	this.arrayStrawberries.forEach((e, i) => {
		if (e.live == false) {
			this.arrayStrawberries.splice(i, 1);
		}
		e.drawStrawberries();
		e.moveStrawberries();
		if (e.y > this.height) {
			e.live = false;
		}
		if (e.check(this.redRidingHood)) {
			this.arrayStrawberries.splice(i, 1);
			this.bonus.drawBonus();
			this.bonus.getBonus();
		}
	});
};

Game.prototype.addObstacles = function() {
	if (this.arrayObs.length <= 4) {
		this.arrayObs.push(new Obstacles(this.canvas, this.ctx));
	}
};
Game.prototype.addStrawberries = function() {
	if (this.arrayStrawberries.length < 1) {
		this.arrayStrawberries.push(new Strawberries(this.canvas, this.ctx));
	}
};

Game.prototype.stop = function() {
	if (this.gameOver == true) {
		clearInterval(this.interval);
	}
};

