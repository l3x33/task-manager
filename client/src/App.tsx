import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import axios from 'axios';

interface Task {
  id: number;
  title:string;
  description:string;
  completed:boolean;
  dueDate:Date;
  priority:string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask,setNewTask]=useState('');

  useEffect(()=>{
    axios.get<Task[]>('http://localhost:3001/api/tasks')
    .then(res => setTasks(res.data));
  },[]);
  
  const addTask=()=>{
    axios.post<Task>('http://localhost:3001/api/tasks', { title: newTask })
    .then(res => {
      setTasks([...tasks, res.data]);
      setNewTask('');
    });
  };

  const deleteTask=(id:number)=>{
      axios.delete('http://localhost:3001/api/tasks/${id}')
      .then(()=>setTasks(tasks.filter(task=>task.id!=id)));
  };


  return (
    <div style={{ padding: '2rem' }}>
      <h1>Task Manager</h1>
      <input
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            {task.title} <button onClick={() => deleteTask(task.id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;