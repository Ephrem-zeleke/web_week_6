// where in the world
// how much are we zooming in
let mapCenter = [45, -93]
let zoomLevel = 4

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap)


//when we have a set of objects, and they are basically are all basically the same
// they all have the same attribute
// all the things are bridge
// store bridges as array of object


// name:'glden gate bridge
// city:
//location: 'new york'
// span:
// adding the bridge icon

let bridgeIcon = L.icon({
    iconUrl:'bridge.jpg',
    iconSize:[50,50],
    iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    popupAnchor:  [0, -25] // point from which the popup should open relative to the iconAnchor

})

// let us create an icon for the longest bridge

let longestBridgeIcon =L.icon({
    iconUrl: 'longest_bridge.jpg',
    iconSize:[50,50],
    iconAnchor:  [0, 0],
    popupAnchor: [0, -30]
})

let bridgeList = [
    { name: 'Verrazano-Narrows Bridge', location: 'New York, NY' , span: '1298.4', coordinates: [40.6066, -74.04471] },
    { name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
    {name:'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: '1158.0', coordinates: [45.8174, -84.7278] },
    {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span: '1067.0', coordinates: [	40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span: '853.44', coordinates:[47.2690, -122.5517]}]


// comparing the bridges based on their span
let longestBridge = bridgeList.reduce(function (prevBridge, currentBridge) {
    return parseFloat(currentBridge.span) > parseFloat(prevBridge.span) ? currentBridge : prevBridge
}, bridgeList[0])

bridgeList.forEach(function (bridgeObject) { // looping each bridge using the for each function
    let bridgeName = bridgeObject.name
    let bridgeCoordinate = bridgeObject.coordinates
    let bridgeSpan = bridgeObject.span
    let markerText = `<b>${bridgeName}</b><br>${bridgeSpan}` // text format for the popup

    // let's use the longest bridge icon for the longest bridge and the bridge icon for the others

    let bridgeMarker
    if (bridgeObject === longestBridge) {
        bridgeMarker = L.marker(bridgeCoordinate, { icon: longestBridgeIcon })  // Longest bridge marker
    } else {
        bridgeMarker = L.marker(bridgeCoordinate, { icon: bridgeIcon })  // Standard bridge marker
    }
    bridgeMarker.bindPopup(markerText) // adding the popup text to the marker
    bridgeMarker.addTo(bridgeMap)
})