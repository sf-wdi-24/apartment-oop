var Person = require('./person');

function Tenant(name, contact) {
  this.references = [];
  // set attributes (name, contact) using `this`
  Person.call(this, name, contact);
}

// Tenant inherits from Person
Tenant.prototype = new Person;
Tenant.prototype.constructor = Tenant;


Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  //reference needs to be created already
  return this.references.push(reference);
};

//i think this works

// var tenant1 = new Tenant('bob', 123-324-2132);
// var tenant2 = new Tenant('bobert', 232-233-2123);
// var tenant3 = new Tenant('ricky', 213-2313-21312)

//
// tenant1.addReference(tenant2);
// tenant2.addReference(tenant1);
// console.log(tenant1.references);

module.exports = Tenant;

