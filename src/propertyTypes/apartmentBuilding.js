var Property = require('./property');

function ApartmentBuilding(name, address) {
  // apartmentBuilding has many units
  // set properties using `this`
  this.name = name;
  Property.call(this, address);
}

ApartmentBuilding.prototype = new Property();
ApartmentBuilding.prototype.constructor = ApartmentBuilding;

module.exports = ApartmentBuilding;