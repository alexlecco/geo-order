import React from 'react';
import './App.css';

import List from './List';

const listPoints = [
  {
    address: "Bernabé Araoz 1198",
    location: {latitude: -26.834210, longitude: -65.216603}
  },
  {
    address: "Manuel Alberti 1020",
    location: {latitude: -26.812432, longitude: -65.224143}
  },
  {
    address: "Miguel Lillo 50",
    location: {latitude: -26.8285286, longitude: -65.2224466}
  },
  {
    address: "Plaza Don Bosco",
    location: {latitude: -26.819390, longitude: -65.225077}
  },
  {
    address: "Casa de los mellizos",
    location: {latitude: -26.813875, longitude: -65.224449}
  },
  {
    address: "Gustavo",
    location: {latitude: -26.8852156, longitude: -65.2309537}
  }
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Lista ordenada </p>

        <List listPoints={listPoints}/>
      </header>
    </div>
  );
}

export default App;
