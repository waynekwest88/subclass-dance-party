describe('horizontalDancer', function() {

  var horizontalDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    horizontalDancer = new HorizontalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(horizontalDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that alters it\s css left property', function() {
    var first = horizontalDancer.left;
    horizontalDancer.step();
    expect(horizontalDancer.left).to.not.equal(first);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(horizontalDancer, 'step');
      expect(horizontalDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(horizontalDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(horizontalDancer.step.callCount).to.be.equal(2);
    });
  });
});