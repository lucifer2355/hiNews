import React, { ReactNode } from 'react';
import { StyleSheet, SafeAreaView, View } from 'react-native';

interface ScreenProps {
  children: ReactNode;
  style?: object;
}

const Screen = ({ children, style }: ScreenProps) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },

  view: {
    flex: 1,
  },
});

export default Screen;
