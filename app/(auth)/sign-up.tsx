import { View, Text, Image, ScrollView, Touchable, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/form_field'
import icons from '../../constants/icons'
import LineDivider from '../../components/line_divider'
import CustomButton from '../../components/custom_button'
import { router } from 'expo-router'
import { Checkbox } from '../../components/checkbox'
import { signUp } from '../../services/auth'

const SignIn = () => {
    const [isCoach, setIsCoach] = useState(false)

    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        role: 'athlete'
    })

    const handleSignUp = async () => {
        try {
            const response = await signUp(form.name, form.email, form.password,form.role);
            Alert.alert('Success', 'Account created successfully!');
        } catch (error) {
            if (error instanceof Error) {
                Alert.alert('Error', error.message || 'Something went wrong');
            } else {
                Alert.alert('Error', 'Something went wrong');
            }
        }
    };

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
                        Get Started With
                    </Text>
                    <Text className='text-white font-pmedium text-4xl mt-2 text-center'>
                        FitJourney
                    </Text>
                </View>

                {/* Sign Up Form */}
                <View className='gap-4'>
                    <FormField title='Name' value={form.name} placeholder='Enter your full name'
                        handleChangeText={(text) => setForm({ ...form, name: text })} />
                    <FormField title='Email' value={form.email} placeholder='Enter your email address'
                        handleChangeText={(text) => setForm({ ...form, email: text })} />
                    <FormField title='Password' value={form.password} placeholder='Enter your password'
                        handleChangeText={(text) => setForm({ ...form, password: text })} />

                    <CustomButton value='Register' containerStyles='h-16' textStyles='text-lg'
                        onPress={() => handleSignUp()} />
                    <Checkbox label={'Are you a coach?'} onValueChange={(val) => {
                        setIsCoach(val)
                        setForm({ ...form, role: val ? 'coach' : 'athlete' })
                    }} value={isCoach} />
                    <TouchableOpacity className='justify-center w-min' onPress={() => router.replace('/sign-in')}>
                        <Text className='text-base text-gray-100 text-center'>Already have an Account?</Text>
                    </TouchableOpacity>
                </View>

                <LineDivider value='or' />


                <CustomButton
                    value='Sign Up with Google!'
                    onPress={() => { Alert.alert('Coming Soon', 'Thank you for your patience!') }}
                    containerStyles='h-16'
                    textStyles='text-lg'
                />

            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn