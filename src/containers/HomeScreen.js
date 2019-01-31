import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import SubjectList from '../presentations/SubjectsList';
import ButtonAdd from '../components/ButtonAdd';
import CustomModal from '../components/CustomModal';
import { colors } from '../utils/Styles';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'PhotoClass'
  };

  state = {
    showNewSubjectModal: false
  };

  showNewSubjectModal = () => {
    this.setState({
      showNewSubjectModal: true
    });
  };

  closeNewSubjectModal = () => {
    this.setState({
      showNewSubjectModal: false
    });
  };

  render() {
    const { showNewSubjectModal } = this.state;
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SubjectList
          navigation={navigation}
        />
        <ButtonAdd showNewSubjectModal={this.showNewSubjectModal} />
        {showNewSubjectModal === true && (
          <CustomModal
            close={this.closeNewSubjectModal}
            title="Nova Matéria"
            headerTextColor={colors.primary.dark}
            content={null}
          />
        )}
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
