import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

// import Voice
import Voice from '@react-native-community/voice';
import colors from '../config/colors';
import AppText from './AppText';

const VoiceCom = () => {
  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);
  const [endSpeech, setEndSpeech] = useState(true);

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e: any) => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    setStarted('√');
  };

  const onSpeechEnd = (e: any) => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    setEnd('√');
  };

  const onSpeechError = (e: any) => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
  };

  const onSpeechResults = (e: any) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
  };

  const onSpeechPartialResults = (e: any) => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = (e: any) => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    //Starts listening for speech for a specific locale
    setEndSpeech(!endSpeech);
    console.log(endSpeech);

    if (!endSpeech) {
      try {
        await Voice.start('en-US');
        setPitch('');
        setError('');
        setStarted('');
        setResults([]);
        setPartialResults([]);
        setEnd('');
      } catch (e) {
        console.error(e);
      }
    } else {
      Voice.cancel();
      setTimeout(() => {
        setEndSpeech(!endSpeech);
      }, 500);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      {partialResults.length !== 0 && (
        <View style={styles.voiceCommandView}>
          <AppText style={styles.voiceCommandText}>
            {partialResults.toString()}
          </AppText>
        </View>
      )}
      <TouchableHighlight style={styles.voiceBtn} onPress={startRecognizing}>
        <Image
          style={styles.imageButton}
          source={{
            uri:
              'https://raw.githubusercontent.com/AboutReact/sampleresource/master/microphone.png',
          }}
        />
      </TouchableHighlight>
    </View>
  );
};

export default VoiceCom;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },

  voiceCommandView: {
    paddingHorizontal: 2,
    paddingVertical: 10,
    backgroundColor: colors.white,
    marginRight: 10,
    borderRadius: 30,
    alignSelf: 'center',
  },

  voiceCommandText: {
    color: colors.dark,
    textAlign: 'center',
    width: 170,
  },

  voiceBtn: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 50,
  },

  imageButton: {
    width: 40,
    height: 40,
  },
});
