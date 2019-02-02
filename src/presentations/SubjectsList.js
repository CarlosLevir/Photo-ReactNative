import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import SubjectCard from './SubjectCard';
import { colors, fonts } from '../utils/Styles';

class SubjectsList extends Component {
  goToSubjectDetails = () => {
    const { navigation } = this.props;
    navigation.navigate('SubjectDetails');
  };

  render() {
    return (
      <View style={styles.mainView}>
        <SubjectCard
          isLoading
          title="Matéria 1"
          topOnPress={this.goToSubjectDetails}
          bottomOnPress={this.goToSubjectDetails}
          topColors={[colors.blue.dark]}
          bottomColors={[colors.blue.dark, colors.blue.light]}
          bottomContent={<View style={styles.homeCardBottomContent} />}
          icon={(
            <Icon
              name="book"
              size={45}
              color={colors.white}
              style={{ backgroundColor: 'transparent' }}
            />
)}
        />
        <SubjectCard
          isLoading
          title="Matéria 2"
          topOnPress={this.goToSubjectDetails}
          bottomOnPress={this.goToSubjectDetails}
          topColors={[colors.purple.dark]}
          bottomColors={[colors.purple.dark, colors.purple.light]}
          bottomContent={<View style={styles.homeCardBottomContent} />}
          icon={(
            <Icon
              name="book"
              size={45}
              color={colors.white}
              style={{ backgroundColor: 'transparent' }}
            />
)}
        />
        <SubjectCard
          isLoading
          title="Matéria 3"
          topOnPress={this.goToSubjectDetails}
          bottomOnPress={this.goToSubjectDetails}
          topColors={[colors.green.dark]}
          bottomColors={[colors.green.dark, colors.green.light]}
          bottomContent={<View style={styles.homeCardBottomContent} />}
          icon={(
            <Icon
              name="book"
              size={45}
              color={colors.white}
              style={{ backgroundColor: 'transparent' }}
            />
)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    width: '95%'
  },
  content: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
    alignItems: 'center'
  },
  homeCardBottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  homeCardBottomText: {
    color: colors.white,
    fontSize: fonts.md,
    fontWeight: 'bold'
  }
});

export default SubjectsList;
