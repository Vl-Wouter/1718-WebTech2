/**********************************
 * @author      Wouter Vlaeyen
 * @created     22/02/2018
 * @modified    22/02/2018
 * @copyright   Copyright © 2016-2017 Artevelde University College Ghent
 * @function    Week 2
 **********************************/
let words = ["help ", "me ", "ffs"];

for(let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

//let together = words[0] + words[1] + words[2];

let together = words[0];
for(let i = 1; i < words.length; i++) {
    together += words[i];
}

console.log(together);