import './App.css';
import React, { useState } from 'react';

function App() {
  const time = new Date().toLocaleTimeString();
  const cdate = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(time)

  function UpdateTime(){
    const time = new Date().toLocaleTimeString();
    setCtime(time)
  }
  setInterval(UpdateTime, 1000);


  return (
    <div className="App">
      <h1>Digital Watch</h1>

      <div className='watch'>
        <h2>{ctime}</h2>
        <h2>{cdate}</h2>
      </div>
    </div>
  );
}

export default App;
