import React, { Component } from 'react';
import './App.css';

import List from './List';

const mainPoint = {latitude: -26.8283728, longitude: -65.2224645}
const listPoints = [
  {
    address: "Globant",
    location: {latitude: -26.799365, longitude: -65.3052238},
    distance: 0
  },
  {
    address: "Bernabé Araoz 1198",
    location: {latitude: -26.834210, longitude: -65.216603},
    distance: 0
  },
  {
    address: "Manuel Alberti 1020",
    location: {latitude: -26.812432, longitude: -65.224143},
    distance: 0
  },
  {
    address: "Miguel Lillo 50",
    location: {latitude: -26.8285286, longitude: -65.2224466},
    distance: 0
  },
  {
    address: "Plaza Don Bosco",
    location: {latitude: -26.819390, longitude: -65.225077},
    distance: 0
  },
  {
    address: "Casa de los mellizos",
    location: {latitude: -26.813875, longitude: -65.224449},
    distance: 0
  },
  {
    address: "Gustavo",
    location: {latitude: -26.8852156, longitude: -65.2309537},
    distance: 0
  },
  {
    address: "Rolling Code",
    location: {latitude: -26.8366196, longitude: -65.2093675},
    distance: 0
  },
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      position: {}
    }
  }

  componentWillMount() {
    this.getLocation();
  }

  success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    const img = new Image();
    img.src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=13&size=300x300&sensor=false";

    alert("latitude: " + latitude + ", longitude: " + longitude)
  };

  error() {
    alert("Unable to retrieve your location")
  };
  
  getLocation() {
    navigator.geolocation.getCurrentPosition(this.success, this.error);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p> Posición actual: { mainPoint.latitude }, { mainPoint.longitude } </p>
  
          <List mainPoint={mainPoint} listPoints={listPoints}/>
        </header>
      </div>
    );
  }
}

export default App;
