// https://www.codewars.com/kata/53f0f358b9cb376eca001079

/**
 * 8 kyu - Regular Ball Super Ball
 * 
 * If no arguments are given, ball objects should instantiate with a "ball type" of "regular."
 * 
 * ball1.ballType     //=> "regular"
 * ball2.ballType     //=> "super"
 */

var Ball = function(ballType) {
  this.ballType = ballType || 'regular';
};

ball1 = new Ball();
ball2 = new Ball("super");

console.log(ball1.ballType)     //=> "regular"
console.log(ball2.ballType)     //=> "super"
