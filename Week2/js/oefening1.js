/**********************************
 * @author      Wouter Vlaeyen
 * @created     22/02/2018
 * @modified    22/02/2018
 * @copyright   Copyright © 2016-2017 Artevelde University College Ghent
 * @function    Week 2
 **********************************/

function result() {
    let number = document.getElementById('thenumber').value;
    number = parseInt(number);
    console.log("Number = " + number);
    let oddEven;
    if(isNaN(number)) {
        oddEven = "not a number"
    }
    else if(number % 2 == 0) {
        oddEven = "even";
    }
    else if(number % 2 != 0){
        oddEven = "odd";
    }
    
    console.log("Test = " + oddEven);
    
    const res = "The number you wrote is " + oddEven + ".";
    document.getElementById('oddOrEven').innerHTML = res;
}