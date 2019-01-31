import React, { Component } from 'react';
import { View, Text } from 'react-native';

class SubjectDetailsScreen extends Component {
  static navigationOptions = {
    title: 'Detalhes da Matéria'
  };

  render() {
    return (
      <View>
        <Text>Detalhes da matéria</Text>
      </View>
    );
  }
}

export default SubjectDetailsScreen;
