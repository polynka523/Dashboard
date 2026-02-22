import { ChartWidget } from "./widgets/ChartWidget";
import { Modal } from "./ui/Modal";
// const chart1 = createLineChart(['Янв', 'Фев', 'Мар'], [10, 20, 15]);
// document.getElementById('cnt').appendChild(chart1);
const queue = [];
// document.getElementById('add-btn').addEventListener('click', () => {
//     const newChart = new ChartWidget('pie');
//     newChart.createChart(['Янв', 'Фев', 'Мар'], [10, 20, 15],'Какие-то данные');
//     document.getElementById('cnt').appendChild(newChart.container);
// });
// document.getElementById('remove-btn').addEventListener('click', () => {
//     const charts = document.querySelectorAll('.chart-container');
//     if (charts.length > 0) {
//         charts[charts.length - 1].remove();
//     }
// });
document.getElementById('create-board').addEventListener('click',() => {
    const modal = new Modal(queue);
});

