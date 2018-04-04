function Strawberries(canvas, ctx){
    this.canvas = canvas;
    this.ctx = ctx;
    this.w = 55;
    this.h = 55;
    this.posMinX = this.w + 5;
    this.posMaxX = this.canvas.width - this.w;
    this.posMaxY = -150;
    this.posMinY = 0;
    this.vMax = 30;
    this.vMin = 7;
    this.x = this.numRandom(this.posMinX, this.posMaxX);
    this.y = this.numRandom(this.posMaxY, this.posMinY);
    this.vy = this.numRandom(this.vMax, this.vMin);
    this.live = true;

}
Strawberries.prototype.drawStrawberries = function () {
    this.ctx.fillStyle = "red"
    this.ctx.fillRect(this.x, this.y, this.w , this.h) ;   
}
Strawberries.prototype.moveStrawberries = function () {
    this.y += this.vy;
}
Strawberries.prototype.numRandom = function (min, max) {
    return num = Math.round(Math.random() * (max - min) + min);
}
Strawberries.prototype.check = function (characters) {
    if (this.x < characters.x + characters.w && this.x + this.w > characters.x &&
        this.y < characters.y + characters.h && this.y + this.h > characters.y) {
        return true;
    }

}