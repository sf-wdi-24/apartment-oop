var Person = require('./person');
    Property = require('./../propertyTypes/property');

function Manager(name, contact) {
  this.properties = [];
  // set attributes (name, contact) using `this`
}

Manager.prototype.addProperty = function(property) {
  // add property to manager's properties
};

Manager.prototype.removeProperty = function(property) {
  // remove property from manager's properties
};

module.exports = Manager;