let venueMap;
let pinLocation;

let success = function(position) { // Got location, parameter is a Position-object
    pinLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    showMap();
}

let fail = function(msg) { // Not got location, parameter is a PositionError-object
    pinLocation = new google.maps.LatLng(51.088136, 3.668820);
    showMap();
}

function init() {
    if (navigator.geolocation) { // Is geo supported
        navigator.geolocation.getCurrentPosition(success, fail); // Ask for location
    }
}

function showMap() {
    let mapOptions = {
        zoom: 15,
        center: pinLocation,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
            position: google.maps.ControlPosition.TOP_RIGHT
        },

        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
            position: google.maps.ControlPosition.TOP_LEFT
        },

        scaleControl: true,
        scaleControlOptions: {
            position: google.maps.ControlPosition.TOP_CENTER
        },
        streetViewControl: false,
        overviewMapControl: false,

        styles: [{
            stylers: [
                { hue: "#00ff6f" },
                { saturation: -50 }
            ]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [
                { lightness: 100 },
                { visibility: "simplified" }
            ]
        }, {
            featureType: "transit",
            elementType: "geometry",
            stylers: [
                { hue: "#ff6600" },
                { saturation: +80 }
            ]
        }, {
            featureType: "transit",
            elementType: "labels",
            stylers: [
                { hue: "#ff0066" },
                { saturation: +80 }
            ]
        }, {
            featureType: "poi",
            elementType: "labels",
            stylers: [
                { visibility: "on" }
            ]
        }, {
            featureType: "poi.park",
            elementType: "labels",
            stylers: [
                { visibility: "on" }
            ]
        }, {
            featureType: "water",
            elementType: "geometry",
            stylers: [
                { hue: "#c4f4f4" }
            ]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [
                { visibility: "off" }
            ]
        }]
    };

    let venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);

    let startPosition = new google.maps.Marker({ // Create a new marker
        position: pinLocation, // Set its position
        map: venueMap, // Specify the map
        icon: "img/go.png" // Path to image from HTML
    });

}

function loadScript() {
    let script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}

window.addEventListener("load", loadScript); // on load call loadScript()