var Person = require('./person');
var Unit = require('./../unit');
var Apartment = require("./../apartment");
var Manager = require("./manager");

var terraces = new Apartment('Terraces', '66 7th Street'),
  unit1 = new Unit(564, terraces, 700, 2000),
  unit2 = new Unit(332, terraces, 700, 2000);

terraces.units.push(unit1, unit2);

var jane = new Tenant('Jane Davis', '555-555-555'),
    jill = new Person('Jill Taylor', '555-555-5555'),
    carl = new Person('Carl Jones', '555-555-5555');

function Tenant(name, contact) {
  this.references = [];
  this.name = name;
  this.contact = contact;
  // set attributes (name, contact) using `this`
}
Tenant.prototype = new Person();
Tenant.prototype.constructor = Person;

// Tenant inherits from Person

Tenant.prototype.addReference = function(reference) {
  // add reference (which is instance of `Person`) to tenant's references
  this.references.push(reference);

};

Tenant.prototype.addTenant = function(tenant, unit, apartment, reference1, reference2) {
  tenant.addReference(reference1);
  tenant.addReference(reference2);
  apartment.addTenant(unit, tenant);

};

Tenant.prototype.removeTenant = function(unit, tenant, apartment) {
  apartment.removeTenant(unit, tenant);
};

module.exports = Tenant;