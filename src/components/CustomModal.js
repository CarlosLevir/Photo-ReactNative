import React from 'react';
import {
  Modal, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors, fonts } from '../utils/Styles';

const CustomModal = ({
  close, title, headerTextColor, content
}) => (
  <Modal animationType="fade" visible onRequestClose={close} transparent>
    <View style={styles.outside}>
      <View style={styles.modal}>
        <View style={styles.header}>
          <TouchableOpacity onPress={close} style={styles.iconButton}>
            <Icon
              name="close"
              size={24}
              color={headerTextColor}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text
            style={[styles.title, { color: headerTextColor }]}
            numberOfLines={2}
          >
            {title}
          </Text>
          <View style={styles.container} />
        </View>
        <View style={styles.container}>{content}</View>
      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  iconButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 0,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.shadow.light
  },
  modal: {
    flex: 0,
    backgroundColor: colors.white,
    height: '87%',
    width: '95%',
    borderRadius: 12
  },
  outside: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.opacities.grey
  },
  title: {
    flex: 2,
    textAlign: 'center',
    fontSize: fonts.md,
    fontWeight: 'bold'
  },
  icon: {
    backgroundColor: 'transparent'
  }
});

export default CustomModal;
