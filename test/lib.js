const chai = require('chai');

const expect = chai.expect;
const lib = require('../lib');

describe('#lib', function() {
  it('initializes', function() {
    expect(lib).to.be.an('object');
  });
});
