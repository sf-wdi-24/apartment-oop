function Manager(name, contact) {
  this.apartments = [];
  // set attributes (name, contact) using `this`
  Person.call(this, name, contact);

}

module.exports = Manager;

var Person = require('./person'),
    Apartment = require('./../apartment');


// Manager inherits from Person
Manager.prototype = new Person;
Manager.prototype.constructor = Manager;


Manager.prototype.addApartment = function(apartment) {
  // add apartment to manager's apartments
  return this.apartments.push(apartment);
};

Manager.prototype.removeApartment = function(apartment) {
  var removeThis = this.apartments.indexOf(apartment);
  if (removeThis > -1) {
  	this.apartments.splice(removeThis, 1);
  };
};

var mrMan = new Manager('mrMan', 123-432-2412);
console.log(mrMan.addApartment('NewApt'));
console.log(mrMan.removeApartment('NewApt'));
console.log(mrMan.apartments);
