function Unit(number, building, sqft, rent) {
  this.tenant = null;
  // set attributes (number, building, sqft, rent) using `this`
}

Unit.prototype.available = function() {
  // return true if no tenant, false if tenant
};

module.exports = Unit;