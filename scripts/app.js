import { authorInput, bookList, titleInput, prepend, table, button } from "./variables/variables.js";
import { BookList } from "./components/BookList.js"

const list = new BookList(bookList);
prepend.style.display = 'none';

button.addEventListener('click', addElements);
table.addEventListener('click', removeElements);

function addElements(e) {
    e.preventDefault();
    list.printList();
    notice();
}

function removeElements(e) {
    list.removeRow(e);
}

function notice() {
    if(authorInput.value && titleInput.value) return;
    if(authorInput.value) {
        prepend.style.display = 'block';
        prepend.textContent = 'Title required!';
        setTimeout(removePrepend, 3000);
    }
    if(titleInput.value) {
        prepend.style.display = 'block';
        prepend.textContent = 'Author required!';
        setTimeout(removePrepend, 3000);
    }


}

function removePrepend() {
    prepend.style.display = 'none';
    prepend.textContent = '';

}



