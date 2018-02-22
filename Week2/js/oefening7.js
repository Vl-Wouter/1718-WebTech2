let calculate = function() {
    const begin = parseInt(document.getElementById('begin').value);
    const eind = parseInt(document.getElementById('eind').value);

    for(let i = begin; i <= eind; i++) {
        let res= "";
        if(i % 3 === 0) {
            res += "bitter";
            if(i % 5 === 0) {
                res += "bal";
            }
        }
        else if(i % 5 === 0) {
            res += "bal";
        }
        else {
            res += i;
        }
        document.getElementById('result').innerHTML += res + "<br>";
    }
}

// Add event listener
document.getElementById('gobtn').addEventListener('click', calculate);