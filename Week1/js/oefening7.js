// Define array
let names = ["Rune","Wouter", "Jan", "Yaron", "Jasper", "Iemand"];

//Amount of elements
document.write(names.length);

//Writing first, third and fifth element to screen
document.write("<br>" + names[0] + ", " + names[2] + ", " + names[4] + "<br><br>");

names.push("Jef");

for(i=0; i < names.length; i++) {
    document.write(names[i] + "<br>");
}