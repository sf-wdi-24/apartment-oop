function Unit(number, building, sqft, rent) {
	this.tenant = null;
	this.number = number;
	this.building = building;
	this.sqft = sqft;
	this.rent = rent;

	// set attributes (number, building, sqft, rent) using `this`
}

Unit.prototype.available = function() {
	if (!tenant) {
		return true;
	} else {
		return false;
	}
	// return true if no tenant, false if tenant
};

module.exports = Unit;