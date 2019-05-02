// So yeah, this was 2-days of my life gathering these. :D
let cityImages = [
    {"Plano, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Plano_Skyline.jpg/1200px-Plano_Skyline.jpg", imgAuthor: "Danny20111993", imgLic: "(CC BY-SA 4.0)"}},
    {"Irvine, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Campus_of_the_University_of_California%2C_Irvine_%28aerial_view%2C_circa_2006%29.jpg", imgAuthor: "Poppashoppa22", imgLic: "(CC BY-SA 3.0)"}},
    {"Madison, WI": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Madison_Picnic_Point.jpg/1200px-Madison_Picnic_Point.jpg", imgAuthor: "Av9", imgLic: "(CC BY-SA 4.0)"}},
    {"Fremont, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Lake_Elizabeth_in_Fremont%2C_California_%28cropped%29.JPG/1200px-Lake_Elizabeth_in_Fremont%2C_California_%28cropped%29.JPG", imgAuthor: "Oleg Alexandrov", imgLic: "(CC BY-SA 3.0)"}},
    {"Huntington Beach, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Huntington_Beach_CA_Aerial_by_Don_Ramey_Logan.jpg/1200px-Huntington_Beach_CA_Aerial_by_Don_Ramey_Logan.jpg", imgAuthor: "D Ramey Logan", imgLic: "(CC BY-SA 3.0)"}},
    {"Fargo, ND": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Fargo%2C_ND_-_Aerial_Facing_East_%2843610135662%29.jpg/1200px-Fargo%2C_ND_-_Aerial_Facing_East_%2843610135662%29.jpg", imgAuthor: "formulanone", imgLic: "(CC BY-SA 2.0)"}},
    {"Grand Prarie, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/GP_Main_Street_at_Dusk.JPG/1200px-GP_Main_Street_at_Dusk.JPG", imgAuthor: "Gp user", imgLic: "(CC BY-SA)"}},
    {"San Jose, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/SJ_skyline_at_night_horizontal.jpg/1200px-SJ_skyline_at_night_horizontal.jpg", imgAuthor: "Ben Loomis", imgLic: "(CC BY 2.0)"}},
    {"Scottsdale, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Scottsdale_waterfront.jpg/1200px-Scottsdale_waterfront.jpg", imgAuthor: "Joseph Plotz", imgLic: "(CC BY 3.0)"}},
    {"San Francisco, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg/1200px-San_Francisco_from_the_Marin_Headlands_in_March_2019.jpg", imgAuthor: "Noahnmf", imgLic: "(CC BY-SA)"}},
    {"Bismarck, ND": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/2009-0521-CDNtrip049-ND-Bismarck-McKenziePatterson.jpg/1200px-2009-0521-CDNtrip049-ND-Bismarck-McKenziePatterson.jpg", imgAuthor: "Bobak Ha'Eri", imgLic: "(CC BY 3.0)"}},
    {"Overland Park, KS": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/4/46/DwntwnOPKS.png", imgAuthor: "Popcorn700", imgLic: "(CC BY-SA 4.0)"}},
    {"Santa Rosa, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Santa_Rosa%2C_Empire_Building_%282012%29.jpg/1200px-Santa_Rosa%2C_Empire_Building_%282012%29.jpg", imgAuthor: "Frank Schulengurg", imgLic: "(CC BY-SA)"}},
    {"Austin, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Austin_skyline_in_2014.jpg/1200px-Austin_skyline_in_2014.jpg", imgAuthor: "Caleb Feese", imgLic: "(CC BY 2.0)"}},
    {"Sioux Falls, SD": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/c/c1/Downtown_Sioux_Falls_from_6th_St_Bridge_overlooking_Big_Sioux_River.jpg/1200px-Downtown_Sioux_Falls_from_6th_St_Bridge_overlooking_Big_Sioux_River.jpg", imgAuthor: "Maxpower2727", imgLic: "(CC BY-SA)"}},
    {"Pearl City, HI": {imgSrc: "https://live.staticflickr.com/3741/9452800636_1552f01882_z.jpg", imgAuthor: "D Coetzee", imgLic: "(Public Domain)"}},
    {"Glendale, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Glendale_from_Forest_Lawn.jpg/1200px-Glendale_from_Forest_Lawn.jpg", imgAuthor: "Gedstrom", imgLic: "(CC BY-SA)"}},
    {"San Diego, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/San_Diego%2C_CA_USA_-_View_from_Coronado_-_panoramio.jpg/1200px-San_Diego%2C_CA_USA_-_View_from_Coronado_-_panoramio.jpg", imgAuthor: "Marelbu", imgLic: "(CC BY 3.0)"}},
    {"St Paul, MN": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Saint_Paul_skyline%2C_Lake_of_the_Isles%2C_West_Side.jpg/640px-Saint_Paul_skyline%2C_Lake_of_the_Isles%2C_West_Side.jpg", imgAuthor: "Cliff", imgLic: "(CC BY 2.0)"}},
    {"Charleston, SC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Charleston_SC_Collage-1.jpg/1200px-Charleston_SC_Collage-1.jpg", imgAuthor: "Salvationistdan", imgLic: "(CC BY-SA)"}}, 
    {"Gilbert, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Gilbert-Gilbert_Heritage_District_as_viewed_from_Gilbert_Rd..jpg", imgAuthor: "Marine 69-71", imgLic: "(CC BY-SA 3.0)"}},
    {"Anaheim, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Sleeping_Beauty_Castle_%2828926761750%29.jpg/1200px-Sleeping_Beauty_Castle_%2828926761750%29.jpg", imgAuthor: "HarshLight", imgLic: "(CC BY 2.0)"}},
    {"Raleigh, NC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Raleigh_photo_collage.jpg", imgAuthor: "Indy beetle", imgLic: "(CC BY-SA 3.0)"}},
    {"Cape Coral, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/f/f6/ISS047-E-84351_Cape_Coral%2C_Florida_%28annotated%29.jpg", imgAuthor: "ISS Exp 47", imgLic: "(Public Domain)"}},
    {"Cedar Rapids, IA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/19/Cedar_Rapids_skyline.jpg", imgAuthor: "Iowahwyman", imgLic: "(CC BY-SA 3.0)"}},
    {"Minneapolis, MN": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/82/MinneapolisCollage2018.jpg", imgAuthor: "RGully07", imgLic: "(CC BY-SA 4.0)"}}, 
    {"Chula Vista, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Chula_Vista%2C_CA%2C_USA_-_panoramio_%2877%29.jpg/1200px-Chula_Vista%2C_CA%2C_USA_-_panoramio_%2877%29.jpg", imgAuthor: "Roman Eugeniusz", imgLic: "(CC BY-SA 3.0)"}},
    {"Pembroke Pines, FL": {imgSrc: "assets/img/pembroke_pines_fl.jpg", imgAuthor: "", imgLic: "(CC BY-SA 3.0)"}},
    {"Honolulu, HI": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/HonoluluM.png/288px-HonoluluM.png", imgAuthor: "", imgLic: ""}},
    {"Des Moines, IA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Des_Moines_Montage.jpg/261px-Des_Moines_Montage.jpg", imgAuthor: "Raivena", imgLic: "(CC BY 3.0)"}},
    {"Irving, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Irving_Montage.jpg/343px-Irving_Montage.jpg", imgAuthor: "Av9", imgLic: "(Public Domain)"}},
    {"Santa Clarita, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/CanyonCountry.JPG/640px-CanyonCountry.JPG", imgAuthor: "Jeffrey Beall", imgLic: "(CC BY-SA 3.0)"}},
    {"Chandler, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Neighborhoods_in_the_City_of_Chandler.jpg/640px-Neighborhoods_in_the_City_of_Chandler.jpg", imgAuthor: "Chandlernews", imgLic: "(CC BY-SA 4.0)"}},
    {"Oceanside, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Ocean_Americanization_%28cropped%29.jpg/640px-Ocean_Americanization_%28cropped%29.jpg", imgAuthor: "Todd Schlender", imgLic: "(CC BY-SA 3.0)"}},
    {"Omaha, NE": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Heartland_of_America_Park%2C_Omaha%2C_Nebraska.jpg/640px-Heartland_of_America_Park%2C_Omaha%2C_Nebraska.jpg", imgAuthor: "Raymond Bucko", imgLic: "(CC BY 2.0)"}},
    {"Lincoln, NE": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Skyline_of_Downtown_Lincoln%2C_Nebraska%2C_U.S._%282015%29.jpg/640px-Skyline_of_Downtown_Lincoln%2C_Nebraska%2C_U.S._%282015%29.jpg", imgAuthor: "Hanyou23", imgLic: "(CC BY-SA 4.0)"}},
    {"Oakland, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/OAKLAND%2C_CA%2C_USA_-_Skyline_and_Bridge.JPG/640px-OAKLAND%2C_CA%2C_USA_-_Skyline_and_Bridge.JPG", imgAuthor: "Basil D Soufi", imgLic: "(CC BY-SA 3.0)"}},
    {"Billings, MT": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Billings%2C_Montana_Collage_4.jpg/385px-Billings%2C_Montana_Collage_4.jpg", imgAuthor: "Sara goth", imgLic: "(CC BY-SA 3.0)"}},
    {"Tempe, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Tempeskyline3.jpg", imgAuthor: "Schwnj", imgLic: "(CC BY-SA 3.0)"}},
    {"Garden Grove, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Crys-ext.jpg/587px-Crys-ext.jpg", imgAuthor: "Arnold C", imgLic: "(CC)"}},
    {"Denver, CO": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/DenverCP.JPG/640px-DenverCP.JPG", imgAuthor: "Hogs555", imgLic: "(CC BY-SA 3.0)"}},
    {"Fort Worth, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b9/Fort_Worth_Collage.png/320px-Fort_Worth_Collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}},
    {"Burlington, VT": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Collage_of_Burlington%2C_VT%2C_USA.jpg/395px-Collage_of_Burlington%2C_VT%2C_USA.jpg", imgAuthor: "Superbug2399", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Peoria, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Peoria_Collage_Christian_M_Williams.JPG/360px-Peoria_Collage_Christian_M_Williams.JPG", imgAuthor: "Ceemo", imgLic: "(CC BY-SA 3.0)"}},
    {"Boise, ID": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Aerial_View_of_Downtown_Boise.jpg/640px-Aerial_View_of_Downtown_Boise.jpg", imgAuthor: "Rickmouser45", imgLic: "(CC BY-SA 4.0)"}},      
    {"Garland, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Collage_of_Photos_of_Garland%2C_TX.jpg/371px-Collage_of_Photos_of_Garland%2C_TX.jpg", imgAuthor: "Randy Colborn", imgLic: "(CC BY-SA 4.0)"}},
    {"Aurora, CO": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Aurora_Municipal_Center.JPG/640px-Aurora_Municipal_Center.JPG", imgAuthor: "Jeffrey Beall", imgLic: "(CC BY-SA 3.0)"}},
    {"El Paso, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/El_Paso_montage.png/301px-El_Paso_montage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}},
    {"Arlington, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Arlington_collage.png/301px-Arlington_collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}}, 
    {"Washington, DC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Washington_Montage_2016.png/343px-Washington_Montage_2016.png", imgAuthor: "AlexTref871", imgLic: "(CC BY-SA 3.0)"}},
    {"Charlotte, NC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Charlotte_NC_collage.png/400px-Charlotte_NC_collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}},    
    {"Fort Lauderdale, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Skyline_of_Fort_Lauderdale%2C_Nov-15.jpg/640px-Skyline_of_Fort_Lauderdale%2C_Nov-15.jpg", imgAuthor: "KeanoManu", imgLic: "(CC BY-SA 4.0)"}}, 
    {"Seattle, WA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Seattle_Kerry_Park_Skyline.jpg/640px-Seattle_Kerry_Park_Skyline.jpg", imgAuthor: "CommunistSquared", imgLic: "(CC0 1.0)"}},    
    {"Aurora, IL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Aurora_Stolp_Island_Fox_R.JPG/640px-Aurora_Stolp_Island_Fox_R.JPG", imgAuthor: "Cbradshaw", imgLic: "(Public Domain)"}}, 
    {"Missoula, MT": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Missoula_Collage_Wikipedia_8.jpg/480px-Missoula_Collage_Wikipedia_8.jpg", imgAuthor: "Missoulian", imgLic: "(CC BY-SA 3.0)"}},    
    {"Santa Ana": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Santa_Ana_Amtrak_Station_%28cropped%29.jpg/640px-Santa_Ana_Amtrak_Station_%28cropped%29.jpg", imgAuthor: "Charlie Nguyen", imgLic: "(CC BY 2.0)"}}, 
    {"Boston, MA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Boston_-_panoramio_%2823%29.jpg/640px-Boston_-_panoramio_%2823%29.jpg", imgAuthor: "rokker", imgLic: "(CC BY 3.0)"}},    
    {"Colorado Springs, CO": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/CC_COSPRINGS.jpg/640px-CC_COSPRINGS.jpg", imgAuthor: "Postoak", imgLic: "(CC BY 2.0)"}},  
    {"Durham, NC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Durham-montage-05-08.jpg/279px-Durham-montage-05-08.jpg", imgAuthor: "Dreid1987", imgLic: "(CC0)"}},    
    {"Portland, ME": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Portland%2C_Maine_Montage.jpg/421px-Portland%2C_Maine_Montage.jpg", imgAuthor: "Karmos", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Grand Rapids, MI": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Grand_Rapids_montage.jpg/279px-Grand_Rapids_montage.jpg", imgAuthor: "Rachel Kramer", imgLic: "(CC BY-SA 3.0)"}},    
    {"Rancho Cucamonga, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cucamonga_Peak_122608.jpg/640px-Cucamonga_Peak_122608.jpg", imgAuthor: "Cheryl", imgLic: "(CC BY 2.0)"}}, 
    {"Salt Lake City, UT": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Salt_Lake_City_montage_19_July_2011.jpg/329px-Salt_Lake_City_montage_19_July_2011.jpg", imgAuthor: "Eric Pancer", imgLic: "(CC BY-SA 3.0)"}},    
    {"Yonkers, NY": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/2013-05-05_13_23_39_View_of_Yonkers%2C_New_York_from_Alpine_Overlook_on_the_New_Jersey_Palisades.jpg/640px-2013-05-05_13_23_39_View_of_Yonkers%2C_New_York_from_Alpine_Overlook_on_the_New_Jersey_Palisades.jpg", imgAuthor: "Famartin", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Rapid City, SD": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/RC-Downtown-Hills.jpg/510px-RC-Downtown-Hills.jpg", imgAuthor: "Dvorak86", imgLic: "(CC BY-SA 4.0)"}},    
    {"Dallas, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Dallas_Collage_Montage.png/348px-Dallas_Collage_Montage.png", imgAuthor: "Av9", imgLic: "(CC BY-SA 4.0)"}},   
    {"South Burlington, VT": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/South_Burlington%2C_VT_City_Hall_2.jpg/519px-South_Burlington%2C_VT_City_Hall_2.jpg", imgAuthor: "Superbug2399", imgLic: "(CC BY-SA 3.0)"}},    
    {"Virginia Beach, VA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/VirginiaBeach.jpg/640px-VirginiaBeach.jpg", imgAuthor: "Jason Pratt", imgLic: "(CC 2.0)"}}, 
    {"Long Beach, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/LBCmontagebytisoy.JPG/337px-LBCmontagebytisoy.JPG", imgAuthor: "Tisoy", imgLic: "(CC BY-SA 3.0)"}},    
    {"Cheyenne, WY": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Downtown_Cheyenne.jpg/640px-Downtown_Cheyenne.jpg", imgAuthor: "publichall", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Columbia, MD": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Columbia_Lake_Front.jpg/640px-Columbia_Lake_Front.jpg", imgAuthor: "Kittamaqundi", imgLic: "(CC BY 2.0)"}},    
    {"Mesa, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Downtown_Mesa_Arizona.jpg/640px-Downtown_Mesa_Arizona.jpg", imgAuthor: "Ixnayonthetimmay", imgLic: "(CC BY 3.0)"}}, 
    {"Chesapeake, VA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Great_Dismal_Swamp_Canal.jpg/640px-Great_Dismal_Swamp_Canal.jpg", imgAuthor: "US Army Corps of Eng", imgLic: "(Public Domain)"}},    
    {"Reno, NV": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Reno_skyline.JPG/640px-Reno_skyline.JPG", imgAuthor: "Kc0616", imgLic: "(CC BY 3.0)"}},   
    {"Tallahassee, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Tallahassee_Header_for_Wikipedia_2.png/316px-Tallahassee_Header_for_Wikipedia_2.png", imgAuthor: "Urbantallahassee", imgLic: "(CC BY-SA 4.0)"}},    
    {"Atlanta, GA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Midtown_Atlanta_Skyline.jpg/640px-Midtown_Atlanta_Skyline.jpg", imgAuthor: "Atlantacitizen", imgLic: "(CC BY-SA 3.0)"}},   
    {"Oxnard, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5a/OxnardWalkway1.JPG", imgAuthor: "Gemma.godina501", imgLic: "(CC BY-SA 3.0)"}},    
    {"Nampa, ID": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Depot_%28Nampa%2C_Idaho%29.jpg/640px-Depot_%28Nampa%2C_Idaho%29.jpg", imgAuthor: "Visitor7", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Los Angeles, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg/640px-Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg", imgAuthor: "Adoramassey", imgLic: "(CC BY-SA 4.0)"}},    
    {"Orlando, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Orlando_collage.jpg/376px-Orlando_collage.jpg", imgAuthor: "Artystyk386", imgLic: "(CC BY-SA 4.0)"}}, 
    {"Portland, OR": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Portland_and_Mt_Hood.jpg/640px-Portland_and_Mt_Hood.jpg", imgAuthor: "Amateria1121", imgLic: "(CC BY-SA 3.0)"}},    
    {"Salem, OR": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Salem_Oregon_aerial.jpg/640px-Salem_Oregon_aerial.jpg", imgAuthor: "OR DOT", imgLic: "(CC BY 2.0)"}}, 
    {"Brownsville, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brownsville_Collage.jpg/310px-Brownsville_Collage.jpg", imgAuthor: "Westofzephyr", imgLic: "(CC BY-SA 4.0)"}},    
    {"Pittsburgh, PA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Montage_Pittsburgh.jpg/343px-Montage_Pittsburgh.jpg", imgAuthor: "Yassie", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Riverside, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/First_Church_Of_Christ_Historical_0196_Wiki_a_%28cropped%29.jpg/465px-First_Church_Of_Christ_Historical_0196_Wiki_a_%28cropped%29.jpg", imgAuthor: "Steve Rouhotas", imgLic: "(CC BY-SA 3.0)"}},    
    {"Fontana, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Fontana%2C_California_City_Hall_-_panoramio.jpg/640px-Fontana%2C_California_City_Hall_-_panoramio.jpg", imgAuthor: "Jordan W", imgLic: "(CC BY-SA 3.0)"}}, 
    {"New York, NY": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/NYC_Montage_2014_4_-_Jleon.jpg/365px-NYC_Montage_2014_4_-_Jleon.jpg", imgAuthor: "Jleon", imgLic: "(CC BY-SA 3.0)"}},    
    {"Nashua, NH": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Nashua_NH_Main_Street_50.JPG/640px-Nashua_NH_Main_Street_50.JPG", imgAuthor: "Jon Platek", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Huntsville, AL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Downtown_Huntsville%2C_Alabama_cropped.jpg/640px-Downtown_Huntsville%2C_Alabama_cropped.jpg", imgAuthor: "Anivron", imgLic: "(CC BY-SA 3.0)"}},    
    {"Jersey City, NJ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Jersey_City_skyline_-_June_2017.jpg/640px-Jersey_City_skyline_-_June_2017.jpg", imgAuthor: "MusikAnimal", imgLic: "(CC BY-SA 4.0)"}}, 
    {"West Valley City, UT": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/LDS_stake_center_in_West_Valley_City%2C_Utah_%28cropped%29.jpg/640px-LDS_stake_center_in_West_Valley_City%2C_Utah_%28cropped%29.jpg", imgAuthor: "Leon7", imgLic: "(CC BY-SA 3.0)"}},    
    {"Manchester, NH": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Manchester%2C_New_Hampshire_Montage.jpg/320px-Manchester%2C_New_Hampshire_Montage.jpg", imgAuthor: "Graham Nadig", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Ontario, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ontario_Convention_Center.jpg/640px-Ontario_Convention_Center.jpg", imgAuthor: "Mack Male", imgLic: "(CC BY-SA 2.0)"}},    
    {"San Antonio, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/San_Antonio_Montage.png/343px-San_Antonio_Montage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}}, 
    {"Amarillo, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Amarillo_Skyline_at_Dusk_in_January_2018.png/640px-Amarillo_Skyline_at_Dusk_in_January_2018.png", imgAuthor: "Chris Hale", imgLic: "(CC BY-SA 4.0)"}},    
    {"Vancouver, WA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Vancouver_WA_Collage.jpg/311px-Vancouver_WA_Collage.jpg", imgAuthor: "Drown Soda", imgLic: "(CC BY-SA 4.0)"}}, 
    {"Tampa, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8c/TampaCollection1.png", imgAuthor: "Excel23", imgLic: "(CC BY-SA 3.0)"}},    
    {"Miami, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Miami_collage_20110330.jpg/351px-Miami_collage_20110330.jpg", imgAuthor: "Averette", imgLic: "(CC BY 3.0)"}}, 
    {"Dover, DE": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Dover_Delaware.jpg/640px-Dover_Delaware.jpg", imgAuthor: "Tim Kiser", imgLic: "(CC BY-SA 2.5)"}},    
    {"Moreno Valley, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Sunnymead_Ranch_Lake.jpg", imgAuthor: "Steve Jacobs", imgLic: "(Public Domain)"}}, 
    {"Glendale, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Glendale-Downtown_Glendale.jpg/640px-Glendale-Downtown_Glendale.jpg", imgAuthor: "Marine 69-71", imgLic: "(CC BY-SA 3.0)"}},    
    {"Nashville, TN": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Nashville_collage.png/400px-Nashville_collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}}, 
    {"Houston, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/7/76/Houston_Collage.png/301px-Houston_Collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}},    
    {"Chicago, IL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Chicago_montage1.jpg/351px-Chicago_montage1.jpg", imgAuthor: "Jleon", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Columbia, SC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Cola_SC_Collage-.jpg/481px-Cola_SC_Collage-.jpg", imgAuthor: "Salvationistdan", imgLic: "(CC BY-SA 4.0)"}},    
    {"Greensboro, NC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Greensboro_Skyline.jpg/640px-Greensboro_Skyline.jpg", imgAuthor: "Beyonce245", imgLic: "(Public Domain)"}}, 
    {"Lewiston, ME": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Lewiston%2C_Maine%2C_Montage.png/481px-Lewiston%2C_Maine%2C_Montage.png", imgAuthor: "LewisTheMan", imgLic: "(CC0 1.0)"}}, 
    {"Laredo, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Plaza_Theater%2C_downtown_Laredo%2C_TX_IMG_7673.JPG/640px-Plaza_Theater%2C_downtown_Laredo%2C_TX_IMG_7673.JPG", imgAuthor: "Billy Hathorn", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Hialeah, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Palm_Ave-Hialeah_-_panoramio.jpg/640px-Palm_Ave-Hialeah_-_panoramio.jpg", imgAuthor: "Ivan Curra", imgLic: "(CC BY-SA 3.0)"}},
    {"Lexington-Fayette, KY": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/LexingtonDowntown.JPG/640px-LexingtonDowntown.JPG", imgAuthor: "Madgeek1450", imgLic: "(Public Domain)"}}, 
    {"Henderson, NV": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/District1.jpg/640px-District1.jpg", imgAuthor: "Lvtalon", imgLic: "(Public Domain)"}}, 
    {"Sacramento, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Sacramento_Skyline_%28cropped%29.jpg/640px-Sacramento_Skyline_%28cropped%29.jpg", imgAuthor: "J.smith", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Modesto, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Modesto_Arch.JPG/640px-Modesto_Arch.JPG", imgAuthor: "Carl Skaggs", imgLic: "(Public Domain)"}},
    {"Newport News, VA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Downtown_Newport_News.jpg/640px-Downtown_Newport_News.jpg", imgAuthor: "Etombari", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Tucson, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/TucsonDerivative.png/264px-TucsonDerivative.png", imgAuthor: "John Diebolt", imgLic: "(CC BY-SA 3.0)"}},
    {"Springfield, MO": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/ParkCentralSquarefountainbyCVBCS.jpg/640px-ParkCentralSquarefountainbyCVBCS.jpg", imgAuthor: "Joelfun", imgLic: "(Free Art License)"}}, 
    {"St. Petersburg, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/0/0f/Downtown_St._Petersburg%2C_Florida.png", imgAuthor: "Ryanbrz", imgLic: "(CC BY-SA 3.0)"}},
    {"Richmond, VA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Collage_of_Landmarks_in_Richmond%2C_Virginia_v_1.jpg/389px-Collage_of_Landmarks_in_Richmond%2C_Virginia_v_1.jpg", imgAuthor: "Ken Lund", imgLic: "(CC BY-SA 3.0)"}}, 
    {"Tacoma, WA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Montage_of_Tacoma%2C_cir._early_2012.jpg/302px-Montage_of_Tacoma%2C_cir._early_2012.jpg", imgAuthor: "Jakeroot", imgLic: "(CC BY-SA 3.0)"}},
    {"Warwick, RI": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Warwick_City_Hall.jpg", imgAuthor: "Marcbela", imgLic: "(Public Domain)"}},
    {"Lubbock, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/LubbockSkyline2013.jpg/640px-LubbockSkyline2013.jpg", imgAuthor: "Redraiderengineer", imgLic: "(CC BY-SA 3.0)"}},
    {"Casper, WY": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Casperskyline.jpg/320px-Casperskyline.jpg", imgAuthor: "Adbay", imgLic: "(Public Domain)"}},
    {"Kansas City, MO": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Kansas_City_Collage_2016.jpg/480px-Kansas_City_Collage_2016.jpg", imgAuthor: "Jordanbruening", imgLic: "(CC BY-SA 4.0)"}},
    {"Phoenix, AZ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/PhoenixMontage02.jpg/408px-PhoenixMontage02.jpg", imgAuthor: "Onel5969", imgLic: "(CC BY-SA 2.0)"}},
    {"Oklahoma City, OK": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Oklahoma_City_montage.png", imgAuthor: "Rcsprinter123", imgLic: "(CC BY-SA 3.0)"}},
    {"Corpus Christi, TX": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/CorpusChristiTX_Night.jpg/638px-CorpusChristiTX_Night.jpg", imgAuthor: "Lejflo", imgLic: "(CC BY-SA 3.0)"}},
    {"Winston-Salem, NC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Winston_salem_panorama.jpg/640px-Winston_salem_panorama.jpg", imgAuthor: "Vasiliymeshko", imgLic: "(CC BY 3.0)"}},
    {"Albuquerque, NM": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Albuquerque_Infobox_Photo.png/316px-Albuquerque_Infobox_Photo.png", imgAuthor: "Danae Hurst", imgLic: "(CC BY-SA 3.0)"}},
    {"Columbus, OH": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Montage_Columbus_1.jpg/465px-Montage_Columbus_1.jpg", imgAuthor: "Yassie", imgLic: "(CC BY-SA 3.0)"}},
    {"Bakersfield, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/2008-0621-Bakersfield-pan.JPG/640px-2008-0621-Bakersfield-pan.JPG", imgAuthor: "Bobak Ha'Eri", imgLic: "(CC BY 3.0)"}},
    {"Bridgeport, CT": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Bridgeport_montage.jpg/344px-Bridgeport_montage.jpg", imgAuthor: "Iracaz", imgLic: "(CC BY-SA 3.0)"}},
    {"Jacksonville, FL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/JXFL2011N.png/520px-JXFL2011N.png", imgAuthor: "Excel23", imgLic: "(CC BY-SA 3.0)"}},
    {"Knoxville, TN": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Knoxville_TN_skyline.jpg/640px-Knoxville_TN_skyline.jpg", imgAuthor: "Nathan C. Fortner", imgLic: "(CC BY-SA 3.0)"}},
    {"Louisville, KY": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Louisville_montage.jpg/384px-Louisville_montage.jpg", imgAuthor: "Peter2006son", imgLic: "(Public Domain)"}},
    {"Norfolk, VA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/MontageNorfolkVAUSA.jpg/328px-MontageNorfolkVAUSA.jpg", imgAuthor: "PghPhxNfk", imgLic: "(CC BY-SA 3.0)"}},
    {"Chattanooga, TN": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/7/73/Chattanooga_collage.png/301px-Chattanooga_collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}},
    {"Wichita, KS": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Wichita-ks.jpg", imgAuthor: "Nnez4321", imgLic: "(Public Domain)"}},
    {"Worcester, MA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Downtown_Worcester%2C_Massachusetts.jpg/640px-Downtown_Worcester%2C_Massachusetts.jpg", imgAuthor: "Terageorge ", imgLic: "(CC BY-SA 3.0)"}},
    {"Rochester, NY": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/RochesterCollage4.jpg/360px-RochesterCollage4.jpg", imgAuthor: "EastOfWest", imgLic: "(CC BY-SA 3.0)"}},
    {"San Bernardino, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Downtown_San_Bernardino.jpg", imgAuthor: "House10902", imgLic: "(CC BY-SA 3.0)"}},
    {"Buffalo, NY": {imgSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/Aerial_photo_of_Buffalo%2C_NY_Skyline.jpg/640px-Aerial_photo_of_Buffalo%2C_NY_Skyline.jpg", imgAuthor: "Pete716", imgLic: "(CC BY-SA 3.0)"}},
    {"Fresno, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Downtownfresnoskyline.jpg", imgAuthor: "Mortadelo2005", imgLic: "(CC BY-SA 3.0)"}},
    {"Milwaukee, WI": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Milwaukee_Collage_New.jpg/343px-Milwaukee_Collage_New.jpg", imgAuthor: "Maximilian77", imgLic: "(CC BY-SA 4.0)"}},
    {"Baton Rouge, LA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Baton_Rouge_collage.png/400px-Baton_Rouge_collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}},
    {"Stockton, CA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Downtown_Stockton_California.jpg/640px-Downtown_Stockton_California.jpg", imgAuthor: "LPS.1", imgLic: "(CC0)"}},
    {"Spokane, WA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/SpokaneFromPalisades_20070614.jpg/640px-SpokaneFromPalisades_20070614.jpg", imgAuthor: "Mark Wagner", imgLic: "(CC BY 2.5)"}},
    {"Indianapolis, IN": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Indianapolis_Montage_2.jpg/433px-Indianapolis_Montage_2.jpg", imgAuthor: "Momoneymoproblemz", imgLic: "(CC BY-SA 3.0)"}},
    {"Fort Wayne, IN": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Downtown_Fort_Wayne%2C_Indiana_Skyline_from_Old_Fort%2C_May_2014.jpg/640px-Downtown_Fort_Wayne%2C_Indiana_Skyline_from_Old_Fort%2C_May_2014.jpg", imgAuthor: "Momoneymoproblemz", imgLic: "(Public Domain)"}},
    {"New Orleans, LA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/New_Orleans_header_collage.png/301px-New_Orleans_header_collage.png", imgAuthor: "TheTexasNationalist99 ", imgLic: "(CC BY-SA 4.0)"}},
    {"North Las Vegas, NV": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Northlasv.jpg/800px-Northlasv.jpg", imgAuthor: "Meridethmyers", imgLic: "(Public Domain)"}},
    {"Las Vegas, NV": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/DowntownLasVegas.jpg/640px-DowntownLasVegas.jpg", imgAuthor: "Rmvisuals", imgLic: "(CC BY-SA 4.0)"}},
    {"Tulsa, OK": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Downtown_Tulsa_Skyline.jpg/640px-Downtown_Tulsa_Skyline.jpg", imgAuthor: "Jordan Michael Winn", imgLic: "(CC0)"}},
    {"Wilmington, DE": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Wilmington_Delaware_skyline.jpg/640px-Wilmington_Delaware_skyline.jpg", imgAuthor: "Tim Kiser", imgLic: "(CC BY-SA 2.5)"}},
    {"Providence, RI": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Providence_Montage_Updated.jpg/372px-Providence_Montage_Updated.jpg", imgAuthor: "Av9", imgLic: "(CC BY-SA 4.0)"}},
    {"New Haven, CT": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/New_Haven_montage_2.jpg/298px-New_Haven_montage_2.jpg", imgAuthor: "Charles Barneby", imgLic: "(Public Domain)"}},
    {"Montgomery, AL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Montgomery%2Cal.png/396px-Montgomery%2Cal.png", imgAuthor: "Clinthammer", imgLic: "(CC BY-SA 4.0)"}},
    {"Baltimore, MD": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/9/98/BaltimoreC12.png", imgAuthor: "Excel23", imgLic: "(CC BY-SA 3.0)"}},
    {"Jackson, MS": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/62/JacksonMissColl.png", imgAuthor: "Excel23", imgLic: "(CC BY-SA 4.0)"}},
    {"Shreveport, LA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Shreveport_Header_Infobox_Collage.png/301px-Shreveport_Header_Infobox_Collage.png", imgAuthor: "TheTexasNationalist99", imgLic: "(CC BY-SA 4.0)"}},
    {"Memphis, TN": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Memphis_TN_Photo_Collage.png/403px-Memphis_TN_Photo_Collage.png", imgAuthor: "TrevB", imgLic: "(CC BY-SA 3.0)"}},
    {"Philadelphia, PA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/BenjaminFranklinParkway2017.jpg/640px-BenjaminFranklinParkway2017.jpg", imgAuthor: "Meihe Chen", imgLic: "(CC BY-SA 4.0)"}},
    {"Columbus, GA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Downtown_Columbus%2C_Georgia_skyline.jpg/640px-Downtown_Columbus%2C_Georgia_skyline.jpg", imgAuthor: "PghPhxNfk", imgLic: "(CC BY-SA 4.0)"}},
    {"Fayetteville, NC": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/TheMarketHouse_FAY.jpg/640px-TheMarketHouse_FAY.jpg", imgAuthor: "Gerry Dincher", imgLic: "(CC BY-SA 2.0)"}},
    {"Akron, OH": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/AkronOhioSky.jpg/459px-AkronOhioSky.jpg", imgAuthor: "Threeblur0", imgLic: "(CC BY-SA 3.0)"}},
    {"Cincinnati, OH": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Photomontage_Cincinnati_V01.jpg/280px-Photomontage_Cincinnati_V01.jpg", imgAuthor: "EEJCC", imgLic: "(CC BY-SA 4.0)"}},
    {"Fort Smith, AR": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Fort_Smith%2C_AR_002.jpg/640px-Fort_Smith%2C_AR_002.jpg", imgAuthor: "Brandonrush", imgLic: "(CC BY-SA 4.0)"}},
    {"St. Louis, MO": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/8/8f/StLouisMontage.jpg", imgAuthor: "Redcody", imgLic: "(CC BY-SA 3.0)"}},
    {"Augusta, GA": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Augusta_Georgia_Broad_Street_Lamar_Building.jpg/640px-Augusta_Georgia_Broad_Street_Lamar_Building.jpg", imgAuthor: "Sir Mildred Pierce", imgLic: "(CC BY 2.0)"}},
    {"Mobile, AL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Mobile_Montage-2.jpg", imgAuthor: "Altairisfar", imgLic: "(Public Domain)"}},
    {"Newark, NJ": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/6/64/Newark_Skyline_Northwest_View.jpg", imgAuthor: "Payton Chung", imgLic: "(CC BY-SA 2.0)"}},
    {"Huntington, WV": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/HWV_Collage.jpg/480px-HWV_Collage.jpg", imgAuthor: "Wvfunnyman", imgLic: "(CC BY-SA 3.0)"}},
    {"Little Rock, AR": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Little_Rock_collage.png/300px-Little_Rock_collage.png", imgAuthor: "Brandonrush", imgLic: "(CC BY-SA 3.0)"}},
    {"Gulfport, MS": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Street_in_Downtown_Gulfport_MS.jpg/360px-Street_in_Downtown_Gulfport_MS.jpg", imgAuthor: "Redditaddict69", imgLic: "(CC BY-SA 4.0)"}},
    {"Cleveland, OH": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Cleveland_photomontage_2016.jpg/333px-Cleveland_photomontage_2016.jpg", imgAuthor: "Levdr1lp", imgLic: "(CC BY 2.0)"}},
    {"Birmingham, AL": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Birmingham_AL_Montage.jpg/393px-Birmingham_AL_Montage.jpg", imgAuthor: "Polk540", imgLic: "(CC BY-SA 3.0)"}},
    {"Charleston, WV": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Spring_Hill_View_Apr_09.JPG/640px-Spring_Hill_View_Apr_09.JPG", imgAuthor: "Pubdog", imgLic: "(Public Domain)"}},
    {"Toledo, OH": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Toledo_Montage.jpg/402px-Toledo_Montage.jpg", imgAuthor: "Dlte", imgLic: "(CC BY-SA 3.0)"}},
    {"Detroit, MI": {imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Detroit_Montage_3.png/390px-Detroit_Montage_3.png", imgAuthor: "Av9", imgLic: "(CC BY-SA 4.0)"}}
];

function CityImages() {}
CityImages.prototype.data = cityImages;
CityImages.prototype.setOutputDiv = function(outputDiv) {
    this.outputDiv = outputDiv;
}
CityImages.prototype.writeImage = function(divID, index) {
    let cityState = Object.keys(this.data[index])[0];
    let imgSrc = this.data[index][cityState].imgSrc;
    console.log("imgSrc = ", imgSrc);
    $(divID).append(`<img src=${imgSrc}>`);
}

CityImages.prototype.writeCard = function(divID, index) {
    let cityState = Object.keys(this.data[index])[0];
    let imgSrc = this.data[index][cityState].imgSrc;
    $(divID).append(`
        <div class="demo-card-square mdl-card mdl-shadow--2dp">
            <div
                class="mdl-card__title mdl-card--expand"
                style="background: url('${imgSrc}') top/cover">
                <h2 class="mdl-card__title-text" style="padding: 0 0.2em; border-radius: 0.2em; background-color: rgba(6,6,6,0.6)">${cityState}</h2>
            </div>
            <div class="mdl-card__supporting-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan convallis.
            </div>
        </div>
    `);
}

// Replacing broken image link with default.png
// Courtesy: https://blog.teamtreehouse.com/how-to-fix-a-broken-image
//
// document.addEventListener(“DOMContentLoaded”, function(event) {
//     document.querySelectorAll(‘img’).forEach(function(img) {
//         img.onerror = function(){
//         this.src = ‘img/share/default.png’;
//         };
//     })
// });

function UnitTestCI(divID) {
    let ci = new CityImages();
    for (let i = 0; i < ci.data.length; i++) {
        // ci.writeImage(divID, i);
        ci.writeCard(divID, i);
    }
}
