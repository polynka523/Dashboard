export class Modal {
    modalContainer;
    closeBtn;
    modalFrame;
    constructor() {
        this.modalContainer = document.createElement('div');
        this.modalContainer.className = 'modal-overlay';
        this.modalFrame = document.createElement('div');
        this.modalFrame.className = 'modal-container';
        this.closeBtn = document.createElement('button');
        this.closeBtn.className = 'close-btn';
        this.closeBtn.innerHTML = `
            <span class="material-symbols-outlined">close</span>
        `;
        this.modalFrame.appendChild(this.closeBtn);
        this.modalContainer.appendChild(this.modalFrame);
        this.setupEventListener();
    }

    setupEventListener() {
        this.closeBtn.addEventListener('click',() =>{
            
            document.querySelector('.modal-overlay').remove();
            
        });
    }
}