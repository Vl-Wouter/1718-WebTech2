var header = document.querySelector('header');
var section = document.querySelector('section');
// functie-expressie om JSON-request via url uit te voeren
const getJSON = function(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
};

// get json data
getJSON('https://annaudenaert.github.io/testing/superheroes.json', function(error, data) {

    // show error
    if (error) {

        // do something here

        return false;
    }

    console.log(data);
});