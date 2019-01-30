import React, { Component } from 'react';
import {
  StyleSheet, View
} from 'react-native';
import SubjectList from '../presentations/SubjectsList';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'PhotoClass'
  };

  render() {
    return (
      <View style={styles.container}>
        <SubjectList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default HomeScreen;
