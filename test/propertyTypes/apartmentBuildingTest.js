var expect = require('chai').expect,
  ApartmentBuilding = require('./../../src/propertyTypes/apartmentBuilding'),
  Unit = require('./../../src/unit'),
  Manager = require('./../../src/people/manager'),
  Tenant = require('./../../src/people/tenant'),
  Person = require('./../../src/people/person');

describe('ApartmentBuilding', function(){
  var terraces = new ApartmentBuilding('Terraces', '66 7th Street'),
      unit1 = new Unit(564, terraces, 700, 2000),
      unit2 = new Unit(332, terraces, 700, 2000),
      bob = new Manager('Bob Brannan', '555-555-555'),
      jane = new Tenant('Jane Davis', '555-555-555'),
      jill = new Person('Jill Taylor', '555-555-5555'),
      carl = new Person('Carl Jones', '555-555-5555');

  it ('should initially have no units', function() {
    expect(terraces.units).to.eq([]);
  });

  describe('#setManager', function() {
    it ('should set the manager', function() {
      terraces.setManager(bob);
      expect(terraces.manager).to.eq(bob);
    });
  });

  describe('#getManager', function() {
    it ('should return the manager', function() {
      expect(terraces.getManager()).to.eq(bob);
    });
  });

  describe('#addUnit', function() {
    it ('should add new unit', function() {
      terraces.addUnit(unit1);
      terraces.addUnit(unit2);
      expect(terraces.units).to.eq([unit1, unit2]);
    });
  });

  describe('#addTenant', function() {
    it ('should add a new tenant to a unit', function() {
      jane.addReference(jill);
      jane.addReference(carl);
      terraces.addTenant(unit1, jane);
      expect(unit1.tenant).to.eq(jane);
    });
  });

  describe('#removeTenant', function() {
    it ('should remove an existing tenant from a unit', function() {
      terraces.removeTenant(unit1, jane);
      expect(unit1.tenant).to.eq(null);
    });
  });

  describe('#availableUnits', function() {
    it ('should return the number of available units', function() {
      expect(terraces.availableUnits()).to.eq(2);
    });
  });

  describe('#rentedUnits', function() {
    it ('should return the number of rented units', function() {
      expect(terraces.rentedUnits()).to.eq(0);
    });
  });

});