// now we will write our js file
// to add a map to our html, we should have two information at least
// where in the world we want to see
// how much we want to zoom
//so let us create a variable for metro area center location

let metroAreaCenterCoordinates = [44.96, -93.2]

// let us also create a variable for our zoom level
let zoomLevel = 9
// now we can create our map
let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)
// L.map need an argument where in the html will the map will be draw
// the map also need tiles to show the map background showing the building, roads, rivers and labels
// we can use different types of map tiles, for now, we will use open street
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]

// instead of writing a code for each college, we can use loop to add the markers to the map
campuses.forEach(function (collegeCampus){
    // let us assign a variable for marker text and write a template for the text
    let markerText = `${collegeCampus.name} <br> <a href="${collegeCampus.website}">website</a>`
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)
})

// let us assign a variable for mctc coordinate and add a marker for the mctc college

// let mctcCoordinates = [44.9724, -93.2844]
// let mctcMarker = L.marker(mctcCoordinates).
//     bindPopup('Minneapolis college <br> <a href="https://minneapolis.edu">website</a>').
//     addTo(map)
// // we can add a popup for the marker. to do that we use the bindpop function
//
//
// // add also stPaul college coordinate
// let stPaulCoordinates = [44.9483, -93.1099]
//
// let stPaulMarker = L.marker(stPaulCoordinates)
//     .bindPopup('stPaul college<br><a href="https://saintpaul.edu">website</a>')
//     .addTo(map)
//
// // we can also add a circle to a metro area
//
 let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {color: 'green', radius: 30000, fillOpacity: 0.1})
    .bindPopup('Twin cities metro area')
     .addTo(map)
//
// // add a mark to Normandale college
//
// let normandaleCoordinates = [44.8297, -93.3312]
//
// let normandaleMarker = L.marker(normandaleCoordinates)
//     .bindPopup('Normandale college<br><a href="https://normandale.edu">website</a>')
//     .addTo(map)