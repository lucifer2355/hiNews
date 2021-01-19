import React from 'react';
import { StyleSheet, FlatList, View } from 'react-native';

import colors from '../config/colors';
import Card from '../components/Card';
import Screen from '../components/Screen';
import VoiceCom from '../components/VoiceCom';

const cardData = [
  {
    id: 1,
    title: 'Latest News',
    contentText: 'Give me the latest news',
    colorStart: colors.blue,
    colorsEnd: colors.purple,
  },
  {
    id: 2,
    title: 'Latest News',
    contentText: 'Give me the latest news',
    colorStart: colors.greenLight,
    colorsEnd: colors.purpleDark,
  },
  {
    id: 3,
    title: 'Latest News',
    contentText: 'Give me the latest news',
    colorStart: colors.blue,
    colorsEnd: colors.purple,
  },
  {
    id: 4,
    title: 'Latest News',
    contentText: 'Give me the latest news',
    colorStart: colors.greenLight,
    colorsEnd: colors.purpleDark,
  },
];

const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            contentText={item.contentText}
            colorStart={item.colorStart}
            colorEnd={item.colorsEnd}
          />
        )}
      />

      <View style={styles.voiceBtnView}>
        <VoiceCom />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: colors.backgroundColor,
    position: 'relative',
  },

  voiceBtnView: {
    position: 'absolute',
    bottom: 10,
    right: 0,
  },
});

export default HomeScreen;
