function House(canvas, ctx) {
	this.canvas = canvas;
	this.ctx = ctx;
	this.x = 575;
	this.y = 20;
	this.w = 100;
	this.vx = 7;
}
House.prototype.drawHouse = function() {
	this.ctx.fillRect(this.x, this.y, this.w, this.w);

	// this.img = new Image();
	// this.img.src = '/images/house.jpg';
	// this.ctx.drawImage(this.img, this.x, this.y, this.w, this.w);
};

House.prototype.moveHouse = function() {
	this.x += this.vx;
	if (this.x >= this.canvas.width - this.w || this.x < 0) {
		this.vx *= -1; // retroceder
	}
};
