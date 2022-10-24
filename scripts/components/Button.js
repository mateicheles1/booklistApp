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
       const el =  document.createElement('img');
       el.classList.add('remove--button');
       el.src = '../images/icons8-delete.svg'
       return el;
    }

    createFavouriteButton() {
        const el = document.createElement('img');
        el.classList.add('favourite--button');
        el.src = '../images/icons8-star-30.png';
        return el;
    }
}