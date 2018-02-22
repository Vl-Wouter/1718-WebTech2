/**********************************
 * @author      Wouter Vlaeyen
 * @created     15/02/2018
 * @modified    15/02/2018
 * @copyright   Copyright © 2016-2017 Artevelde University College Ghent
 * @function    Oefening 1 - 4 (Week 1)
 **********************************/

 // Declare number via prompt
let number = window.prompt("Voer een getal in");

//Show number in console (TESTING)
console.log("number = " + number)

// Result text declared
const text = "Het ingevoerde getal is " + parseInt(number) + ".";

// Result shown on screen
document.write(text);

// Define number length
let numberlength = number.length;

// Define number length on screen
const lengthtext = "<br>Het nummer is " + numberlength + " tekens lang.";

// Show number length
document.write(lengthtext);