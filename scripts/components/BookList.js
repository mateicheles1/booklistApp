import {Book} from "../models/Book.js";
import {Author} from "../models/Author.js";
import {authorInput} from "../variables/variables.js";
import {titleInput} from "../variables/variables.js";

export class BookList {

    constructor(parentComponent) {
        this.parentComponent = parentComponent;
    }

    printList() {
        const row = this.createRow();
        this.parentComponent.appendChild(row);
        console.log(row);
        console.log(this.parentComponent);
        authorInput.value = '';
        titleInput.value = '';
    }

    createRow() {
        const row = document.createElement('tr');
        row.classList.add('table--row');
        row.appendChild(this.getTitleInput());
        row.appendChild(this.getAuthorInput());
        return row;
    }

    getTitleInput() {
        const el = new Book(titleInput.value);
        const title = el.createData();
        return title;
    }

    getAuthorInput() {
        const el = new Author(authorInput.value);
        const name = el.createData();
        return name;
    }
}