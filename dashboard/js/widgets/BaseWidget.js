export class Widget {
    
    
    container;
    deleteBtn;
    minimBtn;
    constructor(){
        
        
        this.container = document.createElement('div');
        this.deleteBtn = document.createElement('button');
        
        this.deleteBtn.innerHTML = `
        
        <span class="material-symbols-outlined">delete</span>
        
        `;
        this.deleteBtn.className = "delete-btn";

        this.minimBtn = document.createElement('button');
        this.minimBtn.className = "minim-btn";
        this.minimBtn.innerHTML = `
        
        <span class="material-symbols-outlined">minimize</span>

        `;
        
        this.container.appendChild(this.deleteBtn);
        this.container.appendChild(this.minimBtn);
       
    }

    setupEventListeners(widgets,grid) {
        
        this.deleteBtn.addEventListener('click', () => {
            grid.removeWidget(this.container);
            widgets.pop(this);
            console.log(widgets);
            
        });

        
        
    }
}