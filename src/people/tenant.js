var Person = require('./person');

function Tenant(name, contact) {
  this.references = [];
  // set attributes (name, contact) using `this`
  this.name = name;
  this.contact = contact;
}

// Tenant inherits from Person
var inherits = require('./../inherits');
inherits(Tenant, Person);

Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  this.references.push(reference);
};

module.exports = Tenant;
