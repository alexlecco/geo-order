import React, { Component } from 'react';

export default class ListItem extends Component {
  render() {
    const { address, distance } = this.props;

    return(
      <div>
       <p>dirección: { address }</p>
       <p>distancia: { distance } metros</p>
      </div>
    )
  }
}