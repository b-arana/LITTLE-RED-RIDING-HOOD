function House (canvas,ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = 300;

}
House.prototype.drawHouse = function(){
    this.img = new Image();
    this.img.src = '/images/house.jpg';
    this.ctx.drawImage(this.img, this.x, 100, 60, 100);

}