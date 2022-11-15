import React from "react";
import "./fullCss.css"
function Task({task, index, completeTask, removeTask})  {
    
    return (
        <div>
            <div className = "task" style={{textDecoration: task.completed ? "line-through" : ""}}>
                {task.title}
            
                <button style={{background: "red"}} onClick={() => removeTask(index)}>X</button>
                <button onClick={() => completeTask(index)}>Complete</button>
            
            </div>   
            
        </div>
    )
}

export default Task;