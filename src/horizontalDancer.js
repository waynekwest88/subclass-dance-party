var HorizontalDancer = function(top, left, timeBetweenSteps) {
  this.offset = left + 80.0;
  this.top = top;
  this.left = left;
  timeBetweenSteps = Math.min(timeBetweenSteps, 25.0);
  Dancer.call(this, timeBetweenSteps);
};

HorizontalDancer.prototype = Object.create(Dancer.prototype);
HorizontalDancer.prototype.constructor = HorizontalDancer;

HorizontalDancer.prototype.step = function(timeBetweenSteps) {
  Dancer.prototype.step.call(this, timeBetweenSteps);
  // increment left position to a certain point
  // then go back to where we started 
  // we need a variable to track center point
  // we need a variable to track offset
  if (this.left < this.offset && !this.moved) {
    this.left += 5;
  } else {
    this.moved = true;
  }
  if (this.moved && this.left !== this.offset - 80) {
    this.left -= 5;
  } else {
    this.moved = false;
  }
  Dancer.prototype.setPosition.call(this, this.top, this.left);
};

HorizontalDancer.prototype.align = function(left) {
  this.left = left;
  this.offset = left + 80.0;
  this.top = 200;
};