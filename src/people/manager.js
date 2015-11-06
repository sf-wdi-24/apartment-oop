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
Person.call(this, name, contact);
Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

Manager.prototype.addApartment = function(apartment) {
 
  // add apartment to manager's apartments
  this.apartments.push(apartments); 
};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
  var apartmentRemove = 
  this.apartments.indexOf(apartment); 
  this.apartments.splice(apartmentRemove, 1); 

};














