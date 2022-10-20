
export class Author {
    constructor(name) {
        this.name = name;
    }

    createData() {
        const el = document.createElement('td');
        el.classList.add('author--data');
        el.textContent = this.name;
        return el;
    }
}