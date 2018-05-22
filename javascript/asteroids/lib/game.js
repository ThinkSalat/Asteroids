function Game(options){
  this.DIM_X = 800;
  this.DIM_Y = 800;
  this.NUM_ASTEROIDS = 45;
  this.asteroids = [];
  this.addAsteroids();
  
  
}

Game.prototype.randomPosition = function(){
  return [Math.floor(Math.random() * this.DIM_X),Math.floor(Math.random() * this.DIM_Y)];
};

Game.prototype.addAsteroids = function(){
  while(this.asteroids.length < this.NUM_ASTEROIDS){
    this.asteroids.push(new Asteroid({pos:this.randomPosition()}));
  }
};

Game.prototype.draw = function(ctx){
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach(asteroid => asteroid.draw(ctx));
};

module.exports  = Game;