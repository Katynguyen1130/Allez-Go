import { Text,Image, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import { StatusBar } from 'expo-status-bar';
import { OIP } from '../assets';

const Discover = () => {
    const navigation = useNavigation();
    
  return (
    <SafeAreaView className='flex-1 bg-white relative'>
        <View className='flex-row items-center justify-between px-6'>
            <View>
                <Text className='text-[36px] text-[#0b646B] font-bold'>Discover</Text>
                <Text className='text-[#527283] text-[28px] '>the beauty today</Text>
            </View>
            <View className='w-12 h-12 bg-gray-500 rounded-md justify-center shadow-lg'>
                <Image className='w-full h-full rounded-md object-cover' source={OIP}/>
            </View>
        </View>
      <Text>Discover</Text>
      <StatusBar style="dark" />
    </SafeAreaView>
  )
}

export default Discover