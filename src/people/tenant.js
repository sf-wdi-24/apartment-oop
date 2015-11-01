var Person = require('./person');

function Tenant(name, contact) {
  this.references = [];
  // set attributes (name, contact) using `this`
}

// Tenant inherits from Person

Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
};

module.exports = Tenant;
