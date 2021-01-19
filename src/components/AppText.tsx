import React from 'react';
import { StyleSheet, Text } from 'react-native';

import colors from '../config/colors';

interface cardProps {
  children: string;
  numberOfLines?: number;
  style?: object;
  otherProps?: any;
}

const AppText = ({
  children,
  numberOfLines,
  style,
  ...otherProps
}: cardProps) => {
  return (
    <Text
      style={[styles.text, style]}
      numberOfLines={numberOfLines}
      {...otherProps}
    >
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
