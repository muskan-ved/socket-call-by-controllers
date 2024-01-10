import logo from './logo.svg';
import './App.css';
import { socket } from './socket';
import { useEffect, useState } from 'react';

function App() {

  const [data, setData ] = useState('')
  const [Count, setCount ] = useState(0)

  useEffect(()=>{
    socket.on('connection');
  
      getUser()
  
  },[])

  const getUser = async() =>{
  
fetch("http://localhost:4001/api/users")
.then(response => response.json())
.then(json => {
  console.log(json,"ress")
  socket.emit('connected');
  setData(json)
})
.catch(err => {
    // Catch and display errors
})
    
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {Count}
        {/* <button onClick={() => getUser()}>INcrease</button> */}
      </header>
    </div>
  );
}

export default App;