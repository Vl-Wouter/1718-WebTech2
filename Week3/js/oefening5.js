/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-01T13:13:32+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: oefening5.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-01T13:43:00+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */




const secretpass = "nietnuttig";

let mix = secretpass.split('').sort(function(){return 0.5-Math.random()}).join('');
document.getElementById('hint').innerHTML = mix;
console.log(mix);

let guessCheck = function() {
  let userGuess = prompt("Schrijf hier je gok");
  let guesses = 1;
  while(userGuess !== secretpass) {
    userGuess = prompt("Schrijf hier je gok");
    console.log(userGuess);
    guesses++;
  }
  document.getElementById('result').innerHTML = "Welkom. Je hebt na " +  guesses + "x het wachtwoord geraden";
}



// Event listener
document.getElementById('try').addEventListener('click', guessCheck)
