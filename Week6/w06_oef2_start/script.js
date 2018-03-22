/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-22T11:01:33+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: script.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-22T11:59:48+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */

 // Declaratie van lijst
 let recipeOverview = document.getElementById('recipes');

 // functie expressie om JSON-request via url uit te voeren
 const getJSON = function(url, callback) {
     var xhr = new XMLHttpRequest();
     xhr.open('GET', url, true);
     xhr.responseType = 'json';
     xhr.onload = function() {
       var status = xhr.status;
       if (status === 200) {
         callback(null, xhr.response);
       } else {
         callback(status, xhr.response);
       }
     };
     xhr.send();
 };

 // get json data
 getJSON('https://evelienrutsaert.github.io/recourses/recipes.json', function(error, data) {
     // show error
     if(error) {
         // do something here
         
         return false;
     }
     for(let i = 0; i < data.length; i++) {

       let recipe = data[i];
       // Aanmaken van col-4 div
       let col = document.createElement('div');
       col.classList.add('col-4');
       //Toevoegen aan pagina
       recipeOverview.appendChild(col);

       //Aanmaken van card
       let card = document.createElement('div');
       card.classList.add('card');
       //Toevoegen aan col-4
       col.appendChild(card);

       //Aanmaken img card-top
       let img = document.createElement('img');
       img.src= recipe.image;
       img.classList.add('card-img-top');
       //Toevoegen aan card
       card.appendChild(img);

       //Aanmaken card-block
       let block = document.createElement('div');
       block.classList.add('card-block');
       //Toevoegen aan card
       card.appendChild(block);

       //Aanmaken titel recept
       let title = document.createElement('h4');
       title.classList.add('card-title');
       //Aanmaken TextNode voor Titel
       let titleContent = document.createTextNode(recipe.name);
       //Toevoegen text aan Titel
       title.appendChild(titleContent);
       //Toevoegen titel aan block
       block.appendChild(title);

       //Aanmaken ingredienten
       let ingredientDiv = document.createElement('div');
       ingredientDiv.classList.add('card-ingredients');
       //Toevoegen div aan block
       block.appendChild(ingredientDiv);

       //Aanmaken ingrediententext
       let titleSpan = document.createElement('span');
       titleSpan.classList.add('text-bold');
       //Aanmaken Titel
       let ingredientTitle  = document.createTextNode('Ingrediënten: ');
       //Toevoegen text aan titleSpan
       titleSpan.appendChild(ingredientTitle);
       //Toevoegen span aan ingredientDiv
       ingredientDiv.appendChild(titleSpan);

       for(let i = 0; i < recipe.ingredients.length; i++){
         if(i == 0) {
           ingredientDiv.innerHTML += '<br>';
         }
         ingredientDiv.innerHTML += recipe.ingredients[i]
         if(i < (recipe.ingredients.length - 1)) {
           ingredientDiv.innerHTML += ', '
         }
       }

       //Aanmaken card-text div
       let bereiding = document.createElement('div');
       bereiding.classList.add('card-text');
       //Toevoegen div aan block
       block.appendChild(bereiding);

       //Aanmaken span voor Bereidingswijze
       let berSpan = document.createElement('span');
       berSpan.classList.add('text-bold');
       //Aanmaken text
       let berTitle = document.createTextNode('Bereidingswijze: ');
       //Toevoegen aan berSpan
       berSpan.appendChild(berTitle);
       bereiding.appendChild(berSpan);
       //Toevoegen text voor Bereidingswijze
       let berP = document.createElement('p');
       //Aanmaken TextNode
       let berTxt = document.createTextNode(recipe.directions);
       //Samenvoegen
       berP.appendChild(berTxt);
       //Toevoegen aan bereiding
       bereiding.appendChild(berP);


     }
 });
