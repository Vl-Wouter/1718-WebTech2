/**
 * @Author: Wouter Vlaeyen
 * @Date:   28-03-2018
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: main.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 29-03-2018
 * @Copyright: 2017-2018 Artevelde University College Ghent
 */
// Get form inputs
let firstInput = document.getElementById('firstName');
let lastInput = document.getElementById('lastName');


// get JSON via url
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

// get JSON for this exercise

//Get joke
let createJoke = function() {
  let firstName = firstInput.value;
  let lastName = lastInput.value;
  let url = 'https://api.icndb.com/jokes/random?firstName=' + firstName + '&lastName=' + lastName;
  console.log(url);
  getJSON(url, function(error, data) {
    if(error) {
      alert('There has been an error getting the JSON data, please check the code or try again.');
      return false;
    }

    let joke = data;
    let jokelist = document.getElementById('jokes');

    let jokecontainer = document.createElement('li');
    jokecontainer.classList.add('jokeItem');
    jokecontainer.id = joke.value.id;
    let joketxtcont = document.createElement('p');
    joketxtcont.classList.add('joketxt')
    joketxtcont.innerHTML = joke.value.joke;
    let jokeidcont = document.createElement('p');
    jokeidcont.classList.add('jokeid')
    let jokeid = document.createTextNode('Joke ID: ' + joke.value.id);
    jokeidcont.appendChild(jokeid);
    jokecontainer.appendChild(joketxtcont);
    jokecontainer.appendChild(jokeidcont);
    console.log(joketxtcont.innerHTML);
    jokelist.appendChild(jokecontainer);
    jokecontainer.classList.add('scale-in');
    setTimeout(function() {
      jokecontainer.classList.remove('scale-in');
    }, 300)

  });
  firstInput.value = firstName;
  lastInput.value = lastName;
};


//Event Listener
document.getElementById('btnGen').addEventListener('click', createJoke);
