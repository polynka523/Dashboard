import { ChartWidget } from "../widgets/ChartWidget";
import { Modal } from "./Modal";
export class DashboardModal extends Modal {
    
    closeBtn;
    linearBtn;
    pieBtn;
    barBtn;
    generateBtn;
    widgetsQueue;
    dashboard;

    constructor(dashboard) {
        super();
        this.widgetsQueue = [];
        
        
        this.modalContainer.innerHTML = `
            
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
        document.getElementById('app').appendChild(this.modalContainer);
        this.closeBtn = document.getElementById('close-button');
        console.log(this.closeBtn)
        this.barBtn = document.getElementById('bar-add');
        this.pieBtn = document.getElementById('pie-add');
        this.linearBtn = document.getElementById('linear-add');
        this.generateBtn = document.getElementById('generate');
        this.dashboard = dashboard;
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
            this.widgetsQueue.push(new ChartWidget('bar'));
        });
        this.linearBtn.addEventListener('click',()=>{
            const line = document.createElement('div');
            line.innerHTML = 'Line';
            line.className = 'element';
            document.querySelector('#settings-cnt').appendChild(line);
            this.widgetsQueue.push(new ChartWidget('line'));
        });
        this.pieBtn.addEventListener('click',()=>{
            const pie = document.createElement('div');
            pie.innerHTML = 'Pie';
            pie.className = 'element';
            document.querySelector('#settings-cnt').appendChild(pie);
            this.widgetsQueue.push(new ChartWidget('pie'));
        });
        this.generateBtn.addEventListener('click',() =>{
            // const charts = document.querySelectorAll('.chart-container');
            // charts.forEach(element =>{
                
            //     element.remove();
            // });
            
            console.log(...this.widgetsQueue);
            this.dashboard.initBoard(this.widgetsQueue);
                        
            document.querySelector('.modal-overlay').remove();
        });

    }

    



}