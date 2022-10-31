import Task from "./Task";
import "./Tasks.css"

const TaskList = (props) => {
    console.log (props);
    return (
        <div className="expenses">
            {props.items.map ((el) => {
            return <Task title={el.title} status={el.status} date={el.createdAt} id={el._id} delete={props.deleteData}/>
            })}
        </div>
    )
};

export default TaskList;