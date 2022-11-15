import React, { useState, useEffect } from "react";
import CreateTask from "./CreateTask";
import Task from "./Task";

function Todo() {
    
    const [tasks, setTasks] = useState([
        {
            title: "Grab some pizza",
            completed: false
        },
        {
            title: "Grab some drinks",
            completed: false
        },
        {
            title: "Grab some underwear",
            completed: false
        }
    ]);

    const [tasksRemaining, setRemainingTasks] = useState(0);
    
    useEffect(() => {
        setRemainingTasks(tasks.filter(task => !task.completed).length, [tasks]);
    })

    const addTask = (newTaskTitle) => {
        const newTask = [...tasks, {title: newTaskTitle, completed: false}]
        setTasks(newTask);
    }

    const completeTask = (index) => {
        const newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks);
    }


    const removeTask = (index) => {
        const newTasks = [...tasks]
        newTasks.splice(index, 1);
        setTasks(newTasks);
    }
    return (
        <div className="todo-container">
            <div>
                <div className="header">Pending Tasks {tasksRemaining}</div>
                <div className = "task">
                    {console.log(tasks)}
                    {tasks.map((task, index) => (
                        <Task task = {task} index = {index} key ={index} completeTask={completeTask} removeTask={removeTask} />
                    ))}
                </div>
                <div className="create-task">
                    <CreateTask addTask={addTask}></CreateTask>
                </div>
                
            </div>
        </div>
    )


}
export default Todo;

