import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Platform,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import MaskedView from '@react-native-community/masked-view';
import Svg, { Rect } from 'react-native-svg';
import { LinearGradient } from 'react-native-linear-gradient';

import DateSource from '../components/DateSourse';
import AppText from '../components/AppText';
import colors from '../config/colors';

const { width, height } = Dimensions.get('window');
const SPACING = 10;
const ITEM_SIZE = Platform.OS === 'ios' ? width * 0.72 : width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const BACKDROP_HEIGHT = height * 0.65;

const data = [
  {
    id: 1,
    source: {
      id: null,
      name: 'Cointelegraph',
    },
    author: 'Cointelegraph By Benjamin Pirus',
    title:
      'New timeline charts Bitcoin’s price alongside historical events of the past decade',
    description:
      "“Looking solely at BTC price movements in the market gives an incomplete view of why its price fluctuates the way it does, in a seemingly volatile manner,” TradingView's general manager said.",
    url:
      'https://cointelegraph.com/news/new-timeline-charts-bitcoin-s-price-alongside-historical-events-of-the-past-decade',
    urlToImage:
      'https://images.cointelegraph.com/images/1200_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS91cGxvYWRzLzIwMjEtMDEvNmJkMTE5NjEtN2VmYi00ZjkwLWIxMjctNWM5N2IxMjFjNWI4LmpwZw==.jpg',
    publishedAt: '2021-01-19T16:35:00Z',
    content:
      'Bitcoin (BTC) has travelled an eventful path since its creation in 2009. TradingView.com recently unveiled a BTC chart showing major events in the digital assets history, alongside the cryptocurrency… [+2144 chars]',
  },
  {
    id: 2,
    source: {
      id: null,
      name: 'Futurism',
    },
    author: 'Victor Tangermann',
    title: 'Man Accidentally Buried $275 Million of Bitcoin in Landfill',
    description:
      'Buried Bitcoin James Howells, an IT worker from Newport, Wales in the UK, is offering his local municipality $70 million to dig up a hard drive he threw away in 2013. Why? He believes the drive contains 7,500 bitcoins — worth about $275 million at today’s rat…',
    url: 'https://futurism.com/the-byte/accidentally-buried-bitcoin-landfill',
    urlToImage:
      'https://wp-assets.futurism.com/2021/01/accidentally-buried-bitcoin-landfill-768x403.jpg',
    publishedAt: '2021-01-19T16:23:15Z',
    content:
      'Buried Bitcoin\r\nJames Howells, an IT worker in the UK, is offering his local municipality $70 million to dig up a hard drive he threw away in 2013.\r\nWhy? He believes the drive contains 7,500 bitcoins… [+1861 chars]',
  },
  {
    id: 3,
    source: {
      id: null,
      name: 'CNBC',
    },
    author: 'Ryan Browne',
    title:
      'Bitcoin and U.S. tech stocks are the biggest market bubbles right now, investors say',
    description:
      'The vast majority of investors (89%) think some financial markets are in bubble territory, according to a Deutsche Bank survey.',
    url:
      'https://www.cnbc.com/2021/01/19/bitcoin-us-tech-stocks-are-biggest-bubbles-deutsche-bank-survey-says.html',
    urlToImage:
      'https://image.cnbcfm.com/api/v1/image/106824585-1610640591432-gettyimages-1294702491-yn_cryptoimages_011.jpeg?v=1610640685',
    publishedAt: '2021-01-19T16:21:00Z',
    content:
      'Bitcoin and U.S. tech stocks are viewed by investors as the biggest market bubbles right now, according to a Deutsche Bank survey released Tuesday.\r\nThe survey, which is based on responses from 627 m… [+2477 chars]',
  },
  {
    id: 4,
    source: {
      id: null,
      name: 'Forbes',
    },
    author:
      'Clem Chambers, Senior Contributor, \n Clem Chambers, Senior Contributor\n https://www.forbes.com/sites/investor/people/clem/',
    title: 'Bitcoin: Bull And Bear Case',
    description:
      'The time for investment is over for bitcoin, ether and for that matter DeFi--these are now trading times.',
    url:
      'https://www.forbes.com/sites/investor/2021/01/19/bitcoin-bull-and-bear-case/',
    urlToImage:
      'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6006b7bfbf87ecbebaf1690e%2F0x0.jpg',
    publishedAt: '2021-01-19T16:10:31Z',
    content:
      'STRF/STAR MAX/IPx\r\nIm out of bitcoin (BTC) and ether (ETH) and I have loaded up on decentralized finance (DeFi), which is now running hot. The time for investment is over for BTC and ETH and for that… [+3912 chars]',
  },
  {
    id: 5,
    source: {
      id: 'associated-press',
      name: 'Associated Press',
    },
    author: null,
    title: 'Two Guard members removed from ceremony...',
    description:
      'Two Guard members removed from ceremony...\r\n\n \n \n \n (Top headline, 8th story, link)\r\n\n \r\n\n \r\n\n \n Related stories:Trump leaves White House as he came in: Isolated and unpredictable...\r\nOutcast, Trailed by Pandemic, Joblessness...\r\nMany paths ahead for ex-presi…',
    url:
      'https://apnews.com/article/biden-inauguration-joe-biden-politics-ron-klain-mitch-mcconnell-45d78184ec204e0a775e0f38496ff67b',
    urlToImage:
      'https://storage.googleapis.com/afs-prod/media/ab69f78727e346b7a12493d40be52b45/3000.jpeg',
    publishedAt: '2021-01-19T16:07:36Z',
    content:
      'WASHINGTON (AP) The Latest on Joe Bidens presidential inauguration (all times local):\r\n10:45 a.m.\r\nThree new Democratic senators are set to be sworn into office after President-elect Joe Bidens inaug… [+3321 chars]',
  },
];

const NewsListingScreen = () => {
  const [newsData, setNewsData] = useState([
    {
      id: 'left-spacer',
      urlToImage: '',
      title: '',
      publishedAt: '',
      source: { name: '' },
      description: '',
    },
    ...data,
    { id: 'right-spacer' },
  ]);

  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      data={newsData}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      bounces={false}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      scrollEventThrottle={16}
      decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
      renderToHardwareTextureAndroid
      contentContainerStyle={{ alignItems: 'center' }}
      snapToInterval={ITEM_SIZE}
      snapToAlignment="start"
      renderItem={({ item, index }) => {
        if (!item.urlToImage) {
          return <View style={{ width: EMPTY_ITEM_SIZE }} />;
        }

        const inputRange = [
          (index - 2) * ITEM_SIZE,
          (index - 1) * ITEM_SIZE,
          index * ITEM_SIZE,
        ];

        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [0, -50, 0],
        });

        return (
          <View style={{ width: ITEM_SIZE }}>
            <Animated.View
              style={[styles.newsCardView, { transform: [{ translateY }] }]}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={styles.posterImage}
              />
              <AppText
                style={{ fontSize: 24, color: colors.dark }}
                numberOfLines={1}
              >
                {item.title}
              </AppText>

              <DateSource dateSourses={[item.publishedAt, item.source.name]} />
              <AppText
                style={{ fontSize: 12, color: colors.dark }}
                numberOfLines={3}
              >
                {item.description}
              </AppText>
            </Animated.View>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
  },

  newsCardView: {
    marginHorizontal: SPACING,
    padding: SPACING * 2,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 34,
  },

  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  posterImage: {
    width: '100%',
    height: ITEM_SIZE * 1.2,
    resizeMode: 'cover',
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});

export default NewsListingScreen;
