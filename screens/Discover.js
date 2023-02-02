import { Text,Image, ScrollView,StyleSheet, View, ImageBackground, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useEffect, useLayoutEffect, useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import PlacesInput from 'react-native-places-input';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { StatusBar } from 'expo-status-bar';
import { OIP } from '../assets';
import MenuContainer from '../components/MenuContainer';
import { Hotels, Attractions, Restaurants } from '../assets';
import { AntDesign } from '@expo/vector-icons'; 
import ItemContainer from '../components/ItemContainer';
import { NotFound } from '../assets';
import { SelectList } from 'react-native-dropdown-select-list'
import { getPlacesData } from '../api';
import { HeroImage } from '../assets';



const Discover = () => {
    const navigation = useNavigation();
    const api= "AIzaSyARl5WODzlrzS0VTj2CRtu9GeDVh9i4tD0";
    const [type, setType] = useState('restaurants')
    const [isLoading, setIsLoading] = useState(true)
    const [mainData, setMainData] = useState(null);
    const [selected, setSelected] = React.useState("");

    const cityList = [
        {key:'1', value:'California', },
        {key:'2', value:'Tokyo'},
        {key:'3', value:'Seul'},
        {key:'4', value:'Bangkok', },
        {key:'5', value:'Taipei'},
    ]

    useEffect(()=>{
        setIsLoading(true);
        getPlacesData().then(data=>{
            setMainData(data);
   
        }).catch(err=>console.log(err))
        setInterval(()=>{
            setIsLoading(false)
        }, 2000)
    },[])
    
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
        className='flex-row items-center justify-center mx-2 rounded-xl py-1 px-4 shadow-lg  mt-2 w-full  '
         >
            <SelectList 
                boxStyles={{width:250}}
                setSelected={(val) => setSelected(val)} 
                data={cityList} 
                save="value"
                placeholder='Which city to go?'
            />    
        

        </View>

        {/* menu options */}
        {
            isLoading?
            <View className='flex-1 items-center justify-center'>
                <Text className='text-[24px] font-semibold text-[#0B646B]/50'>Loading</Text>
                <ActivityIndicator size='large' color = '#0B646B' />
            </View>
            : 
            <ScrollView className='mt-4 '>
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
            {mainData?.length>0 ? 
                <> 
                {mainData?.map((item,i)=>{
                    return (
                        <ItemContainer 
                        key={i}
                        imageSrc={item?.photo?.images?.small?.url ? item?.photo?.images?.small?.url : "https://i.pinimg.com/originals/39/f1/51/39f151cdc918fbf0ab8052aacd36abfa.jpg" }  
                        title = {item?.name}
                        location = {item?.location_string}      
                        data = {item}                   
                        
                        />
                    )
                })} 
                </>    
            :
                <>
                <View className='w-full h-[360px]  items-center justify-center'>
                    <Image className='w-32 h-32 object-cover' source={NotFound}/>
                    <Text className='text-[#0b646B]/70 text-[16px] font-bold mt-8'>Oops! Couldn't find any place</Text>
                </View>
                </>
            }
                
            </View>

        </ScrollView>
        }
        
      
      <StatusBar style="dark" />
    </SafeAreaView>
  )
}

export default Discover