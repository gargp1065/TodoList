import React, { useState } from "react";

function CreateTask({addTask}) {
    const [newTaskTitle, setNewTaskTitle] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!newTaskTitle) return;
        addTask(newTaskTitle);
        setNewTaskTitle("");
    }
    return (
        <form onSubmit={handleSubmit}> 
            <input type="text"
                className="input"
                value={newTaskTitle}
                placeholder="Add a new task"
                onChange={(e) => setNewTaskTitle(e.target.value)}
            
            />
        </form>
    );
}

export default CreateTask;