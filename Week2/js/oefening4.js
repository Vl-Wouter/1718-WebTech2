/**********************************
 * @author      Wouter Vlaeyen
 * @created     22/02/2018
 * @modified    22/02/2018
 * @copyright   Copyright © 2016-2017 Artevelde University College Ghent
 * @function    Week 2
 **********************************/
let calcTitle = function() {
    let score = document.getElementById('score').value;
    let title;
    console.log("score = " + score);
    switch(true) {
       case (score > 50 && score < 68): title = "voldoende"; break;
       case (score > 68 && score < 77): title="ondescheiding"; break;
       case (score > 77 && score < 85): title="grote onderscheiding"; break;
       case (score > 85 && score < 90): title="grootste onderscheiding"; break;
       case (score >= 90): title="grootste onderscheiding en gelukwensen"; break;
       default: title="Augustus/Onvoldoende"; 
    }

    document.getElementById('titel').innerHTML = "De diplomatitel voor deze student is: " + title + ".";
}

// Add event listener
document.getElementById('titleButton').addEventListener('click', calcTitle);