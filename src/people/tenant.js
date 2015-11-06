var Person = require('./person');

function Tenant(name, contact) {
  Person.call(this, name, contact);
  this.references = [];
  }

// Tenant inherits from Person
Tenant.prototype = new Person();
Tenant.prototype.constructor = Tenant;

Tenant.prototype.addReference = function(reference) {
  this.references.push(reference);
};

module.exports = Tenant;
