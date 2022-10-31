import './App.css';
import axios from 'axios';
import { useState , useEffect} from 'react';
import TaskList from "./Components/TaskList"
import NewTask from './Components/newTask';

function App () {
  const [tasks,updateTasks] = useState ([]);

  useEffect (() => {
  saveData ();
  },[])

  const saveData = async () => {
    const response = await axios (`https://todoapp-assignment-atk.herokuapp.com/api/get-task`);
    updateTasks(response.data.data.tasks);
  };

  return (
    <div className="App">
      <NewTask onSaveData={saveData} />
      <TaskList items={tasks} deleteData={saveData}/>
    </div>
  );
}

export default App;
