/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-15T11:40:20+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: index.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 15-03-2018
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */

let found = document.getElementById('found');
let boxes = Array.from(document.getElementsByClassName('memory-block'));
let imageArray = [
  "img/cuddles.png",
  "img/discobear.jpg",
  "img/giggles.png",
  "img/handy.png",
  "img/mime.png",
  "img/monkey.png",
  "img/nutty.png",
  "img/pop.png",
  "img/russell.png",
  "img/themole.png"
];

let pairArray = [];

let checking = {};

function code(index) {
  console.log(imageArray[index]);
  console.log(checking);
}

function randomizer() {
  for(let i = 0; i < boxes.length; i++) {
    let index = Math.floor(Math.random()*pairArray.length);

    if(checking[pairArray[index]] != undefined) {
      if(checking[pairArray[index]].times != 2) {
        checking[pairArray[index]].times = checking[pairArray[index]].times + 1;
        code(index);
      }
    } else {
      checking[pairArray[index]] = {times: 1};
    }
    code(index);
  }
}

while(pairArray.length !== 8) {
  let index = Math.floor(Math.random()*imageArray.length);
  if(pairArray.indexOf(imageArray[index]) == -1) {
    pairArray.push(imageArray[index]);
  } else {

  }
}
randomizer();

console.log(pairArray);
console.log(imageArray);

let fullArray = [];
for(let i = 0; i < 2; i++) {
  for(let j = 0; j < pairArray.length; j++) {
    fullArray.push(pairArray[j]);
  }
}
console.log(fullArray);

for(let i = 0; i < boxes.length; i++) {
  let index = Math.floor(Math.random()*fullArray.length);
  boxes[i].innerHTML = "<img src=\"" + fullArray[index] + "\" >";
  fullArray.splice(index, 1);
}
//console.log(boxes);

/*for(let i = 0; i < 8; i++) {
  let index = Math.floor(Math.random()*imageArray.length);
  pairArray.push({img: imageArray[index], times: 2});
}
console.log(usedImg);

for(let i = 0; i < boxes.length; i++) {
  let index = Math.floor(Math.random() * usedImg.length);
  while(usedImg[index].times > 0) {
    boxes[i].innerHTML = "<img src=\"" + usedImg[index].img + "\">";
    usedImg[index].times--;
  }
}*/

let revealcount = 0;
let revealed = [];
let reveal = function() {
  this.style.opacity = 1;
  revealed.push(this);
  console.log(revealed);
  revealcount++;
  console.log(revealcount);
  if(revealcount == 2) {
    let pic1 = revealed[0].firstChild;
    let pic2 = revealed[1].firstChild;
    console.log("pic 1 = " + pic1.src);
    console.log("pic 2 = " + pic2.src);

    if(pic1.src == pic2.src) {
      found.innerHTML += "<img src=\"" + pic1.src + "\" style='width:64px; height:64px;'>";
      pic1.className = "memory-found";
      pic2.className = "memory-found";
      pic1.parentNode.removeEventListener('click', reveal);
      pic2.parentNode.removeEventListener('click', reveal);
      revealcount = 0;
      revealed = [];
    }
  }
  else if(revealcount > 2) {
    for(let i = 0; i < revealed.length; i++) {
      revealed[i].style.opacity = 0;
        }
      revealcount = 0;
  }
  else {
    setTimeout(function() {
      for(let i = 0; i < revealed.length; i++) {
        revealed[i].style.opacity = 0;
      }
      revealcount = 0;
      revealed = [];
    }, 2000);
  }
  let unfound = Array.from(document.getElementsByClassName('memory-block'));
  console.log(unfound);
  if(unfound.length == 0) {
    alert('Einde van spel');
  }
}

// Add EventListener
for(let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener('click', reveal);
}
