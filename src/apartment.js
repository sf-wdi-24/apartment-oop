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
  return this;
};

Apartment.prototype.getManager = function() {
  // return `this.manager`
  return this.manager;
};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references
  // add tenant to unit

  var validUnit = this.units.indexOf(unit) > -1 && unit.available();
  var validTenant = tenant.references.length >= 2 && tenant instanceof Tenant;

  if(this.manager && validUnit && validTenant) {
    unit.tenant = tenant;
  }
  return this;
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit

  var validUnit = this.units.indexOf(unit) > -1;
  var validTenant = unit.tenant === tenant;
  
  if(this.manager && validUnit && validTenant) {
    unit.tenant = null;
  }
  return this;
};

Apartment.prototype.availableUnits = function() {
  // return num of available units
  var availableUnits = 0;
  this.units.forEach(function(unit) {
    if (unit.available()) {
      availableUnits += 1;
    }
  });
  return availableUnits;
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
  var rentedUnits = 0;
  this.units.forEach(function(unit) {
    if (!unit.available()) {
      rentedUnits += 1;
    }
  });
  return rentedUnits;
};
