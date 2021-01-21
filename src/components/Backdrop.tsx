import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface BackdropProps {
  newsData: object[];
  scrollX: object;
}

const Backdrop = ({ newsData, scrollX }: BackdropProps) => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Backdrop;
