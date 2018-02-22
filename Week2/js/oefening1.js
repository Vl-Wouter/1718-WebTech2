
function result() {
    let number = document.getElementById("thenumber");
    number = parseInt(number);
    console.log("Number = " + number);
    let oddEven;
    if(number % 2 == 0) {
        oddEven = "even";
    }
    else {
        oddEven = "odd";
    }
    
    console.log("Test = " + oddEven);
    
    const res = "The number you wrote is " + oddEven + ".";
    document.getElementById('oddOrEven').innerHTML = res;
}