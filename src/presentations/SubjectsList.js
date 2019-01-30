import React from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import SubjectCard from './SubjectCard';
import { colors, fonts } from '../utils/Styles';

const goToSubjectDetails = () => {};

const SubjectsList = () => (
  <View style={styles.mainView}>
    <SubjectCard
      isLoading
      title="Matéria 1"
      topOnPress={goToSubjectDetails}
      bottomOnPress={goToSubjectDetails}
      topColors={[colors.blue.dark]}
      bottomColors={[colors.blue.dark, colors.blue.light]}
      bottomContent={<View style={styles.homeCardBottomContent} />}
      icon={(
        <Icon
          name="donut-large"
          size={45}
          color={colors.white}
          style={{ backgroundColor: 'transparent' }}
        />
)}
    />
    <SubjectCard
      isLoading
      title="Matéria 2"
      topOnPress={goToSubjectDetails}
      bottomOnPress={goToSubjectDetails}
      topColors={[colors.purple.dark]}
      bottomColors={[colors.purple.dark, colors.purple.light]}
      bottomContent={(
        <View style={styles.homeCardBottomContent} />
)}
      icon={(
        <Icon2
          name="barcode"
          size={45}
          color={colors.white}
          style={{ backgroundColor: 'transparent' }}
        />
)}
    />
    <SubjectCard
      isLoading
      title="Matéria 3"
      topOnPress={goToSubjectDetails}
      bottomOnPress={goToSubjectDetails}
      topColors={[colors.green.dark]}
      bottomColors={[colors.green.dark, colors.green.light]}
      bottomContent={(
        <View style={styles.homeCardBottomContent} />
)}
      icon={(
        <Icon
          name="attach-money"
          size={45}
          color={colors.white}
          style={{ backgroundColor: 'transparent' }}
        />
)}
    />
  </View>
);

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
  fabContainer: {
    backgroundColor: colors.primary.dark,
    height: 55,
    width: 55,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 24
  },
  fabTouchable: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
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
