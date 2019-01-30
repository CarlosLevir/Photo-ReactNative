import React from 'react';
import {
  StyleSheet, Text, TouchableOpacity, View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import { colors, commonStyles, fonts } from '../utils/Styles';

const SubjectCard = ({
  topColors = [colors.white],
  bottomColors = [colors.white],
  title = '',
  data = '',
  icon,
  topOnPress,
  bottomOnPress,
  bottomContent,
  isLoading = true
}) => (
  <View style={[styles.card, commonStyles.elevation]}>
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={topColors.length >= 2 ? topColors : [topColors[0], topColors[0]]}
      style={styles.topGradient}
    >
      <TouchableOpacity onPress={topOnPress} style={styles.topOnPress}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {isLoading ? (
            <ShimmerPlaceHolder autoRun style={styles.shimmer} />
          ) : (
            <Text style={styles.dataText1}>
              <Text style={styles.dataText2}>{data.split(' ')[0]}</Text>
              <Text style={styles.dataText3}>
                {data.split('').splice(data.split(' ')[0].length)}
              </Text>
            </Text>
          )}
        </View>
        <View style={styles.container}>
          <View style={styles.iconContainer}>{icon}</View>
        </View>
      </TouchableOpacity>
    </LinearGradient>

    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={bottomColors.length >= 2 ? bottomColors : [bottomColors[0], bottomColors[0]]}
      style={styles.bottomGradient}
    >
      <TouchableOpacity onPress={bottomOnPress} style={styles.bottomOnPress}>
        {bottomContent}
      </TouchableOpacity>
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1 },
  card: {
    flex: 0,
    margin: 8,
    borderRadius: 12,
    height: 120,
    width: '97%'
  },
  topGradient: {
    flex: 2,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    flexDirection: 'row'
  },
  topOnPress: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row'
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  titleText: {
    color: colors.white,
    fontSize: fonts.subtitle,
    fontWeight: 'bold'
  },
  shimmer: {
    borderRadius: 20,
    opacity: 0.2,
    width: '75%'
  },
  dataText1: {
    color: colors.white,
    fontSize: fonts.title
  },
  dataText2: {
    fontWeight: 'bold'
  },
  dataText3: {
    color: colors.white,
    fontSize: fonts.md
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  bottomGradient: {
    flex: 0,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    paddingHorizontal: 20,
    height: 35
  },
  bottomOnPress: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
});

export default SubjectCard;
