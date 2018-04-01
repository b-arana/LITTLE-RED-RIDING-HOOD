function Game(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.width = 700;
    this.height = 900;
    this.house = new House (this.canvas,this.ctx);
    // this.car = new Car(this.canvas, this.ctx);
    // this.road = [new Road(this.canvas, this.ctx), new Road(this.canvas, this.ctx)];
    // this.listaObstacles = [];
}

Game.prototype.start = function () {
    this.house.drawHouse();
}