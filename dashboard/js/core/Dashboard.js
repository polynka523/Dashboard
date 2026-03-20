import { GridStack } from "gridstack";
import { ChartModal } from "../ui/ChartModal";
import { ChartWidget } from "../widgets/ChartWidget";

export class Dashboard {
    data;
    widgets;
    dataSources;
    grid;
    constructor() {
        // this.grid = GridStack.init();
        
    }
    initBoard(widgets) {
        this.widgets = widgets;
        this.widgets.forEach(element => {
            // const newChart = new ChartWidget(`${element}`);
            element.createChart([], [],'Какие-то данные', widgets);
            console.log(element.container)
            // const widget = this.grid.addWidget({
            //     x: 0, y: 0, w: 4, h: 3
            // }).appendChild(element.container);

        });

        
        
    }

    loadBoard() {
        const charts = document.querySelectorAll('.chart-container');
            charts.forEach(element =>{
                
                element.remove();
        });
        this.widgets.forEach(element => {
            
            element.createChart(this.data.labels, this.data.data,'Какие-то данные',this.widgets);
            
            
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