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
  if(manager instanceof Manager) {
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


};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit

/* Look at Manager.removeApartment prototype as example 
  //Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
  var index = this.apartments.indexOf(apartment);
  //removing var index from apartments
  this.apartments.splice(index, 1);
};*/

};

Apartment.prototype.availableUnits = function() {
  // return num of available units
  //setting a variable to signify the available units. Don't want to call it availableUnits since we have prototype called availableUnits
  var vaccantUnits = 0;
  //Iterating, and adding, through Apartment.units array(declard globally earlier in file)
  this.units.forEach(function(unit) {
    //and adding an if statement calling our Unit.available prototype(see unit file) to our locally declared vaccantUnits varible
    if (unit.available()) {
      vaccantUnits++;
    }
  }); 
  return vaccantUnits;
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units

};