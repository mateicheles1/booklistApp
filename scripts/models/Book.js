
export class Book {
    constructor(title) {
        this.title = title;
    }

    createData() {
        const el = document.createElement('td');
        el.classList.add('title--data');
        el.textContent = this.title;
        return el;
    }
}