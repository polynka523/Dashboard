import { ChartModal } from "../ui/ChartModal";
import { ChartWidget } from "../widgets/ChartWidget";

export class Dashboard {
    data;
    widgets;
    dataSources;
    constructor() {
        
        
    }
    initBoard(widgets) {
        this.widgets = widgets;
        this.widgets.forEach(element => {
           const newChart = new ChartWidget(`${element}`);
               newChart.createChart([], [],'Какие-то данные');
               document.getElementById('cnt').appendChild(newChart.container); 
        });
    }

    loadBoard() {
        const charts = document.querySelectorAll('.chart-container');
            charts.forEach(element =>{
                
                element.remove();
        });
        this.widgets.forEach(element => {
           const newChart = new ChartWidget(`${element}`);
               newChart.createChart(this.data.labels, this.data.data,'Какие-то данные');
               document.getElementById('cnt').appendChild(newChart.container); 
        });
    }
    setupEventListener() {
        document.getElementById('cnt').addEventListener('dblclick',(event) =>{
            if(document.querySelectorAll('.modal-overlay').length === 0){
            console.log(this.dataSources)
            const chartModal = new ChartModal(event.target, this.dataSources);
            }
        });
    }
    
}