import React from 'react';
import logo from './logo.svg';
import './App.css';
import PlayersDisplay from './Components/PlayersDisplay';
import EditPlayer from './Components/EditPlayer'
import ActionButton from './Components/ActionButton'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h3>Today's players are</h3>
          <PlayersDisplay/>
          <EditPlayer/>
          <ActionButton/>
      </header>
    </div>
  );
}

export default App;
