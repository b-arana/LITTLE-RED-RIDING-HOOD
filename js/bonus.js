function Bonus(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 50;
    this.y = 90;
    this.h = 50;
    this.w = 50;
   
}

Bonus.prototype.drawBonus = function () {
    this.ctx.font = '120px Roboto';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText("BONUS!!", this.x, this.y);

};
Bonus.prototype.getBonus = function () {
    this.chronometer.sec = -5;
}