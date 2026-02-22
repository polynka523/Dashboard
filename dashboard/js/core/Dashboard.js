import { ChartWidget } from "../widgets/ChartWidget";

export class Dashboard {
    constructor(widgets) {
    widgets.forEach(element => {
           const newChart = new ChartWidget(`${element}`);
               newChart.createChart(['Янв', 'Фев', 'Мар'], [10, 20, 15],'Какие-то данные');
               document.getElementById('cnt').appendChild(newChart.container); 
        });
    }
}