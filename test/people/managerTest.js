var expect = require('chai').expect,
    Manager = require('./../../src/people/manager'),
    Apartment = require('./../../src/apartment');

describe('Manager', function() {
  var bob = new Manager('Bob Brannan', '555-555-555'),
      avalon = new Apartment('555 5th Street');

  it ('should initially have no apartments', function() {
    expect(bob.apartments).to.eql([]);
  });

  describe('#addApartment', function() {
    it ('should add new property', function() {
      bob.addApartment(avalon);
      expect(bob.apartments).to.eql([avalon]);
    });
  });

  describe('#removeApartment', function() {
    it ('should remove the property', function() {
      bob.removeApartment(avalon);
      expect(bob.apartments).to.eql([]);
    });
  });

});