import "./Tasks.css"
import axios from "axios";
// import TaskDate from "./TaskDate";
import { useState } from "react";

const Task = (props) => {
    const [statusBool,changeStatus] = useState (props.status);
    const statusUpdate = async (event) => {
        const id = event.target.closest (".expense-item").getAttribute ("id");
        await axios (`http://127.0.0.1:8000/api/change-status/${id}`)
        changeStatus ((prevStatus) => !prevStatus);
    };
    
    const status = statusBool ? "Completed" : "Incomplete";

    const deleteTask = async (event) => {
        const id = event.target.closest (".expense-item").getAttribute ("id");
        const response = await axios (`http://127.0.0.1:8000/api/task-delete/${id}`);
        if (response.data.status === "success") props.delete ();
    }
    return (
        <div className="expense-item" id ={props.id}>
            <p onClick = {deleteTask}>DELETE</p>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price" onClick ={statusUpdate}>{status}</div>
            </div>
        </div>
    )
}

export default Task

