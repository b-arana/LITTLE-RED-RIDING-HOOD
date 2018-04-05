function Chronometer(canvas, ctx, game) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.game = game;
	this.x = 1120;
	this.y = 90;
	this.w = 65;
	this.h = 45;
	this.interval;
	this.sec = 30;
}

Chronometer.prototype.drawTimer = function() {
	this.ctx.font = '120px Roboto';
	this.ctx.fillStyle = 'black';
	this.ctx.fillText(this.sec, this.x, this.y);
};

Chronometer.prototype.runingTime = function() {
	this.interval = setInterval(
		function() {
			this.sec--;
			if (this.sec <= 0) {
				this.game.gameOver = true;
				this.game.clear();
				this.game.background.drawBackground();
				this.game.house.drawHouse();
				this.game.redRidingHood.drawRedHiringHood();
				this.ctx.font = '120px Chicle';
				this.ctx.fillStyle = 'white';
				this.ctx.fillText('GAME OVER !!', this.canvas.width / 2 - 250, this.canvas.height / 2);
				this.ctx.font = '120px Roboto';
				this.ctx.fillStyle = 'black';
				this.ctx.fillText(this.sec, this.x, this.y);
				clearInterval(this.interval);
				clearInterval(this.game.interval);
			}
		}.bind(this),
		1000
	);
};
