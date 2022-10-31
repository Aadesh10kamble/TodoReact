import './App.css';
import axios from 'axios';
import { useState , useEffect} from 'react';
import TaskList from "./Components/TaskList"
import NewTask from './Components/newTask';
import ExpensesFilter from './Components/ExpenseFilter';

// let items
// (async () => {
//   const response = await axios ("http://127.0.0.1:8000/api/get-task");
//   items = response.data.data.tasks;
//   console.log (items)
// })();

// console.log (items);

// const items = [{
//   title: "Do react",
//   createdAt: new Date(),
//   status: false
// },
// {
//   title: "Do aggregation pipeline",
//   createdAt: new Date(),
//   status: true
// },
// {
//   title: "Do NODEJS",
//   createdAt: new Date(),
//   status: false,
// }];

function App () {
  const [yearNow, changeYear] = useState("2019");
  const [tasks,updateTasks] = useState ([]);

  useEffect (() => {
  saveData ();
  },[])

  const saveData = async () => {
    const response = await axios ("http://127.0.0.1:8000/api/get-task");
    updateTasks(response.data.data.tasks);
  };

  const getYear = (year) => {
    changeYear(year);
  };

  return (
    <div className="App">
      <NewTask onSaveData={saveData} />
      <ExpensesFilter onYear={getYear} currentYear={yearNow} />
      <TaskList items={tasks} deleteData={saveData}/>
    </div>
  );
}

export default App;
