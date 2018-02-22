let number = document.getElementById("thenumber");
console.log("Number = " + number);
let oddEven;
if(number % 2 == 0) {
    oddEven = "Even";
}

else {
    oddEven = "Odd";
}

console.log("Test = " + oddEven);

function result() {
    const res = "The number you wrote is " + OddEven;
    document.getElementById('oddOrEven').innerHTML = res;
}