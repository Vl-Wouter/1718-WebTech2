/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-08T10:43:19+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: script.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-08T11:10:02+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */



let anchor = document.getElementsByTagName('a');
console.log(anchor);
// Selecteer eerste link uit array
let link = anchor[0];


// selecteer alle strong en span elementen
let bold = document.getElementsByTagName('strong');
let span = document.getElementsByTagName('span');
// Laat code originele kleur onthouden
let backgroundReset = link.style.background;


// Maak functie voor het veranderen van kleuren (DIT IS INLINE --> NIET AANGERADEN)
let change = function() {
  for(let i = 0; i < bold.length; i++) {
    bold[i].style.color = "orange";
  }
  for(let j = 0; j < span.length; j++) {
    span[j].style.color = "purple";
  }
  link.style.background = "pink";
}

//Functie voor terugzetten van kleuren
let changeBack = function() {
  for(let i = 0; i < bold.length; i++) {
    bold[i].style.color = "black";
  }
  for(let j = 0; j < span.length; j++) {
    span[j].style.color = "black";
  }
  link.style.background = backgroundReset;
}

// Event listener
link.addEventListener('mouseover', change);
link.addEventListener('mouseout', changeBack);


/*


//First create a list of all bold items
var bold_Items;
window.onload = getBold_items();

// Collect all <strong> tags
function getBold_items()
{
  bold_Items = document.getElementsByTagName('strong');
}
// iterate all bold tags and change color
function highlight()
{
   for (var i=0; i<bold_Items.length; i++)
   {
    bold_Items[i].style.color = "green";
    }
}

// On mouse out highlighted words become black
function return_normal()
{
  for (var i=0; i<bold_Items.length; i++)
  {
       bold_Items[i].style.color = "black";
  }
}

*/
