import { Modal } from "./Modal";

export class DataModal extends Modal {
    dataSources;
    urlInput;
    addBtn;
    sourceList;
    closeBtn;
    dashboard;
    constructor(dataSources,dashboard) {
        super();
        this.dataSources = dataSources;
        this.dashboard = dashboard;
        this.modalContainer.innerHTML = `
        <div class="data-container">
            <button id = "close-button-data" class = "close-btn">
                    <span class="material-symbols-outlined">
                    close
                    </span>
            </button>
            <h1>Источники данных</h1>
            <input id = "source-input" type="text" placeholder="type url here">
            <button id="add-source">Добавить источник</button>
            <ol id = "sources-ol" class = "sources-list">

            </ol>
        </div>
        `;
        document.getElementById('app').appendChild(this.modalContainer);
        this.sourceList = document.getElementById('sources-ol');
        this.addBtn = document.getElementById('add-source');
        this.urlInput = document.getElementById('source-input');
        this.closeBtn = document.getElementById('close-button-data');
        this.renderOl();
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.addBtn.addEventListener('click', () => {
            if(this.urlInput.value.trim() === '') {
                alert('Невозможно добавить пустой источник');    
            }
            else {
                this.dataSources.push(this.urlInput.value);
                this.dashboard.dataSources = this.dataSources;
                this.dashboard.setupEventListener();
                console.log(this.dashboard.dataSources);
                this.urlInput.value = '';
                alert('Успешно доабвлено!');
                this.renderOl();
            }
            // this.dataSources.push(this.urlInput.value.trim());
            // console.log(this.urlInput.value.trim());
            // this.renderOl();
        });
        this.closeBtn.addEventListener('click',() =>{
            
            document.querySelector('.modal-overlay').remove();
            
        });


    }
    renderOl() {
        this.sourceList.innerHTML = "";
        this.dataSources.forEach(element => {
            const li = document.createElement('li');
            li.textContent = element;
            this.sourceList.appendChild(li);
        });
    }


}