function Controller() {
    this.cityToCounty = new CityToCounty();
    // this.cityToCounty.setCityState("Chicago IL");

    this.countyToPolitics = new CountyToPolitics();
    this.addButtonListeners();
    console.log(this.countyToPolitics.data);
    this.getCounties();
}

Controller.prototype.addButtonListeners = function() {
    // This should console log "Cook County".
    $("#getCounty").on('click', this.cityToCounty.getCountyCallback());
    $("#getPolitics").on('click', this.countyToPolitics.getPoliticsCallback());
}

Controller.prototype.getCounties = function() {
    let cb = this.cityToCounty.getCountyCallback();
    let cities = Object.keys(cityMetrics); // array
    cities.map(x => {
        cb();
        console.log("county = ", this.cityToCounty.county);
    });

//     import requests
// import json

// locations = ['Chicago, IL', 'San Francisco, CA']

// city_data_url = 'http://api.sba.gov/geodata/primary_links_for_city_of/%s/%s.json'

// for l in locations:
//     split_name = l.split(', ')
//     response = requests.get(city_data_url % tuple(split_name))

//     resp_json = json.loads(response.text)
//     print resp_json[0]['full_county_name']
// }

// $.ajax({
//     url: queryUrl,
//     method: this.apiMethod
// }).done(function(response) {
//     // Verify we're getting reasonable data back from the endpoint.
//     var nLength = (response.status == "OK") ? response.results[0].address_components.length : 0;
//     console.log("CityToCounty.getCountyCallback() nLength = ", nLength);
//     if (nLength > 2) {
//         that.county = response.results[0].address_components[1].long_name;
//         if (!that.county) {
//             console.log("CityToCounty.getCountyCallback() county field empty");
//         } else {
//             console.log("Mode.getCountyCallback() city_and_state = ", strCityState, "county = ", that.county);
//         }
//     }
// }).fail(function(err) {
//     throw err;
// });

// jQuery.ajax({
//     url: 'http://example.com/catalog/create/' + targetNode.id + '?name=' + encode(to.inp[0].value),
//     success: function (result) {
//         if (result.isOk == false) alert(result.message);
//     },
//     async: false
// });