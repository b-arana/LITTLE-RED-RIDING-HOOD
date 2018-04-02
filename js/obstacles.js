function Obstacles(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.posMinX = 10;
    this.posMaxX = this.canvas.width;
    this.x = this.numRandom(this.posMinX, this.posMaxX);
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

Obstacles.prototype.numRandom = function (min, max) {
    return num = Math.round(Math.random() * (max - min) + min);

}