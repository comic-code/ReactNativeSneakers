import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';
import {useFonts, Anton_400Regular} from '@expo-google-fonts/anton'

import Routes from './src/router';

export default function App() {

  const [fontsLoaded] = useFonts({
    Anton_400Regular,
  });

  if(!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style="light" backgroundColor="#111" translucent={true}/>
      <Routes />
    </>
  );
}
