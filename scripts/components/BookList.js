import {Book} from "../models/Book.js";
import {Author} from "../models/Author.js";
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
        row.appendChild(this.getTitleInput());
        row.appendChild(this.getAuthorInput());
        row.appendChild(this.getRemoveButton());
        return row;
    }

    getTitleInput() {
        const el = new Book(titleInput);
        const title = el.createData();
        return title;
    }

    getAuthorInput() {
        const el = new Author(authorInput);
        const name = el.createData();
        return name;
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
}