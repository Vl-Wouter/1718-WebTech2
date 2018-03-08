/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-08T11:02:08+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: main.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-08T13:29:54+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */

function addBrick(number) {
  let brick = document.createElement('div');
  let brickClass;
  let wall;
  switch(number) {
    case 0:
      brickClass = 'brick brick-yellow';
      brick.className = brickClass;
      wall = document.getElementById('wall-1');
      break;
    case 1:
      brickClass = 'brick brick-black';
      brick.className = brickClass;
      wall = document.getElementById('wall-2');
      break;
    case 2:
      brickClass = 'brick brick-orange';
      brick.className = brickClass;
      wall = document.getElementById('wall-3');
      break;
    case 3:
      brickClass = 'brick brick-blue';
      brick.className = brickClass;
      wall = document.getElementById('wall-4');
      break;
  }
  wall.appendChild(brick);
}

function removeBrick(number) {
  let bricks;
  switch(number) {
    case 0:
      bricks = document.querySelectorAll('#wall-1 div');
      console.log(bricks);
      if(bricks.length == 0) {
        alert('De muur is volledig gesloopt.');
      }
      else {
        bricks[0].parentNode.removeChild(bricks[0]);
      }
      console.log(bricks.length);

      break;
    case 1:
      bricks = document.querySelectorAll('#wall-2 div');
      console.log(bricks);
      if(bricks.length == 0) {
        alert('De muur is volledig gesloopt.');
      }
      else {
        bricks[0].parentNode.removeChild(bricks[0]);
      }
      break;
    case 2:
      bricks = document.querySelectorAll('#wall-3 div');
      console.log(bricks);
      if(bricks.length == 0) {
        alert('De muur is volledig gesloopt.');
      }
      else {
        bricks[0].parentNode.removeChild(bricks[0]);
      }
      break;
    case 3:
      bricks = document.querySelectorAll('#wall-4 div');
      console.log(bricks);
      if(bricks.length == 0) {
        alert('De muur is volledig gesloopt.');
      }
      else {
        bricks[0].parentNode.removeChild(bricks[0]);
      }
      break;
  }
}

let calculate = function() {
  let muur1 = document.querySelectorAll('#wall-1 div').length;
  let muur2 = document.querySelectorAll('#wall-2 div').length;
  let muur3 = document.querySelectorAll('#wall-3 div').length;
  let muur4 = document.querySelectorAll('#wall-4 div').length;
  console.log(muur1 + ', ' + muur2 + ', ' + muur3 + ', ' + muur4);

  document.getElementById('wall-1-amountstones').innerHTML = muur1 + ' stenen';
  document.getElementById('wall-2-amountstones').innerHTML = muur2 + ' stenen';
  document.getElementById('wall-3-amountstones').innerHTML = muur3 + ' stenen';
  document.getElementById('wall-4-amountstones').innerHTML = muur4 + ' stenen';

  let max = Math.max(muur1, muur2, muur3, muur4);
  console.log(max);
  let grootste;
  switch(true) {
    case (muur1 == max):
      grootste = "Muur 1";
      break;
    case (muur2 == max):
      grootste = "Muur 2";
      break;
    case (muur3 == max):
      grootste = "Muur 3";
      break;
    case (muur4 == max):
      grootste = "Muur 4";
      break;
    default:
      grootste = "Meerdere muren zijn even groot.";
  }
  document.getElementById('wall-biggest').innerHTML = grootste;
  let min = Math.min(muur1, muur2, muur3, muur4);
  let kleinste;
  switch(true) {
    case (muur1 == min):
      kleinste = "Muur 1";
      break;
    case (muur2 == min):
      kleinste = "Muur 2";
      break;
    case (muur3 == min):
      kleinste = "Muur 3";
      break;
    case (muur4 == min):
      kleinste = "Muur 4";
      break;
    default:
      kleinste = "Meerdere muren zijn even klein.";
    }
    document.getElementById('wall-smallest').innerHTML = kleinste;

    let costyellow, costblack, costorange, costblue;

    costyellow = 2*muur1;
    costblack = 7.5*muur2;
    costorange = 9*muur3;
    costblue = 0.30*muur4;

    document.getElementById('cost-yellow').innerHTML = '€ ' + costyellow.toFixed(2);
    document.getElementById('cost-black').innerHTML = '€ ' + costblack.toFixed(2);
    document.getElementById('cost-orange').innerHTML = '€ ' + costorange.toFixed(2);
    document.getElementById('cost-blue').innerHTML = '€ ' + costblue.toFixed(2);

    let total = parseInt(costyellow + costblack + costorange + costblue);
    document.getElementById('cost-total').innerHTML = '€ ' + total.toFixed(2);

}

// Event Listeners
let btns = document.getElementsByClassName('add-brick');
for(let i = 0; i < btns.length; i++ ) {
  btns[i].addEventListener('click', function() {addBrick(i);});
}

let rmvbtn = document.getElementsByClassName('remove-brick');
for(let i = 0; i < rmvbtn.length; i++) {
  rmvbtn[i].addEventListener('click', function() {removeBrick(i);});
}

document.getElementById('btnCalculate').addEventListener('click', calculate);
