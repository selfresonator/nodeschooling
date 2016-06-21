var chai = require('chai');
var expect = chai.expect;

describe('hashMap', function() {
  var hashMap;
  beforeEach(function() {
    hashMap = new HashMap();
  });

  it('should be a function', function() {
    expect(hashMap).to.be.a("function");
  });

  if('should return a method', function() {
    expect(hashMap()).to.equal("undefined");
  });

});
