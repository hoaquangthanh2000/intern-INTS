import './App.css';
import { useState } from 'react';


function App() { 
  const storageJob = JSON.parse(localStorage.getItem('jobs'))
  const [todo,setTodo] = useState('')
  const [todos,setTodos] = useState(storageJob ?? [])
  
  const handleAddTodo = () => {
    setTodos(prev => {
      const newJob = [...prev,todo]
      const jsonJob = JSON.stringify(newJob)
      localStorage.setItem('jobs', jsonJob)
      return newJob
    })
    setTodo('')
  }

  return (
    <div style={{padding:32}}>
      <input
      value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add</button>

      <ul>
        {
          todos.map((item,index) => (
            <li key={index}>{item}</li>
          ))
        }
        
      </ul>
    </div>
  );
}

export default App;
