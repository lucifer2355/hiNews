import React from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './src/screens/HomeScreen';
import NewsListingScreen from './src/screens/NewsListingScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <HomeScreen /> */}
      <NewsListingScreen />
    </>
  );
};

export default App;
