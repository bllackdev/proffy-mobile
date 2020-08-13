import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Landing from './src/pages/Landing';
import { AppLoading } from 'expo';
import { useFonts, IndieFlower_400Regular } from '@expo-google-fonts/indie-flower';

export default function App() {
  let [fontsLoaded] = useFonts({
    IndieFlower_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <Landing />
        <StatusBar style="light" />
      </>
    );
  }
}
