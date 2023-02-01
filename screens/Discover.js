import { Text,Image, ScrollView,StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import PlacesInput from 'react-native-places-input';
import { StatusBar } from 'expo-status-bar';
import { OIP } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { Hotels, Attractions, Restaurants } from '../assets';
import { AntDesign } from '@expo/vector-icons'; 
import ItemContainer from '../components/ItemContainer';

const Discover = () => {
    const navigation = useNavigation();
    const api= "AIzaSyB8VAen9sTuu4OzwCx1oglAFyly6PDzlpw";
    const [type, setType] = useState('restaurants')
    
  return (
    <SafeAreaView className='flex-1 bg-white relative'>
        <View className='flex-row items-center justify-between px-6'>
            <View>
                <Text className='text-[32px] text-[#0b646B] font-bold'>Discover</Text>
                <Text className='text-[#527283] text-[24px] '>the beauty today</Text>
            </View>
            <View className='w-12 h-12 bg-gray-500 rounded-md justify-center shadow-lg'>
                <Image className='w-full h-full rounded-md object-cover' source={OIP}/>
            </View>
        </View>
        <View
        className='flex-row items-center bg-white mx-2 rounded-xl py-1 px-4 shadow-lg  mt-2 w-full  '
         >
            <PlacesInput 
            googleApiKey={api}
            placeHolder="where to go?"
            onSelect={place => console.log(place)}
            language="en"
            />
        

        </View>

        {/* menu options */}
        <ScrollView className='mt-16 '>
            <View className='flex-row items-center justify-between px-8 '>
                <MenuContainer 
                    key={'hotel'}
                    title='Hotels'
                    imageSrc={Hotels}
                    type={type}
                    setType={setType}
                />
                 <MenuContainer 
                    key={'attraction'}
                    title='Attractions'
                    imageSrc={Attractions}
                    type={type}
                    setType={setType}
                />
                 <MenuContainer 
                    key={'restaurant'}
                    title='Restaurants'
                    imageSrc={Restaurants}
                    type={type}
                    setType={setType}
                />
            </View>

            <View className=''>
                <View className='flex-row items-center justify-between px-4 mt-4 border-b-2 shadow-lg pb-4 border-[#00bcc9]'>
                    <Text className='text-[#0b646B] text-[20px] font-bold'>Top Tips</Text>
                    <TouchableOpacity className='flex-row items-center justify-center space-x-2 '>
                        <Text className='text-[#0b646B]/70 text-[16px] font-bold'>Explore</Text>
                        <AntDesign name="arrowright" size={24} color="#A0C4C7" />
                    </TouchableOpacity>
                </View>
            </View>

            <View className='px-4 mt-6 flex-row items-center justify-evenly flex-wrap' >
                <ItemContainer key={'101'} imageSrc={'https://cdn.pixabay.com/photo/2023/01/26/04/51/hummingbird-7745078_960_720.jpg'} title="Humingbfdfdfdddddird" location="New York"/>
                <ItemContainer key={'102'} imageSrc={'https://cdn.pixabay.com/photo/2023/01/26/04/51/hummingbird-7745078_960_720.jpg'} title="Calif" location="Calif"/>
            
            </View>

        </ScrollView>
      
      <StatusBar style="dark" />
    </SafeAreaView>
  )
}

export default Discover