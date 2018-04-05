function Shrubbery(canvas, ctx, game, x, xmin, y, w, h) {
    this.game = game;
    this.ctx = ctx;
    this.x = Math.round(Math.random() * (x-xmin) + xmin);
    this.y = y;
    this.w = Math.round(Math.random() * w) + 70;
    this.h = h; 
    this.img = new Image();
    this.img.src = 'images/arbusto.png'
}   

Shrubbery.prototype.drawShrubbery = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

    // this.ctx.fillRect(this.x, this.y, this.w, this.h);
   
};
