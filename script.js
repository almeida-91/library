const bookcontainer = document.getElementById('bookcontainer');
const booklist = document.getElementById('booklist');
const newBook = document.getElementById('newBook');
const addBook = document.getElementById('createBook');
const input = document.querySelectorAll('input');
const delButtonList = document.getElementsByClassName('delButton');

let myLibrary = []; 
let id=0;

class book{
constructor (title,author, pages, read){
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
    myLibrary.push(this);
    this.refreshLibrary();
    }

    toggle(){
        if (this.read==`Yes`) this.read = 'No';
        else this.read = 'Yes';
        this.refreshLibrary();
    }

    deleteBook(id){
        myLibrary.splice(id, 1);
        this.refreshLibrary();
    }

    changeRead(index){
        if (myLibrary[index].read == 'No') myLibrary[index].read = 'Yes';
        else myLibrary[index].read = 'No';
        this.refreshLibrary();
    }

    refreshLibrary(){
        booklist.innerHTML = "";
        let id = 0;
        for (let i=0 ; i < myLibrary.length ; i++){
            let row = document.createElement('tr');
            for (let j=0 ; j < 7 ; j++){
                let cell = document.createElement('td');
                if (j==0) cell.textContent = id;
                else if (j==1) cell.textContent = myLibrary[i].title;
                else if (j==2) cell.textContent = myLibrary[i].author;
                else if (j==3) cell.textContent = myLibrary[i].pages;
                else if (j==4) cell.textContent = myLibrary[i].read;
                else if (j==5) {
                    let delBook = document.createElement('button');
                    delBook.className = `delButton`;
                    delBook.textContent = `Delete`;
                    delBook.setAttribute('name',i);
                    cell.appendChild(delBook);
                    delBook.onclick = function (){myLibrary[delBook.getAttribute('name')].deleteBook(delBook.getAttribute('name'))};
                }
                else if (j==6) {
                    let change = document.createElement('button');
                    change.className = 'statusButton';
                    change.textContent = 'Change';
                    change.setAttribute('name',i);
                    change.onclick = function(){
                        myLibrary[Number(change.getAttribute('name'))].toggle();
                    }
                    cell.appendChild(change);  
                }
                row.appendChild(cell);
            }
            id++;
            booklist.appendChild(row);
        }
    }
}

new book('The Hobbit','JRR Tolkien',295,'No');
new book('HP','rowling',295,'Yes');
new book(`Troglo's thesis`,`Troglo Pedreira`,`9000`,'Yes');



const newBookForm = document.getElementById(`newBookForm`);

newBook.addEventListener(`click`, ()=>{
    if (newBookForm.style.display === 'none')
        newBookForm.style.display = 'block';
    else newBookForm.style.display = 'none';
});

addBook.addEventListener('click', function(){
   new book(input[0].value,input[1].value,input[2].value,input[3].value);
});

function updateChangeButtons(){
    const changeButtonList = document.getElementsByClassName('statusButton');
    if ( changeButtonList.length == 0 ) return;
    else {
        for(i=0;i<changeButtonList.length;i++){
            changeButtonList[i].addEventListener('click', function(i){
                changeRead(i);                
            }.bind(null,i));
        }
    };
    console.log(changeButtonList);
}

