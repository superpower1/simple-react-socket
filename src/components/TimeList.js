import React, {Component} from 'react';
import {subscribeToTimer} from '../api';

class TimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: 'No timestamp yet'
    }
  }

  componentDidMount() {
    subscribeToTimer((err, timestamp) => {
      this.setState({timestamp})
    })
  }

  render() {
    return (
      <div>
        {this.state.timestamp}
      </div>
    );
  }
}

export default TimeList;
