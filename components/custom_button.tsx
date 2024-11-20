import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonProps {
    value: string
    onPress: () => void
    containerStyles?: string
    textStyles?: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ value, onPress, containerStyles, textStyles }) => {
    return (
        <View className='justify-center flex-1 items-center'>
            <TouchableOpacity className={`w-[80%] bg-secondary rounded-full mt-3 items-center justify-center ${containerStyles}`}
                onPress={onPress}>
                <Text className={`text-primary font-pmedium text-2xl text-center ${textStyles}`}>
                    {value}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default CustomButton