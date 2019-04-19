// The following data is taken from:
//
//	https://maps.googleapis.com/maps/api/geocode/json?address=Chicago IL&language=en&sensor=true&key=AIzaSyD4-iShS_FXpTaYoz6LjgU7Yosbu_cxjsU
//
//	It converts a US City into a County.
//
//	The fields of interest are: 
//
//		cityToCounty.results[i].address_components[1].long_name = "Cook County"
//
//		cityToCounty.results[i].address_components[0].long_name = "Chicago"
//		cityToCounty.results[i].address_components[2].short_name = "IL"
//
//	It appears that multi-county cities are simplified down to one predominant county.
//

let cityToCounty = {
    "results": [
        {
            "address_components": [
                {
                    "long_name": "Chicago",
                    "short_name": "Chicago",
                    "types": [
                        "locality",
                        "political"
                    ]
                },
                {
                    "long_name": "Cook County",
                    "short_name": "Cook County",
                    "types": [
                        "administrative_area_level_2",
                        "political"
                    ]
                },
                {
                    "long_name": "Illinois",
                    "short_name": "IL",
                    "types": [
                        "administrative_area_level_1",
                        "political"
                    ]
                },
                {
                    "long_name": "United States",
                    "short_name": "US",
                    "types": [
                        "country",
                        "political"
                    ]
                }
            ],
            "formatted_address": "Chicago, IL, USA",
            "geometry": {
                "bounds": {
                    "northeast": {
                        "lat": 42.023131,
                        "lng": -87.52366099999999
                    },
                    "southwest": {
                        "lat": 41.6443349,
                        "lng": -87.9402669
                    }
                },
                "location": {
                    "lat": 41.8781136,
                    "lng": -87.6297982
                },
                "location_type": "APPROXIMATE",
                "viewport": {
                    "northeast": {
                        "lat": 42.023131,
                        "lng": -87.52366099999999
                    },
                    "southwest": {
                        "lat": 41.6443349,
                        "lng": -87.9402669
                    }
                }
            },
            "place_id": "ChIJ7cv00DwsDogRAMDACa2m4K8",
            "types": [
                "locality",
                "political"
            ]
        }
    ],
    "status": "OK"
}
