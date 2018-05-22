const Util = require("./util.js");
window.Util = Util;
const MovingObject = require("./moving_object.js");
window.MovingObject = MovingObject;
const Asteroid = require("./asteroid.js");
window.Asteroid = Asteroid;
const Game = require("./game.js");
window.Game = Game;
//-----------------------------------------

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 15, color: "#00FF00"}
);
mo.draw(ctx);

const aster = new Asteroid({ pos: [200, 200] });
aster.draw(ctx);

const game = new Game();
game.draw(ctx);
