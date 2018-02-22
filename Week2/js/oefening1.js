let number = parseInt(document.getElementById("thenumber").value);
console.log("Number = " + number);
let oddEven;
if(number % 2 == 0) {
    oddEven = "oven";
}

else {
    oddEven = "odd";
}

console.log("Test = " + oddEven);

function result() {
    const res = "The number you wrote is " + oddEven + ".";
    document.getElementById('oddOrEven').innerHTML = res;
}