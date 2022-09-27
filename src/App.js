import './App.css';
import { useState } from 'react';
import Content from './content';


function App() { 
  const [show,setShow] = useState(false)

  return (
    <div style={{padding:32}}>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <Content/>}
    </div>
  );
}

export default App;
