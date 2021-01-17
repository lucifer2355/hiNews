import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import AppText from './AppText';

const heigth = Dimensions.get('screen').height / 4 - 38;

interface CradProps {
  title: string;
  contentText: string;
  colorStart: string;
  colorEnd: string;
}

const Card = ({ title, contentText, colorStart, colorEnd }: CradProps) => {
  return (
    <LinearGradient
      colors={[colorStart, colorEnd]}
      start={{ x: 1.3, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={styles.container}
    >
      <View style={styles.cardTitleView}>
        <AppText style={styles.cardTitleText}>{title}</AppText>
      </View>

      <View style={styles.cardContentView}>
        <AppText style={styles.cardTitleText}>Try Saying:</AppText>
        <AppText style={styles.cardContentText}>{contentText}</AppText>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    height: heigth,
    borderRadius: 5,
    marginVertical: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  cardTitleView: {
    alignItems: 'center',
    paddingTop: 5,
  },

  cardTitleText: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    paddingVertical: 2,
  },

  cardContentView: {
    paddingBottom: 5,
  },

  cardContentText: {
    fontSize: 20,
  },
});

export default Card;
