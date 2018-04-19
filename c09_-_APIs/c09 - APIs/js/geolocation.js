//Opgelet: 
//        - om zeker te zijn dat code werkt, plaats deze op een webserver
//        - voor veiligheidsredenen verschijnt er soms een pop-up om uw toestemming te vragen

let elMap = document.getElementById('loc'); // HTML element
let msg = 'Sorry, we were unable to get your location.'; // No location msg

let success = function(position) { // Got location, parameter is a Position-object
    console.log(position);
    msg = '<h3>Longitude:<br>'; // Create message
    msg += position.coords.longitude + '</h3>'; // Add longitude
    msg += '<h3>Latitude:<br>'; // Create message
    msg += position.coords.latitude + '</h3>';
    elMap.innerHTML = msg; // Show location
}

let fail = function(msg) { // Not got location, parameter is a PositionError-object
    elMap.textContent = msg.message; // Show error message
    console.log(msg.code); // Log the error
    console.log(msg.message);
}

if (navigator.geolocation) { // Is geo supported
    navigator.geolocation.getCurrentPosition(success, fail); // Ask for location
    elMap.textContent = 'Checking location...'; // Say checking...
} else { // Not supported
    elMap.textContent = msg; // Add manual entry
}