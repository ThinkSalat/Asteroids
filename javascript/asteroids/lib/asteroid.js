function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function Asteroid(options) {
  this.COLOR = '#131328';
  this.RADIUS = 20;
  let mooptions = {
    color: this.COLOR,
    radius:this.RADIUS,
    pos: options.pos,
    vel: Util.randomVec(getRandomInt(6,25))
  };
  MovingObject.call(this,mooptions);
}

Util.inherits(Asteroid,MovingObject);

module.exports = Asteroid;