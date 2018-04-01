var RIGHT_KEY = 39;
var TOP_KEY = 38;
var BOTTOM_KEY = 40;
var LEFT_KEY = 37;

function Characters(canvas, ctx) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.x = 625;
	this.y = 800;
	this.r = 30;
}
Characters.prototype.drawRedHiringHood = function() {
	this.ctx.beginPath();
	this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
	this.ctx.fill();
	this.ctx.closePath();
};
Characters.prototype.moveRedHiringHood = function() {
	document.onkeydown = function(event) {
		var d = 15; // Declare variable distance
		switch (event.keyCode) {
			case RIGHT_KEY:
				this.x += d;
				break;
			case LEFT_KEY:
				this.x -= d;
				break;
			case BOTTOM_KEY:
				this.y += d;
				break;
			case TOP_KEY:
				this.y -= d;
				break;
		}
	}.bind(this);
};
