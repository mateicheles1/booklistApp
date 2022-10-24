import {Book} from "../models/Book.js";
import {authorInput} from "../variables/variables.js";
import {titleInput} from "../variables/variables.js";
import {Button} from "../components/Button.js";
// import {form} from "../variables/variables.js";
export class BookList {
    books = [];

    constructor(parentComponent) {
        this.parentComponent = parentComponent;
    }

    printList() {
        if(!authorInput.value || !titleInput.value) return;
        const row = this.createRow();
        this.books.push(this.getTitle().textContent);
        this.books.push(this.getAuthor().textContent);
        console.log(this.books);
        this.dataToLocalStorage();
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
        // row.appendChild(this.getFavBtn());
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

    getFavBtn() {
        const el = new Button();
        const button = el.createFavouriteButton();
        return button;
    }

    removeRow(e) {
        if(!e.target.classList.contains('remove--button')) return;
        e.target.closest('.table--row').remove();
    }

    dataToLocalStorage() {
        localStorage.setItem('book', JSON.stringify(this.books));
    }

    dataFromLocalStorage() {
        const data = JSON.parse(localStorage.getItem('book'));
        console.log(data);
    }


}