function Bonus(canvas, ctx, game) {
    this.game = game;
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 400;
    this.y = 400;
    this.h = 50;
    this.w = 50;
   
}
Bonus.prototype.drawBonus = function () {
    this.ctx.font = '100px Chicle';
    this.ctx.fillStyle = 'orange';
    this.ctx.fillText("BONUS !!", this.canvas.width / 2 - 230, this.canvas.height / 2);

};
Bonus.prototype.getBonus = function () {
    this.game.chronometer.sec += 5;
    
   
}