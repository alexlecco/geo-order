import React, { Component } from 'react';
import { getDistance } from 'geolib';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainLocation: {latitude: -26.8283728, longitude: -65.2224645} // Miguel Lillo 40
    }
  }

  calculate() {
    const { location } = this.props;
    const { mainLocation } = this.state;

    return getDistance(location, mainLocation)
  }

  render() {
    const { address } = this.props;
    const distance = this.calculate();

    return(
      <div>
       <p>dirección: { address }</p>
       <p>distancia: { distance } metros</p>
      </div>
    )
  }
}