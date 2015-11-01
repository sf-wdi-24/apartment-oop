var Person = require('./person'),
    Property = require('./../propertyTypes/property');

function Manager(name, contact) {
  this.properties = [];
  // set attributes (name, contact) using `this`
  Person.call(this, name, contact);
}

Manager.prototype = new Person();
Manager.prototype.constructor = Manager;

Manager.prototype.addProperty = function(property) {
  // add property to manager's properties
  if (property instanceof Property) {
    this.properties.push(property);
  } else {
    console.error("Failed to add property:", property);
  }
  return this;
};

Manager.prototype.removeProperty = function(property) {
  // remove property from manager's properties
  var indexOfProperty = this.properties.indexOf(property);
  if(indexOfProperty > -1) {
    this.properties.splice(indexOfProperty, 1);
  } else {
    console.error("Failed to remove property:", property);
  }
  return this;
};

module.exports = Manager;