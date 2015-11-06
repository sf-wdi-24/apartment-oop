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
  if (this.manager !== null && tenant.references.length > 1) {
     unit.tenant = tenant;
     }
  
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  unit.tenant = null;
  
};

Apartment.prototype.availableUnits = function() {
  // return num of available units
   var openUnit = 0;
   this.units.forEach(function(available) {
    if (available.tenant === null) {
      openUnit += 1;
    }
   });
     return openUnit;
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
  var rent = 0;
   this.units.forEach(function(rents) {
    if (rents.tenant !== null) {
      rent += 1;
    }
     
   });
   return rent;
    
    };
  




    
