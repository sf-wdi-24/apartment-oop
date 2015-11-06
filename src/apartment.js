function Apartment(address) {
  this.manager = null;
  this.units = [];
  this.address = address;
}

module.exports = Apartment;

var Manager = require('./people/manager'),
  Tenant = require('./people/tenant'),
  Unit = require('./unit');

  var bob = new Manager('Bob Brannan', '555-555-555');


Apartment.prototype.setManager = function(manager) {
  // if `manager` is an instance of `Manager`
  // set `this.manager` to `manager`

  if (manager instanceof Manager) {
    this.manager = manager;
  }
};

Apartment.prototype.getManager = function() {
  // return `this.manager`
  return this.manager;
};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references
  // add tenant to unit
  if (this.manager !== null && tenant.references.length > 1) {
    unit.tenant = tenant;
  }
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  var locationOfUnit = this.units.indexOf(unit);
  var currentUnit = this.units[locationOfUnit];
  currentUnit.tenant = null;

  // var more_units = this.units;
  // var finder = more_units.indexOf(unit);
  // if (finder.tenant !== null) {
  //   finder.tenant = null;
  // }
};

Apartment.prototype.availableUnits = function() {
  // return num of available units
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
};