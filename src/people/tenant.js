var Person = require('./person');

var Tenant = function(name, contact) {
  this.references = [];
  // set attributes (name, contact) using `this`
  this.name = name;
  this.contact = contact;
};

// Tenant inherits from Person
//Set prototype of subclass to a new instance of superclass
Tenant.prototype = new Person ();

//Step 2 for setting prototype inhertiance
//Set constructor of subclass to it's constructor function
Tenant.prototype.constructor = Tenant;

Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  if(reference instanceof Person) {
  	return this.references.push(reference);
  }
};

module.exports = Tenant;


