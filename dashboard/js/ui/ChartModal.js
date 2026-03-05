import { Modal } from "./Modal";
import { Chart } from "chart.js";
export class ChartModal extends Modal {

    closeBtn;
    sourceSelect;
    submitBtn;
    dataSources;
    target;
    constructor(target, dataSources) {
        super();
        this.target = target;
        this.dataSources = dataSources;
        this.modalContainer.innerHTML = `
            <div class="chart-settings">
                <button id = "close-button-chart" class = "close-btn">
                    <span class="material-symbols-outlined">
                    close
                    </span>
                </button>
                <h1>Выберите источник</h1>
                <select name="Источники данных" id="source-select" class="source-slct">
                    <option value="" disabled selected>Выберите источник</option>

                </select>

                <button id="chart-submit" class="submit-btn">Применить</button>
            </div>

        `;
        document.getElementById('app').appendChild(this.modalContainer);
        this.closeBtn = document.getElementById('close-button-chart');
        this.sourceSelect = document.getElementById('source-select');
        this.submitBtn = document.getElementById('chart-submit');
        this.addOptions();
        this.setupEventListeners();

    }

    setupEventListeners() {
        
        this.closeBtn.addEventListener('click',() =>{
            
            document.querySelector('.modal-overlay').remove();
            
        });
        
        this.submitBtn.addEventListener('click', async() => {
            const response = await fetch(this.sourceSelect.value);
        
            const data = await response.json();
            
            console.log(data);
            const chart = Chart.getChart(this.target);
            if (chart) {    
                chart.data.datasets[0].data = data.data; 
                chart.data.labels = data.labels;
                chart.update();
            }

            document.querySelector('.modal-overlay').remove();
        });


    }
    
    addOptions() {
        console.log(this.dataSources)
        this.dataSources.forEach((element) => {
            const option = document.createElement('option');
            option.text = element;
            this.sourceSelect.appendChild(option);
        });
    }
}