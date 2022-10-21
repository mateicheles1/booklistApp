import {Book} from "../models/Book.js";
import {authorInput} from "../variables/variables.js";
import {titleInput} from "../variables/variables.js";
import {Button} from "../components/Button.js";
// import {form} from "../variables/variables.js";
export class BookList {

    constructor(parentComponent) {
        this.parentComponent = parentComponent;
    }

    printList() {
        if(!authorInput.value || !titleInput.value) return;
        const row = this.createRow();
        this.parentComponent.appendChild(row);
        authorInput.value = '';
        titleInput.value = '';
    }
    
    createRow() {
        const row = document.createElement('tr');
        row.classList.add('table--row');
        row.appendChild(this.getTitle());
        row.appendChild(this.getAuthor());
        row.appendChild(this.getRemoveButton());
        return row;
    }

    getTitle() {
        const el = new Book(titleInput, authorInput);
        const title = el.createTitleData();
        return title;
    }

    getAuthor() {
        const el = new Book(titleInput, authorInput);
        const author = el.createAuthorData();
        return author;
    }

    getRemoveButton() {
        const el = new Button();
        const button = el.createTableData();
        return button;
    }

    removeRow(el) {
        if(!el.target.classList.contains('remove--button')) return;
        el.target.closest('.table--row').remove();
    }

    dataToLocalStorage(obj) {
       localStorage.setItem('book', JSON.stringify(obj));
    }
}