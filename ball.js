export default class Ball {
  constructor(ballElem) {
    this.ballElem = ballElem;
  }
}

get x() {
  return parseFloat(getComputedStyle(this.ballElem).getPropertyValue("--x"));
}

update(delta) {

}