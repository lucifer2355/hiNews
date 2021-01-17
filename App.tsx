import React from 'react';
import { StyleSheet, StatusBar, FlatList, View } from 'react-native';

import colors from './src/config/colors';
import Card from './src/components/Card';
import Screen from './src/components/Screen';
import VoiceCom from './src/components/VoiceCom';

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

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
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
    </>
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

export default App;
