function Manager(name, contact) {
  this.apartments = [];
  Person.call(this, name, contact);
}

module.exports = Manager;

var Person = require('./person'),
    Apartment = require('./../apartment');


// Manager inherits from Person
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

Manager.prototype.addApartment = function(apartment) {
  this.apartments.push(apartment);
};

Manager.prototype.removeApartment = function(apartment) {
  this.apartments.splice(this.apartments.indexOf(apartment), 1);
};