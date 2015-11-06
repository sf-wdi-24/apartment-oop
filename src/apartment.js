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
  if (this.manager !== null && tenant.references.length >= 2) {
    unit.tenant = tenant;
  } 
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  unit.tenant = null;
};

Apartment.prototype.availableUnits = function() {
  // return num of available units
  available = 0;
  this.units.forEach(function(unit) {
    if (unit.tenant === null) {
      available++;
    }
  });
  return available;
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
  rented = 0;
  this.units.forEach(function(unit) {
    if (unit.tenant !== null) {
      rented++;
    }
  });
  return rented;
};






