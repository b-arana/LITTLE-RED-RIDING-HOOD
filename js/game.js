function Game(canvasId) {
	this.canvas = document.getElementById(canvasId);
	this.ctx = this.canvas.getContext('2d');
	this.width = 700;
	this.height = 900;
	this.house = new House(this.canvas, this.ctx);
	this.redRidingHood = new Characters(this.canvas, this.ctx);
	this.wolf = new Characters(this.canvas, this.ctx);
	this.obstacles = new Obstacles(this.canvas, this.ctx);
	// this.car = new Car(this.canvas, this.ctx);
	// this.road = [new Road(this.canvas, this.ctx), new Road(this.canvas, this.ctx)];
	// this.listaObstacles = [];
}
Game.prototype.clear = function() {
	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.start = function() {
	setInterval(
		function() {
			this.clear();
			this.house.drawHouse();
			this.house.moveHouse();
			this.redRidingHood.drawRedHiringHood();
			this.redRidingHood.moveRedHiringHood();
		}.bind(this),
		60
	);
};
