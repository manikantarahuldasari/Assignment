import React, { useState } from "react";
import "./Todolist.css"
const Todolist = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");

    // Add a new task
    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask(""); // Clear the input
        }
    };

    // Remove a task
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="container">
            <h1>Simple To-Do List</h1>
            <div className="element">
                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button onClick={addTask}> Add</button>
            </div>
            <ul style={{ marginTop: "20px", listStyleType: "none", padding: 0 }} className="list">
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button onClick={() => removeTask(index)}> Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todolist;
