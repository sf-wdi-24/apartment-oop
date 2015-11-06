function Manager(name, contact) {
  this.apartments = [];
  // set attributes (name, contact) using `this`
}

module.exports = Manager;

var Person = require('./person'),
    Apartment = require('./../apartment');


// Manager inherits from Person
//Step 1 of adding inheritance
Manager.prototype = new Person();

//Step 2 for setting prototype inhertiance
//Set constructor of subclass to it's constructor function
Manager.prototype.constructor = Manager;

Manager.prototype.addApartment = function(apartment) {
	// add apartment to manager's apartments
	return this.apartments.push(apartment);
};

Manager.prototype.removeApartment = function(apartment) {
  // remove apartment from manager's apartments
  var index = this.apartments.indexOf(apartment);
  //removing var index from apartments
  this.apartments.splice(index, 1);
};

