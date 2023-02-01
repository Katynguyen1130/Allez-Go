import { Text,Image, StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {
    const navigation = useNavigation();
    
    return (
      <SafeAreaView className='flex-1 relative bg-[#00bcc9]' > 
        <ImageBackground source = {require('../assets/hero1.jpg')} 
            resizeMode="cover"
            className='flex-1 justify-start items-center min-h-screen'
        >   
            
                <View className='flex-row px-6 py-1 w-full  items-center space-x-2 '>
                    <View className='w-16 h-16 bg-black rounded-full justify-center items-center'>
                        <Text className='text-[#00bcc9] text-3xl font-semibold'>
                            Go
                        </Text>
                    </View>
                    <Text className='text-[#2a2b4b] text-3xl font-semibold'>
                        Allez Go
                    </Text>
                </View>
                <Animatable.View
                animation='fadeIn'
                easing='ease-in-out'
                className='  pt-12 w-full  '>
                    <Text className='px-6 text-3xl font-medium text-gray-600' >Enjoy the trip with</Text>
                    <Text className='py-4 px-1  text-3xl font-bold text-[#00bcc9] 
                    bg-white/80'>Memorable Moments </Text>
                </Animatable.View>

                <TouchableOpacity className = 'absolute bottom-20'
                onPress={()=> {
                    navigation.navigate("Discover")
                }}
                >
                    <View className=' flex justify-center items-center  
                    border-l-2 border-r-2 border-t-4 border-[#00bcc9]
                    bg-white/80 rounded-full w-28 h-28'>
                    
                        <Animatable.View
                        animation={'pulse'}
                        easing='ease-in-out'
                        iterationCount={'infinite'}
                        className='rounded-full bg-[#00bcc9] px-4 py-4'>
                            <Text className='text-gray-50 text-[36px] font-semibold' >
                                Go
                            </Text>
                        </Animatable.View>
                    
                        
                    </View>
                </TouchableOpacity>
                
               
            
        </ImageBackground>
                
      </SafeAreaView>
    )
}

    
export default HomeScreen