import   { Chart } from "chart.js/auto";
import {Widget} from "./BaseWidget";

export class ChartWidget extends Widget {
    type;
    data;
    canvas;
    constructor(type) {
        super();
        this.canvas = document.createElement('canvas');
        this.canvas.classList.add('chart-canvas');
        this.canvas.style.maxHeight = '400px';
        this.container.appendChild(this.canvas);
        this.container.classList.add('chart-container');
        this.type = type;
        
    }


    createChart(labels, data, label = 'Значения', widgets) {
        
       new Chart(this.canvas, {
        type: this.type,
        data: {
            labels: labels,
            datasets: [{
                label: label,
                data: data,
                borderColor: 'rgb(75, 192, 192)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
    console.log(this);
    document.getElementById('cnt').appendChild(this.container);
    this.setupEventListeners(widgets); 
    }

    
    
}
