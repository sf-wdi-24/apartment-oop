var Person = require('./person'),
    inherits = require('./../inherits');

function Tenant(name, contact) {
  this.references = [];
  // set attributes (name, contact) using `this`
  Person.call(this, name, contact);
}

// Tenant inherits from Person
inherits(Tenant, Person);

Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  if (reference instanceof Person) {
    this.references.push(reference);
  } else {
    console.error("Failed to add reference:", reference);
  }
  return this;
};

module.exports = Tenant;