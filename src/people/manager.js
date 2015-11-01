function Manager(name, contact) {
  this.apartments = [];
  // set attributes (name, contact) using `this`
}

module.exports = Manager;

var Person = require('./person'),
    Apartment = require('./../apartment');


// Manager inherits from Person

Manager.prototype.addApartment = function(apartment) {
  // add apartment to manager's apartments
};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
};