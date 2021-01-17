import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

interface cardProps {
  children: string;
  style?: object;
}

const AppText = ({ children, style, ...otherProps }: cardProps) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: colors.white,
  },
});

export default AppText;
