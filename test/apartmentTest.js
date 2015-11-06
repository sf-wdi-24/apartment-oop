var expect = require('chai').expect,
    Apartment = require('./../src/apartment'),
    Unit = require('./../src/unit'),
    Manager = require('./../src/people/manager'),
    Tenant = require('./../src/people/tenant'),
    Person = require('./../src/people/person');

describe('Apartment', function() {
  var terraces = new Apartment('Terraces', '66 7th Street'),
      unit1 = new Unit(564, terraces, 700, 2000),
      unit2 = new Unit(332, terraces, 700, 2000);

  terraces.units.push(unit1, unit2);

  var bob = new Manager('Bob Brannan', '555-555-555'),
      jane = new Tenant('Jane Davis', '555-555-555'),
      frank = new Tenant('Frank Fry', '555-555-555'),
      jill = new Person('Jill Taylor', '555-555-5555'),
      carl = new Person('Carl Jones', '555-555-5555');

  describe('#setManager', function() {
    it ('should set the manager', function() {
      terraces.setManager(bob);
      expect(terraces.manager).to.eql(bob);
    });
  });

  describe('#getManager', function() {
    it ('should return the manager', function() {
      expect(terraces.getManager()).to.eql(bob);
    });
  });

  describe('#addTenant', function() {
    it ('should add a new tenant to a unit', function() {
      jane.addReference(jill);
      jane.addReference(carl);
      terraces.addTenant(unit1, jane);
      expect(unit1.tenant).to.eql(jane);
    });
    it ('should not rent to unavailable unit', function() {
      frank.addReference(jill);
      frank.addReference(carl);
      terraces.addTenant(unit1, frank);
      expect(unit1.tenant).to.eql(jane);
    });
  });

  describe('#removeTenant', function() {
    it ('should remove an existing tenant from a unit', function() {
      terraces.removeTenant(unit1, jane);
      expect(unit1.tenant).to.eql(null);
    });
  });

  describe('#availableUnits', function() {
    it ('should return the number of available units', function() {
      expect(terraces.availableUnits()).to.eql(2);
    });
  });

  describe('#rentedUnits', function() {
    it ('should return the number of rented units', function() {
      expect(terraces.rentedUnits()).to.eql(0);
    });
  });

});