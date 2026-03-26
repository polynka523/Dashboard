import { Chart } from "chart.js";
import { Dashboard } from "./core/Dashboard";
import { DashboardModal } from "./ui/DashboardModal";
import { DataModal } from "./ui/DataModal";




let data = null;
const savedDashboards = localStorage;
const dataSources = [];
let dashboard = new Dashboard();

export function init() {
    document.getElementById('create-board').addEventListener('click',() => {
        const modal = new DashboardModal(dashboard);
        console.log(modal);
    });

    document.getElementById('take-data').addEventListener('click', async () => {
        const response = await fetch("./test/data.json");
        
        data = await response.json();
        dashboard.data = data;
        console.log(data); 
        
        const canvases = document.querySelectorAll(".chart-canvas");
        
        canvases.forEach(element => {
            const chart = Chart.getChart(element);
            if (chart) {
                
                chart.data.datasets[0].data = data.data; 
                chart.data.labels = data.labels;
                chart.update();
            }
        });
    });

    document.getElementById('data-sources').addEventListener('click', () => {
        const modal = new DataModal(dataSources,dashboard);
        
        console.log(modal);
    });

    document.getElementById('save-board').addEventListener('click', () => {
        savedDashboards.setItem('dashboard',JSON.stringify(dashboard));
    });
    
    document.getElementById('load-board').addEventListener('click', () => {
        
        dashboard.data = JSON.parse(savedDashboards.getItem('dashboard')).data;
        dashboard.widgets = JSON.parse(savedDashboards.getItem('dashboard')).widgets;
        dashboard.loadBoard();
        console.log(dataSources)
    });

    document.getElementById('addCrt').addEventListener('click', () => {
        
    });
}



