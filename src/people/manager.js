function Manager(name, contact) {
  this.apartments = [];   
  // set attributes (name, contact) using `this`
  this.name = name;
  this.contact = contact;
}

module.exports = Manager;

var Person = require('./person'),
    Apartment = require('./../apartment');


// Manager inherits from Person
var inherits = require('./../inherits');
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

Manager.prototype.addApartment = function(apartment) {
  // add apartment to this manager's apartments
  this.apartments.push(apartment);
};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
  var index = this.apartments.indexOf(apartment);
  if (index == -1) {
  	return;
  }
  this.apartments.splice(index, 1);
};