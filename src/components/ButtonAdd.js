import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, commonStyles } from '../utils/Styles';

const ButtonAdd = ({ showNewSubjectModal }) => (
  <View style={[styles.fabContainer, commonStyles.elevation]}>
    <TouchableOpacity onPress={showNewSubjectModal} style={styles.fabTouchable}>
      <Icon name="add" size={25} color={colors.white} style={styles.icon} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
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
  icon: {
    backgroundColor: 'transparent'
  }
});

export default ButtonAdd;
