function House(canvas, ctx) {
	this.canvas = canvas;
    this.ctx = ctx;
	this.x = 575;
	this.y = 20;
	this.w = 100;
	this.vx = 14;
	this.img = new Image();
	this.img.src = 'images/house_modif.png';
	
}
House.prototype.drawHouse = function() {
	this.ctx.drawImage(this.img, this.x, this.y, this.w, this.w);
};

House.prototype.moveHouse = function() {
	this.x += this.vx;
	if (this.x >= this.canvas.width - this.w || this.x < 0) {
		this.vx *= -1; 
	}
};

House.prototype.isCollision = function (redRidingHood ) {
	
	if (this.x < redRidingHood.x + redRidingHood.w && this.x + this.w > redRidingHood.x &&
		this.y < redRidingHood.y + redRidingHood.h && this.y + this.w > redRidingHood.y) {
		return true;
	}

}


