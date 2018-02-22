/**********************************
 * @author      Wouter Vlaeyen
 * @created     22/02/2018
 * @modified    22/02/2018
 * @copyright   Copyright © 2016-2017 Artevelde University College Ghent
 * @function    Week 2
 **********************************/
let calculate = function() {
    const begin = parseInt(document.getElementById('begin').value);
    const eind = parseInt(document.getElementById('eind').value);

    for(let i = begin; i <= eind; i++) {
        let res= "";
        /*if(i % 3 === 0) {
            res += "bitter";
            if(i % 5 === 0) {
                res += "bal";
            }
        }
        else if(i % 5 === 0) {
            res += "bal";
        }
        else {
            res += i;
        }*/

        //Works with Switch
        switch(true) {
            case(i%5==0 && i%3==0): res = "bitterbal"; break;
            case(i%3==0): res = "bitter"; break;
            case(i%5==0): res = "bal"; break;
            default: res = i;
        }
        document.getElementById('result').innerHTML += res + "<br>";
    }

}

// Add event listener
document.getElementById('gobtn').addEventListener('click', calculate);