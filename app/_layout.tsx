import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import {SplashScreen, Stack} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import '../global.css';
import 'nativewind'
import {useFonts} from 'expo-font'


const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    "Poppins-Black": require('../assets/fonts/Poppins-Black.ttf'),
    "Poppins-Bold": require('../assets/fonts/Poppins-Bold.ttf'),
    "Poppins-ExtraBold": require('../assets/fonts/Poppins-ExtraBold.ttf'),
    "Poppins-ExtraLight": require('../assets/fonts/Poppins-ExtraLight.ttf'),
    "Poppins-Light": require('../assets/fonts/Poppins-Light.ttf'),
    "Poppins-Medium": require('../assets/fonts/Poppins-Medium.ttf'),
    "Poppins-Regular": require('../assets/fonts/Poppins-Regular.ttf'),
    "Poppins-SemiBold": require('../assets/fonts/Poppins-SemiBold.ttf'),
    "Poppins-Thin": require('../assets/fonts/Poppins-Thin.ttf'),
});

// Effect to handle font loading and splash screen hiding
useEffect(() => {
    console.log('Root layout mounted');
    if (error) {
        console.log(error);
        throw error;
    }

    if (fontsLoaded) SplashScreen.hideAsync();
}, [fontsLoaded, error]);

// Render null until fonts are loaded or an error occurs
if (!fontsLoaded && !error) return null;
  return (
    <Stack>
        <Stack.Screen name='index' options={{headerShown: false}}/>
        <Stack.Screen name='(auth)' options={{headerShown: false}}/>
    </Stack>
  )
}

export default RootLayout