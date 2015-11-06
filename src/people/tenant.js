var Person = require('./person');

function Tenant(name, contact) {
  this.references = [];
  // set attributes (name, contact) using `this`
  Person.call(this, name, contact);
}

// Tenant inherits from Person
Tenant.prototype = new Person();
Tenant.prototype.constructor = Tenant;

Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  var ref = new Person(reference.name, reference.contact);
  this.references.push(ref);
};

module.exports = Tenant;
