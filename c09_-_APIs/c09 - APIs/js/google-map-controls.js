function init() {
    // the mapOptions object contains the information to initialise the map to how we want it
    let mapOptions = {
        zoom: 14,
        center: new google.maps.LatLng(51.088136, 3.668820),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

        panControl: false,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.LARGE,
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
        overviewMapControl: false
    };
    let venueMap = new google.maps.Map(document.getElementById('map'), mapOptions);
}

function loadScript() {
    let script = document.createElement('script');
    script.src = 'http://maps.googleapis.com/maps/api/js?sensor=false&callback=init';
    document.body.appendChild(script);
}

window.addEventListener("load", loadScript); // on load call loadScript()