function Unit(number, building, sqft, rent) {
  this.tenant = null;
  // set attributes (number, building, sqft, rent) using `this`
  this.number = number;
  this.building = building;
  this.sqft = sqft;
  this.rent = rent;
}

Unit.prototype.available = function() {
  // return true if no tenant, false if tenant
  if(this.tenant === null) {
	  return true;
  } else {
    return false;
  }
};

module.exports = Unit;