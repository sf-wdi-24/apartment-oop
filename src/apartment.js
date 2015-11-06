function Apartment(address) {
  this.manager = null;
  this.units = [];
  this.address = address;
  this.rented = 0;
}

module.exports = Apartment;

var Manager = require('./people/manager'),
    Tenant = require('./people/tenant'),
    Unit = require('./unit');


Apartment.prototype.setManager = function(manager) {
  // if `manager` is an instance of `Manager`
  // set `this.manager` to `manager`
  this.manager = manager;
};

Apartment.prototype.getManager = function() {
  // return `this.manager`
  return this.manager;
};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references
  // add tenant to unit
  if((this.manager !== null) && (tenant.references.length > 1) && (unit.available)){
    unit.tenant = tenant;
    this.rented += 1;
  }
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  unit.tenant = null;
  this.rented -= 1;
};

Apartment.prototype.availableUnits = function() {
  // return num of available units
  return this.units.length;
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
  return this.rented;
};