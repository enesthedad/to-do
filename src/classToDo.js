import idGiver from "./idGiver";
class ToDo{
    constructor(name,date,priority,description){
        this.name=name;
        this.date=date;
        this.priority=priority;
        this.description=description;
        this.id=idGiver();
    }
    innerHTML(){
        return `
        <h1 class="to-do-header">${this.name}</h1>
        <div>
        <h3>Due Date:</h3>
        <p>${this.date}</p>
        </div>

        <div>
        <h3>Priority</h3>
        <p>${this.priority}</p>
        </div>
        <div>
        <h3>Description:</h3>
        <p>${this.description}</p>
        
        </div>
        <div class="buttons">
            <button class="remove-btn">Remove</button>
            
        </div>
    `
        
        
    }
}

export default ToDo;