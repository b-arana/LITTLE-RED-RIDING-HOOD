function Obstacles(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    // this.x = Math.floor(Math.random() * ((this.canvas.width - this.w) - (this.x + this.w)) + (this.x + this.w));
    this.x = 30;
    this.y = 40;
    this.w = 30;
    this.h = 60;
    this.vy = 7;
}

Obstacles.prototype.drawObstacles = function () {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
}
Obstacles.prototype.moveObstacles = function(){
    this.y += this.vy;


}