import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import icons from '../constants/icons';
import { router } from 'expo-router';
import CustomButton from '../components/custom_button';

export default function App() {
  return (
    <SafeAreaView className='h-full bg-primary'>
      <StatusBar style="auto" />

      <View className='w-full h-[60%] justify-end items-center'>
        <Image
          className='h-48 aspect-square rounded-full'
          resizeMode='contain'
          source={icons.logo}
        />
        <Text className='text-gray-300 font-pextralight text-lg mt-5 text-center'>
          Hey there, Welcome to your
        </Text>
        <Text className='text-white font-pmedium text-4xl mt-6 text-center'>
          FitJourney
        </Text>

      </View>

      <CustomButton value={'Get Started'} containerStyles='h-16' onPress={()=>router.push('/sign-in')} />


    </SafeAreaView>
  );
}


