import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import getFeed from './api';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
  }

  handleEvents(response) {
    console.log(response);
    this.setState({
      events: response.events
    });
  }

  componentDidMount() {
    getFeed()
      .then(this.handleEvents.bind(this))
  }

  render() {
    return (
      <View>
        {this.state.events.map((event, i) => <Text key={i}>{event.name}</Text>)}
      </View>
    );
  }
}

export default Feed;
