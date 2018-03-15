/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-15T10:48:42+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: oefening1.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-15T10:53:03+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */

let recept = {
  naam: "Macaroni",
  porties: "4",
  ingredienten: [
    "Macaroni",
    "Kaas",
    "Hesp",
    "Saus"
  ]
};

console.log(recept.naam);
console.log(recept.porties);
for(let i = 0; i < recept.ingredienten.length; i++) {
  console.log(recept.ingredienten[i]);
}
