import { GridStack } from "gridstack";

import { ChartModal } from "../ui/ChartModal";


export class Dashboard {
    data;
    widgets;
    dataSources;
    grid;
    constructor() {
        this.grid = GridStack.init({ 
            column: 3,        
            cellHeight: 400,  
            margin: 10,        

            
            float: false
        });
                    
    }
    initBoard(widgets) {
        this.widgets = widgets;
        this.widgets.forEach(element => {
            // const newChart = new ChartWidget(`${element}`);
            element.createChart([], [],'Какие-то данные', widgets,this.grid);
            console.log(element.container)
            
            this.grid.makeWidget(element.container);

        });

        
        
    }

    loadBoard() {
        this.widgets.forEach(element => {
            
            element.createChart(this.data.labels, this.data.data,'Какие-то данные',this.widgets,this.grid);
            
            
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