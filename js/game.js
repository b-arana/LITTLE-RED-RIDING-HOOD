function Game(canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext('2d');
	this.width = 1250;
	this.height = 850;
	this.background = new Background(this.canvas, this.ctx);
	this.house = new House(this.canvas, this.ctx);
	this.redRidingHood = new Characters(this.canvas, this.ctx);
	this.obstacles = new Obstacles(this.canvas, this.ctx);
	this.strawberries = new Strawberries(this.canvas, this.ctx);
	this.chronometer = new Chronometer(this.canvas, this.ctx, this);
	this.bonus = new Bonus(this.canvas, this.ctx, this);
	this.arrayObs = [];
	this.arrayStrawberries = [];
	this.arrayShrubbery = [ 
		new Shrubbery(this.canvas, this.ctx, this, 300, 20, 200, 200, 40),
		new Shrubbery(this.canvas, this.ctx, this, 600, 300, 450, 200, 40),
		new Shrubbery(this.canvas, this.ctx, this, 900, 600, 700, 200, 40),
	]
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
			this.paintShrubbery ();
			this.obstaclesController();
			this.addObstacles();
			this.strawberriesController();
			this.addStrawberries();
			this.shrubberyController();
			this.stop();
		}.bind(this),
		60
	);
	this.chronometer.runingTime();
	this.bonus.drawBonus();
};
Game.prototype.paintShrubbery = function () {
	this.arrayShrubbery.forEach( function (e) {
		e.drawShrubbery();
	})
}
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
			this.ctx.font = '120px Chicle';
			this.ctx.fillStyle = 'white';
			this.ctx.fillText('GAME OVER !!', this.canvas.width / 2 - 250, this.canvas.height / 2);

			clearInterval(this.interval);
		}
	});

	if (this.house.isCollision(this.redRidingHood)) {
		if ((this.gameOver = true)) {
			this.background.drawBackground();
			this.chronometer.drawTimer();
			this.house.drawHouse();
			this.addObstacles();
			this.addStrawberries();
			this.ctx.font = '120px Chicle';
			this.ctx.fillStyle = 'white';
			this.ctx.fillText('YOU WIN!!', this.canvas.width / 2 - 230, this.canvas.height / 2);

			clearInterval(this.interval);
		}
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

Game.prototype.shrubberyController = function () {
	 this.arrayShrubbery.forEach(function(e,i){
		 if (e.checkShrubbery()) {
			 this.arrayShrubbery.splice(i, 1);
			 this.bonus.lostBonus();
			 this.ctx.font = '120px Chicle';
			 this.ctx.fillStyle = 'white';
			 this.ctx.fillText('YOU LOST TIME !!', this.canvas.width / 2 - 230, this.canvas.height / 2);


		 }
	 }.bind(this))	
}
 
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

