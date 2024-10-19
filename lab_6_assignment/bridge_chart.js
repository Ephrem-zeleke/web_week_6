// here in the script file let first put our data from the data base

let bridgeList = [
    { name: 'Verrazano-Narrows Bridge', location: 'New York, NY' , span: '1298.4', coordinates: [40.6066, -74.04471] },
    { name: 'Golden Gate Bridge', location: 'San Francisco and Marin, CA', span: '1280.2', coordinates: [37.8199, -122.4783] },
    {name:'Mackinac Bridge', location: 'Mackinaw and St Ignace, MI', span: '1158.0', coordinates: [45.8174, -84.7278] },
    {name: 'George Washington Bridge', location: 'New York, NY and New Jersey, NJ', span: '1067.0', coordinates: [	40.8517, -73.9527]},
    {name: 'Tacoma Narrows Bridge', location: 'Tacoma and Kitsap, WA', span: '853.44', coordinates:[47.2690, -122.5517]}]


// let us get the data from the bridge list

let bridgeName = []
let bridgeSpan = []

// now let's use the forEach loop and iterate and get the data that we want

bridgeList.forEach(function(bridge){
    bridgeName.push(bridge.name)
    bridgeSpan.push(bridge.span)
})
// now let us find our canvas element from the html
let canvas = document.querySelector('#bridge_chart')

let context = canvas.getContext('2d');
// create our chart here now
let chart = new Chart(context, {
    type: 'bar',
    data:{
        labels: bridgeName,
        datasets: [{
            label: 'span (meter)',
            data: bridgeSpan,
            backgroundColor:['green', 'blue', 'yellow', 'red', 'orange']
        }]
    },
    options:{
        scales:{
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                }
            }]
        }
    }

})








