function Controller() {
    this.cityToCounty = new CityToCounty();
    this.cityToCounty.setCityState("Chicago IL");
    this.addButtonListener();
}

// This should console log "Cook County".

Controller.prototype.addButtonListener = function() {
    $("#getCounty").on('click', this.cityToCounty.getCountyCallback());
}