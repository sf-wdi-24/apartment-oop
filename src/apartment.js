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
};

Apartment.prototype.getManager = function() {
  // return `this.manager`
};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references
  // add tenant to unit
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
};

Apartment.prototype.availableUnits = function() {
  // return num of available units
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
};