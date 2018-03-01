/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-01T10:43:39+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: main.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-01T11:09:53+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */

//initialize variables
let popcorn = 3;
let burger = 4;
let donuts = 10;


//define results
let result1 = popcorn*3;
let result2 = popcorn + (burger*2);
let result3 = donuts + burger + donuts;
let result4 = burger + ((donuts/2) * popcorn);


//show first 3 results
document.getElementById('result1').value = result1;
document.getElementById('result2').value = result2;
document.getElementById('result3').value = result3;
console.log("result 4 = " + result4);

//get input value from user
function resultCheck() {
  let userInput = document.getElementById('result4').value;
  console.log("user value = " + userInput);
  if(userInput == result4) {
    alert("Gefeliciteerd! Je hebt de juiste oplossing gevonden! \nDe oplossing is: " + result4);
  }
  else {
    alert("Je moet toch nog wat beter studeren...");
  }
}


// Add event listener
document.getElementById('check').addEventListener('click', resultCheck);
