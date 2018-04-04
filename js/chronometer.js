function Chronometer(canvas, ctx) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.x = 1120;
	this.y = 90;
	this.w = 65;
	this.h = 45;
	this.interval;
	this.sec = 30;
}

Chronometer.prototype.drawTimer = function() {
	this.ctx.font = '120px Roboto';
	this.ctx.fillStyle = 'white';
	this.ctx.fillText(this.sec, this.x, this.y);
};

Chronometer.prototype.runingTime = function() {
	this.interval = setInterval(
		function() {
			this.sec--;
			if (this.sec <= 0) {
				clearInterval(this.interval);
				alert('Finish Time!!!!');
				return;
			}
		}.bind(this),
		1000
	);
	
};
