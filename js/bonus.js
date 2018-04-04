function Bonus(canvas, ctx, game) {
    this.game = game;
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 50;
    this.y = 90;
    this.h = 50;
    this.w = 50;
   
}
Bonus.prototype.drawBonus = function () {
    this.ctx.font = '100px Chicle';
    this.ctx.fillStyle = 'orange';
    this.ctx.fillText("BONUS !!", this.x, this.y);

};
Bonus.prototype.getBonus = function () {
    this.game.chronometer.sec += 3;
    
   
}