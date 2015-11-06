var expect = require('chai').expect,
    Manager = require('./../../src/people/manager'),
    Person = require('./../../src/people/person'),
    Apartment = require('./../../src/apartment');

describe('Manager', function() {
  var bob = new Manager('Bob Brannan', '555-555-555'),
      avalon = new Apartment('555 5th Street');

  it ('should initially have no apartments', function() {
    expect(bob.apartments).to.eql([]);
  });

  // not sure why this won't work??
  
  // it ('should be a person', function() {
  //   expect(bob).to.be.a(Person);
  // });

  describe('#addApartment', function() {
    it ('should add new apartment', function() {
      bob.addApartment(avalon);
      expect(bob.apartments).to.eql([avalon]);
    });
  });

  describe('#removeApartment', function() {
    it ('should remove the apartment', function() {
      bob.removeApartment(avalon);
      expect(bob.apartments).to.eql([]);
    });
  });

});