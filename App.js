import React from 'react'
import {
  View,
  Text
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { FONTS } from './constants'

const App = () => {

  let [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-Black': require('./assets/fonts/Roboto-Black.ttf'),
  });

  if(!fontsLoaded){
    return (
      <AppLoading />
    )
  }

  return(
    <View>
      <Text style={{...FONTS.h1}}>Hey There</Text>
    </View>
  )
}

export default App;
