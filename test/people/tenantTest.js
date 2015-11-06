var expect = require('chai').expect,
    Tenant = require('./../../src/people/tenant'),
    Person = require('./../../src/people/person');

describe('Tenant', function() {
  var jane = new Tenant('Jane Davis', '555-555-555'),
      jill = new Person('Jill Taylor', '555-555-5555');

  it ('should initially have no references', function() {
    expect(jane.references).to.eql([]);
  });

  describe('#addReference', function() {
    it ('should add new reference', function() {
      jane.addReference(jill);
      expect(jane.references).to.eql([jill]);
    });
  });

  //new test for remove a reference

  describe('#removeReference', function() {
    it ('should remove the given reference', function() {
      jane.removeReference(jill);
      expect(jane.references).to.eql([]);
    });
  });

});
