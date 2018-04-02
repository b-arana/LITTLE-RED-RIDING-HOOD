var RIGHT_KEY = 39;
var TOP_KEY = 38;
var BOTTOM_KEY = 40;
var LEFT_KEY = 37;

function Characters(canvas, ctx) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.v = 1;
	this.maxSpeed = 10;
	this.x = 625;
	this.y = 800;
	this.r = 30;
	this.h = 30;
	this.w = 30;
}
Characters.prototype.drawRedHiringHood = function() {
	this.ctx.beginPath();
    this.ctx.fillStyle = "red";
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
	this.ctx.fill();
	this.ctx.closePath();
};
Characters.prototype.moveRight = function () {
	this.x += this.v * this.maxSpeed;
}
Characters.prototype.moveLeft = function () {
	this.x -= this.v * this.maxSpeed;
}
Characters.prototype.moveUp = function () {
	this.y -= this.v * this.maxSpeed;
}
Characters.prototype.moveDown = function () {
	this.y += this.v * this.maxSpeed;
}
Characters.prototype.moveRedHiringHood = function() {
	document.onkeydown = function(event) {
	
		switch (event.keyCode) {
		 	case RIGHT_KEY:
		 		this.moveRight();
		 		console.log("Right")
		 		break;
		 	case LEFT_KEY:
		 		this.moveLeft();
		 		console.log("Left")
		 		break;
		 	case BOTTOM_KEY:
		 		this.moveDown();
		 		console.log("Bottom")
		 		break;
			case TOP_KEY:
	 			this.moveUp();
		 		console.log("Up")
		 		break;
		 }
	}.bind(this);
};
