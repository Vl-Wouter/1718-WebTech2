let number = document.getElementById("thenumber");
let OddEven;
if(number % 2 == 0) {
    OddEven = "Even";
}

else {
    OddEven = "Odd";
}

function result() {
    const res = "The number you wrote is " + OddEven;
    document.getElementById('oddOrEven').innerHTML = res;
}