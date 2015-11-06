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
  if(apartment instanceof Apartment){

  return this.apartments.push(apartment);
  }
};

Manager.prototype.removeApartment = function(apartment) {
  var removeThis = this.apartments.indexOf(apartment);
  if (removeThis > -1) {
  	return this.apartments.splice(removeThis, 1);
  };
};

//testing to see if the methods work

var mrMan = new Manager('mrMan', 123-432-2412);
var newApt = new Apartment('333 street');
var newApt2 = new Apartment('222 street');
console.log(mrMan.addApartment(newApt));
console.log(mrMan.apartments);
console.log(mrMan.removeApartment(newApt));
console.log(mrMan.apartments);
// console.log(mrMan.removeApartment('NewApt'));
// console.log(mrMan.apartments);

