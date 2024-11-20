import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export const Checkbox = ({ label, onValueChange, value }: {
    label: string;
    onValueChange: (val: boolean) => void;
    value: boolean;
}) => {
    return (
        <TouchableOpacity
            className="flex-row items-center gap-x-4 justify-center"
            onPress={() => onValueChange(!value)}
        >
            <Text className="text-base text-gray-100">{label}</Text>
            <View
                className={`w-6 h-6 border-2 rounded-md items-center justify-center ${value ? 'bg-primary border-primary' : 'border-gray-400'}`}
            >
                {value && <Text className="text-gray-100 font-bold">✔</Text>}
            </View>

        </TouchableOpacity>
    );
};