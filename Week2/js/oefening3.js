let words = ["help ", "me ", "ffs"];

for(let i = 0; i < words.length; i++) {
    console.log(words[i]);
}

//let together = words[0] + words[1] + words[2];

let together = words[0];
for(let i = 1; i < words.length; i++) {
    together += words[i];
}

console.log(together);