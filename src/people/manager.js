function Manager(name, contact) {
  this.apartments = [];
  // set attributes (name, contact) using `this`
  this.name = name;
  this.contact = contact;
}

module.exports = Manager;

var Person = require('./person'),
    Apartment = require('./../apartment'), 
    Inherits = require('./../inherits');



// Manager inherits from Person

Inherits(Manager, Person);


Manager.prototype.addApartment = function(apartment) {
  // add apartment to manager's apartments
  this.apartments.push(apartment);

};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
  this.apartments.splice(this.apartments.indexOf(apartment), 1);

};

