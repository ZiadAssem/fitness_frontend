import { View, Text } from 'react-native'
import React from 'react'

interface LineDividerProps {
    value: string;
}

const LineDivider:React.FC<LineDividerProps> = ({value}) => {
  return (
    <View className='flex-row items-center my-4'>
      <View className='flex-1 h-[1] bg-[#ccc]'/>
      <Text className='mx-2 text-lg text-[#666]'>{value}</Text>
      <View className='flex-1 h-[1] bg-[#ccc]'/>
    </View>
  )
}

export default LineDivider