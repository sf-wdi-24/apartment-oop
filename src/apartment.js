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
  if (manager instanceof Manager){
    this.manager = manager;
  }else{
    return 'No such manager';
  }
};

Apartment.prototype.getManager = function() {
  // return `this.manager`
  return this.manager;
};

Apartment.prototype.addTenant = function(unit, tenant) {
  // if apartment has a manager and tenant has 2 references
  // add tenant to unit
  var ref = tenant.references.length >= 2;
  var available = this.units.indexOf(unit) > -1 && unit.available();
  if (this.manager && ref && available){
    unit.tenant = tenant;
  }else {
    this.units.push('sorry can\'t add you');
  }
};

Apartment.prototype.removeTenant = function(unit, tenant) {
  // remove tenant from unit
  if(unit.tenant === tenant) {
    return unit.tenant = null;
  }else {
    return 'you\'re gone next time' 
  }
};

Apartment.prototype.availableUnits = function(unit) {
  // return num of available units
  var avaiableUnits = 0;
  this.units.forEach(function(unit){
    if(unit.available) {
      avaiableUnits++;
    }
  });
  return avaiableUnits;
};

Apartment.prototype.rentedUnits = function() {
  // return num of rented units
  var rented = 0;
  this.units.forEach(function(unit){
    if (!unit.available) {
      rented++;
    }
  });
  return rented;
};




var newGuy = new Tenant('manlet', 383823);
var newGuy2 = new Tenant('manletmini', 231);
var newGuy3 = new Tenant('miniboss', 352343);

newGuy.addReference(newGuy2);
newGuy.addReference(newGuy3);
var newMan = new Manager('boss', 213213);
var newApt = new Apartment('123 street');
var newUnit = new Unit(232,'big one', 2320, 2032002);

newApt.setManager(newMan);

newApt.addTenant(newUnit,newGuy);
console.log(newApt.units);
