import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
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
        {this.state.events.map((event, i) => (
          <View key={i}>
            <Image source={{ uri: 'data:image/png;base64,'+event.image.preview}} style={{ height: 40, width: 40 }} />
            <Text>{event.name}</Text>
          </View>
        ))}
      </View>
    );
  }
}

export default Feed;
