export class Button {
    constructor() {
    }
    
    createTableData() {
        const data = document.createElement('td');
        data.classList.add('btn--data');
        const button = this.createRemoveButton();
        data.appendChild(button);
        return data;

    }

    createRemoveButton() {
       const el =  document.createElement('button');
       el.classList.add('remove--button');
       el.textContent = 'X';
       return el;
    }
}