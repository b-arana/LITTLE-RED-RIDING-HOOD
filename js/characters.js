var RIGHT_KEY = 39;
var TOP_KEY = 38;
var BOTTOM_KEY = 40;
var LEFT_KEY = 37;

function Characters(canvas, ctx) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.v = 2;
	this.maxSpeed = 6;
	this.x = 625;
	this.y = 800;
	// this.r = 30;
	this.h = 50;
	this.w = 50;
	this.img = new Image();
	this.img.src = 'images/redRidingHood.jpg';
}
Characters.prototype.drawRedHiringHood = function() {
	this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
	
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
Characters.prototype.setListeners = function(){
	document.onkeydown = function (event) {
		if (event.keyCode === 39) {
			this.moveRight = true;
		} else if (event.keyCode === 38) {
			this.moveUp = true;
		} else if (event.keyCode === 37) {
			this.moveLeft = true;
		} else if (event.keyCode === 40) {
			this.moveDown = true;
		}
	}.bind(this);

	document.onkeyup = function (event) {
			if (event.keyCode === 39) {
				this.moveRight = false;
			} else if (event.keyCode === 38) {
				this.moveUp = false;
			} else if (event.keyCode === 37) {
				this.moveLeft = false;
			} else if (event.keyCode === 40) {
				this.moveDown = false;
			}
	}.bind(this);
}

Characters.prototype.moveRedHiringHood = function () {
	if (this.moveLeft === true) {
		this.x -= this.v * this.maxSpeed;	
	} if(this.moveRight === true){
		this.x += this.v * this.maxSpeed;
	} if(this.moveUp === true){
		this.y -= this.v * this.maxSpeed;
	} if(this.moveDown === true){
		this.y += this.v * this.maxSpeed;
	}

};






