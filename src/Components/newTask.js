import "./newTask.css";
import "./newT.css";
import axios from "axios";
import { useState } from "react";

const NewTask = (props) => {
    const [task, taskChange] = useState("");

    const taskHandler = (event) => {
        event.preventDefault();
        taskChange(document.getElementById("task").value);
    }
    
    const submitHandler = async (event) => {
        event.preventDefault();
        taskChange("");
        const response = await axios ({
            method : "POST",
            url : "https://todoapp-assignment-atk.herokuapp.com/api/create-task",
            data : {
                title : task,
                Date : new Date ()
            }
        })
        if (response.data.status === "success") props.onSaveData ();
    };
    return (
        <div className="new-expense">
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>TASK NAME</label>
                        <input type="text" id="task" value={task} onChange={taskHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Task</button>
                </div>
            </form>
        </div>
    );
}


export default NewTask;