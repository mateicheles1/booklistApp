import {bookList} from "./variables/variables.js";
import {button} from "./variables/variables.js";
import {BookList} from "./components/BookList.js"
import {prepend} from './variables/variables.js';

// prepend.innerHTML = 'Both fields required!';

function addElements(e) {
    e.preventDefault();
    const list = new BookList(bookList);
    list.printList();
}

button.addEventListener('click', addElements);