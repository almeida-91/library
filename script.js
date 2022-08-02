const bookcontainer = document.getElementById('bookcontainer');
const booklist = document.getElementById('booklist');
const newBook = document.getElementById('newBook');

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
    refreshLibrary();
}

addBookToLibrary('The Hobbit','JRR Tolkien',295,'No');
addBookToLibrary('HP','rowling',295,'Yes');
addBookToLibrary(`Troglo's thesis`,`Troglo Pedreira`,`Over 9000`,'IEC OFC');

function refreshLibrary(){
        let row = document.createElement('tr'); // create a row per book
        for ( j=0; j<6 ; j++){                  // add book keys to row cells
            let cell = document.createElement('td');
            if (j==0) cell.textContent = myLibrary[id].id;
            else if (j==1) cell.textContent = myLibrary[id].title;
            else if (j==2) cell.textContent = myLibrary[id].author;
            else if (j==3) cell.textContent = myLibrary[id].pages;
            else if (j==4) cell.textContent = myLibrary[id].read;
            else {
                    let delButton = document.createElement('button');
                    delButton.className = id;
                    delButton.textContent = 'Delete';
                    delButton.addEventListener(`click`,(e=id) => {
                        myLibrary.splice(e,1);
                        id--;
                        row.innerHTML = '';
                    });
                    cell.appendChild(delButton);
            }
            row.appendChild(cell);
        }
        booklist.appendChild(row);
        id++;
}

newBook.addEventListener(`click`, ()=>{
    let title = prompt("Title :","");
    let author = prompt("Author:","");
    let pages = prompt("Number of pages:","");
    let read = prompt("Was this book read: (Yes/No)");
    addBookToLibrary(title,author,pages,read);
});

/* function delBook(bookid){
    myLibrary.splice(bookid,1);
} */