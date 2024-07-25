/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import BottomTab from './src/navigation/bottomTabNavigation';
function App(): React.JSX.Element {
  const DefaultTheme = {
    dark: false,
    colors: {
      primary: 'black',
      background: 'white',
      card: 'white',
      text: 'black',
      border: 'black',
      notification: 'white',
    },
  };

  return (
    <SafeAreaView
      edges={['right', 'left']}
      style={{
        flex: 1,
      }}>
      <NavigationContainer theme={DefaultTheme}>
        {/* <WelcomeScreen /> */}
        <BottomTab></BottomTab>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
