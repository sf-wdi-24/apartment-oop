function Unit(number, building, sqft, rent) {
  this.tenant = null;
  // set properties using `this`
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
}

Unit.prototype.available = function() {
  // return true if no tenant, false if tenant
  return !(this.tenant);
};

module.exports = Unit;