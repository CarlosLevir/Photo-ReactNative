import React, { Component } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, Modal
} from 'react-native';
import Camera from '../components/Camera';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'PhotoClass'
  };

  constructor(props) {
    super(props);

    this.state = {
      showCamera: false
    };
  }

  showModal = () => {
    this.setState({
      showCamera: true
    });
  };

  render() {
    const { showCamera } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <TouchableOpacity onPress={this.showModal}>
            <Text>Tirar Foto</Text>
          </TouchableOpacity>
          <Modal onRequestClose={() => {}} visible={showCamera} animationType="slide">
            <Camera />
          </Modal>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});

export default HomeScreen;
