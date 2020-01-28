import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    return(
      <div>
        <ListItem address={"Bernabé Araoz 1198"} location={{latitude: -26.834210, longitude: -65.216603}} />
        <br/>
        <ListItem address={"Manuel Alberti 1020"} location={{latitude: -26.812432, longitude: -65.224143}} />
        <br/>
        <ListItem address={"Miguel Lillo 50"} location={{latitude: -26.828849, longitude: -65.220519}} />
        <br/>
        <ListItem address={"Plaza Don Bosco"} location={{latitude: -26.819390, longitude: -65.225077}} /> 
        <br/>
        <ListItem address={"Casa de los mellizos"} location={{latitude: -26.813875, longitude: -65.224449}} />  
      </div>
    )
  }
}