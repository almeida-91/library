const bookcontainer = document.getElementById('bookcontainer');

let myLibrary = [];
let id=0;

function book(id,title,author, pages, read){
    this.id = id
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(title,author,pages,read) {
    const newBook = new book(id,title, author,pages,read);
    console.log(newBook);
    myLibrary.push(newBook);
    id++;
}

addBookToLibrary('The Hobbit','JRR Tolkien',295,'No');
addBookToLibrary('HP','rowling',295,'Yes');

for (i=0 ; i<id ; i++){
    bookcontainer.textContent += myLibrary[i].id +' '+ myLibrary[i].title + ' ' + myLibrary[i].author + ' ' + myLibrary[i].pages + ' ' + myLibrary[i].read;
    bookcontainer.createElement('p');
}