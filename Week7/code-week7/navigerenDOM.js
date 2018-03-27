/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-26T09:01:46+02:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: navigerenDOM.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-26T09:36:42+02:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */
//Cheatsheet DOM manipulation

//Aanspreken elementen
//ID
let list_1 = document.getElementById('list1');
console.log(list_1);

//tag
let pEl = document.getElementsByTagName('p'); //Dynamic
console.log(pEl);

//QuerySelector
let pElAlt = document.querySelectorAll('p'); //Static
console.log(pElAlt);

// Class
let class_a = document.getElementsByClassName('a');
console.log(class_a);

let a_alt = document.querySelectorAll('.a'); //Werkt met CSS, kan meerdere classes gebruiken
console.log(a_alt);

//Eerste element van selectie
let firstElement = document.querySelector('.b');
console.log(firstElement);
let firstElementAlt = document.querySelectorAll('.b')[0];
console.log(firstElementAlt);

//Aanmaken elementen
//Nieuw item aan lijst 2
let listItem = document.getElementById('list2');
let newItem = document.createElement('li');
newItem.classList.add('b');
let newText = document.createTextNode('item 2-4');
newItem.appendChild(newText);
/* Alternative 1
newItem.textContent = "item 2-4";
   Alternative 2
newItem.innerHTML = "item 2-4";   
*/
listItem.appendChild(newItem);
