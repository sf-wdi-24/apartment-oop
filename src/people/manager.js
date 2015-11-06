function Manager(name, contact) {
  this.apartments = [];
  this.name = name;
  this.contact = contact; 
  // set attributes (name, contact) using `this`
}

module.exports = Manager;

var Person = require('./person'),
    Apartment = require('./../apartment');


// Manager inherits from Person

Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

Manager.prototype.addApartment = function(apartment) {

  // add apartment to manager's apartments
  var apartment_1 = new addApartment();


  // How is this done?


};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
  var index = this.apartment.indexOf(apartment);
  this.apartments.splice(index, 1);
};