var Manager = require('./../people/manager'),
    Tenant = require('./../people/tenant'),
    Unit = require('./../unit');

function Property(address) {
  this.manager = null;
  this.units = [];
  // set properties using `this`
}

Property.prototype.setManager = function(manager) {
  // if `manager` is an instance of `Manager`
  // set `this.manager` to `manager`
};

Property.prototype.getManager = function() {
  // return `this.manager`
};

Property.prototype.addTenant = function(unit, tenant) {
  // if property has a manager and tenant has 2 references
  // add tenant to unit
};

Property.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
};

Property.prototype.availableUnits = function() {
  // return num of available units
};

Property.prototype.rentedUnits = function() {
  // return num of rented units
};

module.exports = Property;