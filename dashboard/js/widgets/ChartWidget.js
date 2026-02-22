import   { Chart } from "chart.js/auto";
import {Widget} from "./BaseWidget";
// export function createLineChart(labels, data, label = 'Значения') {
//     const container = document.createElement('div');
//     container.className = 'chart-container';
    
//     const canvas = document.createElement('canvas');
//     container.appendChild(canvas);
    
//     new Chart(canvas, {
//         type: 'line',
//         data: {
//             labels: labels,
//             datasets: [{
//                 label: label,
//                 data: data,
//                 borderColor: 'rgb(75, 192, 192)',
//                 backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                 tension: 0.1
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false
//         }
//     });
    
//     return container;
// }



export class ChartWidget extends Widget {
    type;
    #data;
    canvas;
    constructor(type, /*data*/) {
        super();
        this.canvas = document.createElement('canvas');
        this.canvas.style.maxHeight = '400px';
        this.container.appendChild(this.canvas);
        this.container.classList.add('chart-container');
        this.type = type;
        // this.data = data;
    }


    createChart(labels, data, label = 'Значения') {
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
        
    }
    
}
