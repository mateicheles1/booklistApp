import {bookList} from "./variables/variables.js";
import {button} from "./variables/variables.js";
import {BookList} from "./components/BookList.js"
import {table} from "./variables/variables.js"

const list = new BookList(bookList);

button.addEventListener('click', addElements);
table.addEventListener('click', removeElements);

function addElements(e) {
    e.preventDefault();
    list.printList();
    list.saveLocalStorage();
}

function removeElements(e) {
    list.removeRow(e);
}

