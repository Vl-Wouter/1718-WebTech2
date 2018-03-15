/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-15T11:06:08+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: oefening3.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-15T11:37:24+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */
let dog = {
  breed: "Husky",
  name: "Storm",
  color: "white/black",
  age: "3",
  gender: "Male",
}

function Dog(breed, name, color, age, gender, eyecolor) {
  this.breed = breed;
  this.name = name;
  this.color = color;
  this.age = age;
  this.gender = gender;
  this.birthyear = function() {
    return parseInt(2018-this.age);
  }
  this.bestToyEver = "rode bal"
}

let bestDog = new Dog("bearded collie", "Samson", "Grijs en wit", 27, "m");

let write = document.getElementById('hondDetail');

write.innerHTML = bestDog.breed + "<br>" + bestDog.name + "<br>" + bestDog.color + "<br>" + bestDog.age + "<br>" + bestDog.gender;

console.log(bestDog.birthyear());
console.log(bestDog.bestToyEver);

bestDog.name = "Bobientje";
console.log(bestDog.name);

bestDog.speak = function(line) {
  return "De " + this.breed + " hond zegt: \"" + line + "\"";
};

console.log(bestDog.speak('Er klopt iemand op de deur'));
