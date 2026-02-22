import { Dashboard } from "../core/Dashboard";

export class Modal {
    settings;
    closeBtn;
    linearBtn;
    pieBtn;
    barBtn;
    generateBtn;
    widgetsQueue;

    constructor(queue) {
        this.widgetsQueue = queue;
        this.widgetsQueue = [];
        this.settings = document.createElement('div');
        this.settings.className = 'modal-overlay';
        
        this.settings.innerHTML = `
            
            <div class="modal-container">
                <button id = "close-button" class = "close-btn">
                    <span class="material-symbols-outlined">
                    close
                    </span>
                </button>
                <aside class="settings-buttons">
                    <button class="settings-btn" id = "linear-add">Линейный график</button>
                    <button class="settings-btn" id = "pie-add">Пай</button>
                    <button class="settings-btn" id = "bar-add">Бар</button>
                </aside>

                <div class="content" id="settings-cnt">
                    
                </div>
                <button class="generate-btn" id="generate">Создать доску</button>
            </div>
        `;
        document.getElementById('app').appendChild(this.settings);
        this.closeBtn = document.getElementById('close-button');
        console.log(this.closeBtn)
        this.barBtn = document.getElementById('bar-add');
        this.pieBtn = document.getElementById('pie-add');
        this.linearBtn = document.getElementById('linear-add');
        this.generateBtn = document.getElementById('generate');
        this.setupEventListeners();
    }

    setupEventListeners() {
        this.closeBtn.addEventListener('click',() =>{
            
            document.querySelector('.modal-overlay').remove();
            
        });

        this.barBtn.addEventListener('click',()=>{
            const bar = document.createElement('div');
            bar.innerHTML = 'Bar';
            bar.className = 'element';
            document.querySelector('#settings-cnt').appendChild(bar);
            this.widgetsQueue.push('bar');
        });
        this.linearBtn.addEventListener('click',()=>{
            const line = document.createElement('div');
            line.innerHTML = 'Line';
            line.className = 'element';
            document.querySelector('#settings-cnt').appendChild(line);
            this.widgetsQueue.push('line');
        });
        this.pieBtn.addEventListener('click',()=>{
            const pie = document.createElement('div');
            pie.innerHTML = 'Pie';
            pie.className = 'element';
            document.querySelector('#settings-cnt').appendChild(pie);
            this.widgetsQueue.push('pie');
        });
        this.generateBtn.addEventListener('click',() =>{
            const charts = document.querySelectorAll('.chart-container');
            charts.forEach(element =>{
                element.remove();
            });
            console.log(...this.widgetsQueue);
            new Dashboard(this.widgetsQueue);
            
            document.querySelector('.modal-overlay').remove();
        });

    }



}