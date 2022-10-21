import {authorInput, bookList, titleInput} from "./variables/variables.js";
import {button} from "./variables/variables.js";
import {BookList} from "./components/BookList.js"
import {table} from "./variables/variables.js"
import {Book} from "./models/Book.js"

const list = new BookList(bookList);

button.addEventListener('click', addElements);
table.addEventListener('click', removeElements);

function addElements(e) {
    e.preventDefault();
    list.printList();
}

function removeElements(e) {
    list.removeRow(e);
}

