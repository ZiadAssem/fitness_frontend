import { View, Text, Image, ScrollView, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/form_field'
import icons from '../../constants/icons'
import LineDivider from '../../components/line_divider'
import CustomButton from '../../components/custom_button'
import { router } from 'expo-router'

const SignIn = () => {

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    return (
        <SafeAreaView className='h-full bg-primary px-4 py-10'>
            <ScrollView>

                {/* Logo and Title */}
                <View className='w-full justify-center items-center'>
                    <Image
                        className='h-32 aspect-square rounded-full'
                        resizeMode='contain'
                        source={icons.logo}
                    />
                    <Text className='text-gray-300 font-pextralight text-lg mt-5 text-center'>
                        Continue your
                    </Text>
                    <Text className='text-white font-pmedium text-4xl mt-2 text-center'>
                        FitJourney
                    </Text>
                </View>

                {/* Sign In Form */}
                <View className='gap-4'>
                    
                    <FormField title='Email' value={form.email} placeholder='Enter your email address'
                        handleChangeText={(text) => setForm({ ...form, email: text })} />
                    <FormField title='Password' value={form.password} placeholder='Enter your password'
                        handleChangeText={(text) => setForm({ ...form, password: text })} />
                    
                    <CustomButton value='Sign In' containerStyles='h-16' textStyles='text-lg'
                        onPress={() => console.log(form)} />

                    <TouchableOpacity className='justify-center w-min' onPress={()=>router.replace('/sign-up')}>
                        <Text className='text-base text-gray-100 text-center'>First Time?</Text>
                    </TouchableOpacity>
                </View>

                <LineDivider value='or' />

                    <CustomButton
                        value='Sign In with Google!'
                        onPress={()=>{ Alert.alert('Coming Soon','Thank you for your patience!')} }
                        containerStyles='h-16'
                        textStyles='text-lg'
                    />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn