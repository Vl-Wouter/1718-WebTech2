/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-15T11:40:20+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: index.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-15T14:09:25+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */

let found = document.getElementById('found');

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

let boxes = Array.from(document.getElementsByClassName('memory-block'));

//console.log(boxes);

let usedImg = [];
for(let i = 0; i < 8; i++) {
  let index = Math.floor(Math.random()*imageArray.length);
  usedImg.push({img: imageArray[index], times: 2});
}
console.log(usedImg);

for(let i = 0; i < boxes.length; i++) {
  let index = Math.floor(Math.random() * usedImg.length);
  while(usedImg[index].times > 0) {
    boxes[i].innerHTML = "<img src=\"" + usedImg[index].img + "\">";
    usedImg[index].times--;
  }
}

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
