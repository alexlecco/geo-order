import React, { Component } from 'react';
import ListItem from './ListItem';

export default class List extends Component {
  render() {
    const { listPoints } = this.props;
    
    return(
      <div>
        {
          listPoints.map((point) => {
            return (
              <React.Fragment>
                <ListItem
                  address={point.address}
                  location={point.location}
                />
                <br />
              </React.Fragment>
            )
          })
        }

      </div>
    )
  }
}