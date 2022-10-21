
export class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    createAuthorData() {
        const el = document.createElement('td');
        el.classList.add('author--data');
        el.textContent = this.author.value;
        return el;
    }

    createTitleData() {
        const el = document.createElement('td');
        el.classList.add('title--data');
        el.textContent = this.title.value;
        return el;
    }
}