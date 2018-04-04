function Background(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    this.img = new Image();
    this.img.src = 'images/background-2.jpg';
}
Background.prototype.drawBackground = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    
};