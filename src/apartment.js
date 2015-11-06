function Apartment(address) {
  this.manager = null;
  this.units = [];
  this.address = address;
}

module.exports = Apartment;

var Manager = require('./people/manager'),
    Tenant = require('./people/tenant'),
    Unit = require('./unit');


Apartment.prototype.setManager = function(manager) {
  if (manager instanceof Manager) {
    this.manager = manager;
  }
};

Apartment.prototype.getManager = function() {
  return this.manager;
};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references, and unit is empty
  // add tenant to unit
  if (this.manager && tenant.references.length >= 2 && unit.available()) {
    unit.tenant = tenant;
  }
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  unit.tenant = null;
};

Apartment.prototype.availableUnits = function() {
  // return num of available units
  return this.units.filter(function(unit) {
    return unit.available();
  }).length;
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
  return this.units.filter(function(unit) {
    return !unit.available();
  }).length;
};