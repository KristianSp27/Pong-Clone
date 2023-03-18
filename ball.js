const INITIAL_VELOCITY = .025;
const VELOCITY_INCREASE = .00001;

export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem;
  }
}

get () {
  return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
}

set (value) {
  this.ballElem.style.setProperty("--x", value);
}

get () {
  return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--y"))
}

set (value) {
  this.ballElem.style.setProperty("--y", value);
}

rect() {
  return this.ballElem.getBoundingClientRect()
}

reset() {
  this.x = 50;
  this.y = 50;
  this.direction = {x: .75, y: .5};
  while(Math.abs(this.direction.x) <= .2 || Math.abs(this.direction.x) >= .9) {
    const heading = randomNumberBetween(0, 2 * Math.PI);
    this.direction = { x: Math.cos(heading), y: Math.sin(heading)};
  }
  this.velocity = INITIAL_VELOCITY;
}

update(delta, paddleRects) {
this.x += this.direction.x * this.velocity * delta;
this.y += this.direction.y * this.velocity * delta;
this.velocity += VELOCITY_INCREASE * delta;
const rect = this.rect();

if (rect.bottom >= window.innerHeight || rect.top <= 0) {
  this.direction.y *= 1;
}

if (rect.right >= window.innerWidth || rect.left <= 0) {
  this.direction.x *= -1;
}
}

function randomNumberBetween(min, max) {
return Math.random() * (max - min) + min;
}