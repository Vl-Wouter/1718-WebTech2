/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-22T10:42:17+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: script.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-22T10:59:35+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */



// declaratie van de overview
const parkingOverview = document.getElementById('parking-overview');

// functie expressie om JSON-request via url uit te voeren
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
getJSON('https://datatank.stad.gent/4/mobiliteit/bezettingparkingsrealtime.json', function(error, data) {

    // show error
    if(error) {

        // do something here

        return false;
    }

    // loop through all parking places
    for(let i = 0; i < data.length; i++) {

        // current parking object
        let parking = data[i];
        let park = document.createElement('div');
        park.classList.add('parking');
        let pTitleEl = document.createElement('h2');
        let pTitle = document.createTextNode(parking.name);
        pTitleEl.appendChild(pTitle);
        park.appendChild(pTitleEl);
        let pList = document.createElement('ul');
        let pCapEl = document.createElement('li');
        let pCap = document.createTextNode('Capaciteit: ' + parking.parkingStatus.totalCapacity);
        let pAvEl = document.createElement('li');
        let pAv = document.createTextNode('Beschikbaar: ' + parking.parkingStatus.availableCapacity);
        pAvEl.appendChild(pAv);
        pCapEl.appendChild(pCap);
        pList.appendChild(pCapEl);
        pList.appendChild(pAvEl);
        park.appendChild(pList);
        parkingOverview.appendChild(park);

        // do magic here
    }
});
