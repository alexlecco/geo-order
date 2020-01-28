import React, { Component } from 'react';
import ListItem from './ListItem';
import { getDistance } from 'geolib';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listPoints: []
    }
  }

  componentWillMount() {
    this.cloneData()
  }
  
  componentDidMount() {
    this.calculate()
  }

  cloneData() {
    console.log("clone")
    this.setState({listPoints: this.props.listPoints})
  }

  calculate() {
    console.log("calculate")
    const { mainPoint } = this.props;
    const { listPoints } = this.state;

    const updatedList = listPoints.map((point) => {
      return({
        address: point.address,
        location: point.location,
        distance: getDistance(mainPoint, point.location)
      })
    });

    updatedList.sort((a, b) => (a.distance > b.distance) ? 1 : -1)

    this.setState({ listPoints: updatedList });
  }

  render() {
    const { listPoints } = this.state;
    
    return(
      <div>
        {
          listPoints
            .map((point) => {
              return (
                <React.Fragment>
                  <ListItem
                    address={point.address}
                    location={point.location}
                    distance={point.distance}
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