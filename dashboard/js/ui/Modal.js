export class Modal {
    modalContainer;
    constructor() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal-overlay';
    }
}