import "./TaskDate.css";

const TaskDate = (props) => {
    const month = props.date.toLocaleString("en-US", { month: "long" });
    const day = props.date.toLocaleString("en-US", { day: "numeric" });
    const year = props.date.getFullYear();
    return (<div className="expense-date">
        <div className="expense-data__month">{month}</div>
        <div className="expense-date__day">{day}</div>
        <div className="expense-date__yeat">{year}</div>
    </div>)
}

export default TaskDate;