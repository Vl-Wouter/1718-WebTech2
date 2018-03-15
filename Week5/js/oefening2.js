/**
 * @Author: Wouter Vlaeyen
 * @Date:   2018-03-15T10:53:51+01:00
 * @Email:  woutvlae@student.arteveldehs.be
 * @Filename: oefening2.js
 * @Last modified by:   Wouter Vlaeyen
 * @Last modified time: 2018-03-15T11:04:52+01:00
 * @License: Apache 2.0
 * @Copyright: Copyright © 2017-2018 Artevelde University College Ghent
 */
let books = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
    alreadyRead: false
  },
  {
    title: 'De verschrikkelijke schoolmeester',
    author: 'Dolf Verroen',
    alreadyRead: true
  }
];

let booklength = books.length;
for(let i = 0; i < booklength; i++) {
  console.log(books[i].title);
  console.log(books[i].author);
  if(books[i].alreadyRead == true) {
    console.log("Je hebt het boek \"" + books[i].title + "\" door " + books[i].author + " al gelezen.");
  }
  else {
    console.log("Je moet het boek \"" + books[i].title + "\" door " + books[i].author + " nog steeds lezen.");
  }
}
