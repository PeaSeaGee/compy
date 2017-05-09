const expect = require('chai').expect;
const CompyStore = require('../../lib/stores');

describe('CompyStore', function() {
  beforeEach(function() {
    // reset the store to initial values
    CompyStore.setState(CompyStore.getInitialState());
  });

  it('should have an initial state of {status: \'enabled\'}', function() {
    expect(CompyStore.state.status).to.be.equal('enabled');
  });

  describe('toggleStatus()', function() {
    it('should switch the state to {status: \'disabled\'}', function() {
      CompyStore.toggleStatus();
      expect(CompyStore.state.status).to.be.equal('disabled');
    });

    it('should switch the state back to {status: \'enabled\'} when used a second time', function() {
      CompyStore.toggleStatus();
      CompyStore.toggleStatus();
      expect(CompyStore.state.status).to.be.equal('enabled');
    });
  });
});
