var Person = require('./person'),
    Apartment = require('./../apartment');

function Manager(name, contact) {
  this.apartments = [];
  // set attributes (name, contact) using `this`
}

// Manager inherits from Person

Manager.prototype.addApartment = function(apartment) {
  // add apartment to manager's apartments
};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
};

module.exports = Manager;
