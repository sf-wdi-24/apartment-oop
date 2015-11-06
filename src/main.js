var Person = require('./people/person'),
    Manager = require('./people/manager'),
    Tenant = require('./people/tenant');

var Apartment = require('./apartment'),
    Unit = require('./unit');

// start module for app to export later
var App = {};

// add people to module
App.Person = Person;
App.Manager = Manager;
App.Tenant = Tenant;
App.People = People;

// add properties to module
App.Apartment = Apartment;
App.Unit = Unit;
App.Properties = Properties 

// export apartment module
module.exports = App;