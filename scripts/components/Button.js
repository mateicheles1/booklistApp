export class Button {
    constructor() {
    }
    
    createTableData() {
        const data = document.createElement('td');
        data.classList.add('btn--data');
        const button = this.createButton();
        data.appendChild(button);
        return data;

    }

    createButton() {
       const el =  document.createElement('button');
       el.classList.add('remove--button');
       el.textContent = 'X';
       return el;
    }
}