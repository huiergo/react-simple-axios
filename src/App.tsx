import React from 'react';
import logo from './logo.svg';
import './App.css';

async function getAllUsers() {

  const response = await fetch('/api/users');
  return await response.json();
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={() => {
          console.log(123)
          getAllUsers()
            .then(users => {
              console.log(users)
            });
        }}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
