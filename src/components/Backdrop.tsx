import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  Image,
  Platform,
} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Svg, { Rect } from 'react-native-svg';
import { LinearGradient } from 'react-native-linear-gradient';

interface BackdropProps {
  newsData: any[];
  scrollX: any;
}

const { width, height } = Dimensions.get('window');
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const BACKDROP_HEIGHT = height * 0.65;

const Backdrop = ({ newsData, scrollX }: BackdropProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }): JSX.Element => {
          if (!item.urlToImage) return null;

          const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE];

          const translateX = scrollX.interpolate({
            inputRange,
            outputRange: [-width, 0],
          });

          return (
            <MaskedView
              style={styles.imageView}
              maskElement={
                <Svg
                  width={width}
                  height={height}
                  viewBox={`0 0 ${width} ${height}`}
                >
                  <Rect x="0" y="0" width={width} height={height} fill="red" />
                </Svg>
              }
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.image}
                resizeMode="cover"
              />
            </MaskedView>
          );
        }}
      />
      <LinearGradient
        colors={['transparent', 'white']}
        style={styles.linearView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width,
    height: BACKDROP_HEIGHT,
  },

  imageView: {
    position: 'absolute',
  },

  image: {
    height: BACKDROP_HEIGHT,
    width,
  },

  linearView: {
    width,
    height: BACKDROP_HEIGHT,
    position: 'absolute',
    bottom: 0,
  },
});

export default Backdrop;
