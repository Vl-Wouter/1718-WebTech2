/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-22T13:04:47+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: script.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-22T13:53:40+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */


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

//getJSON('URL', function(error, data){})

let getBook = function() {
  let isbn = document.getElementById('isbnSearchInput').value;
  let url = 'https://www.booknomads.com/api/v0/isbn/'+ isbn;
  console.log(isbn);
  console.log(url);
  getJSON(url, function(error, data){
    if(error) {
      //magic
      return false;
    }

    let book = data;

    //Vervangen van foto
    let bookPhoto = document.getElementById('bookImage');
    bookPhoto.src = (book.CoverThumb);

    //Vervangen van Titel
    let bookTitle = document.getElementById('bookTitle');
    bookTitle.innerHTML = book.Title;

    //Vervangen van korte inhoud
    let bookDesc = document.getElementById('bookDescription');
    bookDesc.innerHTML = book.Description;

    //Vervangen van isbn
    let bookISBN = document.getElementById('bookIsbn');
    bookISBN.innerHTML = book.ISBN;

    //vervangen van Auteur
    let bookAuthor = document.getElementById('bookAuthor');
    bookAuthor.innerHTML = "";
    for(let i = 0; i < book.Authors.length; i++) {
      bookAuthor.innerHTML += book.Authors[i].Name + ' ';
    }
  });

}

//Event listeners
document.getElementById('btnSearchBook').addEventListener('click', getBook);
