function Obstacles(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = 70;
    this.h = 80;
    this.posMinX = this.w; 
    this.posMaxX = this.canvas.width-this.w;
    this.posMaxY = -150;
    this.posMinY = -20;
    this.vMax = 10;
    this.vMin = 4;
    this.x = this.numRandom(this.posMinX, this.posMaxX);
    this.y = this.numRandom(this.posMaxY, this.posMinY);
    this.vy = this.numRandom(this.vMax, this.vMin);
    this.live = true;   
    this.img = new Image();
    this.img.src = 'images/wolf_modif.png' 
}

Obstacles.prototype.drawObstacles = function () {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
}
Obstacles.prototype.moveObstacles = function(){
    this.y += this.vy;
}

Obstacles.prototype.numRandom = function (min, max) {
    return num = Math.round(Math.random() * (max - min) + min);
}

Obstacles.prototype.collision = function (obstacle) {
    if (this.x-10< obstacle.x-10 + obstacle.w-10 && this.x-10 + this.w-10 > obstacle.x-10 &&
        this.y-10 < obstacle.y-10 + obstacle.h-10 && this.y-10 + this.h-10 > obstacle.y-10) { 
        return true;  
    }  

}

