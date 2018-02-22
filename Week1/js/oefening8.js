/**********************************
 * @author      Wouter Vlaeyen
 * @created     15/02/2018
 * @modified    15/02/2018
 * @copyright   Copyright © 2016-2017 Artevelde University College Ghent
 * @function    Oefening 8 (Week 1)
 **********************************/

// Ask for time 
let time = prompt("Geef een aantal seconden in");
time = parseInt(time);

// Define hours, minutes and seconds
const hour = Math.floor(time/3600);
const minute = Math.floor((time - (hour*3600))/60);
const second = time - (hour*3600) - (minute*60);

const result = hour + "u " + minute + "m " + second + "s.";

//Show result on screen
document.write(time + " seconden is " + result);

/*document.write("<br>")

countResult = 11;

console.log(countResult++);
console.log(countResult);
console.log(++countResult);
console.log(countResult);
*/