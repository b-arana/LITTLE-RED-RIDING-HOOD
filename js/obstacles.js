function Obstacles(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = 55;
    this.h = 75;
    this.posMinX = this.w + 5; 
    this.posMaxX = this.canvas.width-this.w;
    this.posMaxY = -150;
    this.posMinY = 0;
    this.vMax = 30;
    this.vMin = 10;
    this.x = this.numRandom(this.posMinX, this.posMaxX);
    this.y = this.numRandom(this.posMaxY, this.posMinY);
    this.vy = this.numRandom(this.vMax, this.vMin);
    this.live = true;   
    this.img = new Image();
    this.img.src = 'images/obstacles.jpg' 
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
    if (this.x < obstacle.x + obstacle.w && this.x + this.w > obstacle.x &&
        this.y < obstacle.y + obstacle.h && this.y + this.h > obstacle.y) { 
        return true;  
    }  

}

