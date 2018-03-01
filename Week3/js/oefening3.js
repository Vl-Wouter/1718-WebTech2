/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-01T11:14:16+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: oefening3.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-01T13:04:01+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */


function createLandscape() {
  document.getElementById('mooiLand').innerHTML = "";
  let length = parseInt(Math.floor(Math.random()*20)+5);
  let type;

  for(let i = 0; i < length; i++) {
    if(i%2 == 0) {
      type = 'mountain';
    }
    else {
      type = 'flat';
    }
    console.log("Step " + i);
    if(type == 'mountain') {
      let mLength = parseInt(Math.floor(Math.random()*10)+1);
      console.log("mountain length = " + mLength);
      document.getElementById('mooiLand').innerHTML += drawMountain(mLength);
    }
    else {
      let fLength = parseInt(Math.floor(Math.random()*10)+1);
      console.log("flat length = " + fLength);
      document.getElementById('mooiLand').innerHTML += drawFlat(fLength);
    }
  }
    console.log("length = " + length);
}

//Draw mountain
function drawMountain(length) {
  let drawing = "";
  drawing += "/";
  for(let i = 0; i < length; i++) {
    drawing += "\'";
  }
  drawing += "\\";
  console.log(drawing);
  return drawing;
}
// Draw flat land
function drawFlat(length) {
  let drawing = "";
  for(let i = 0; i < length; i++) {
    drawing += "\_";
  }
  console.log(drawing);
  return drawing;
}

// Event listener?
document.getElementById('land').addEventListener('click', createLandscape);
