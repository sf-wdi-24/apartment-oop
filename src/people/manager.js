var Person = require('./person'),
    Apartment = require('./../apartment'),
    inherits = require('./../inherits');

function Manager(name, contact) {
  this.apartments = [];
  // set attributes (name, contact) using `this`
  Person.call(this, name, contact);
}

// Manager inherits from Person
inherits(Manager, Person);

Manager.prototype.addApartment = function(apartment) {
  // add apartment to manager's apartments
  if (apartment instanceof Apartment) {
    this.apartment.push(apartment);
  } else {
    console.error("Failed to add apartment:", apartment);
  }
  return this;
};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
  var indexOfApartment = this.apartments.indexOf(apartment);
  if(indexOfApartment > -1) {
    this.apartments.splice(indexOfApartment, 1);
  } else {
    console.error("Failed to remove apartment:", apartment);
  }
  return this;
};

module.exports = Manager;