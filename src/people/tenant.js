var Person = require('./person');

function Tenant(name, contact) {
  this.references = [];
  // set attributes (name, contact) using `this`
  this.name = name;
  this.contact = contact;
}

  var Inherits = require('./../inherits');

// Tenant inherits from Person

Inherits(Tenant, Person);


Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  this.references.push(reference);
};


//new function to remove a reference

Tenant.prototype.removeReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  this.references.splice(this.references.indexOf(reference), 1);
};
module.exports = Tenant;



