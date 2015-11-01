var Person = require('./people/person'),
    Manager = require('./people/manager'),
    Tenant = require('./people/tenant');

var Property = require('./propertyTypes/property'),
    ApartmentBuilding = require('./propertyTypes/apartmentBuilding');

var Unit = require('./unit');

// start apartment module to export later
var App = {};

// add people to apartment module
App.Person = Person;
App.Manager = Manager;
App.Tenant = Tenant;

// add properties to apartment module
App.Property = Property;
App.ApartmentBuilding = ApartmentBuilding;

// add unit to apartment module
App.Unit = Unit;

// export apartment module
module.exports = App;