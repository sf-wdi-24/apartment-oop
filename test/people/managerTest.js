var expect = require('chai').expect,
    Manager = require('./../../src/people/manager'),
    Property = require('./../../src/propertyTypes/property');

describe('Manager', function() {
  var bob = new Manager('Bob Brannan', '555-555-555'),
      avalon = new Property('555 5th Street');

  it ('should initially have no properties', function() {
    expect(bob.properties).to.eql([]);
  });

  describe('#addProperty', function() {
    it ('should add new property', function() {
      bob.addProperty(avalon);
      expect(bob.properties).to.eql([avalon]);
    });
  });

  describe('#removeProperty', function() {
    it ('should remove the property', function() {
      bob.removeProperty(avalon);
      expect(bob.properties).to.eql([]);
    });
  });

});