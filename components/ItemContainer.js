import { View, Image,Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'; 
import {useNavigation} from '@react-navigation/native';
import ItemScreen from '../screens/ItemScreen';

const ItemContainer = ({imageSrc,title, location, data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity 
    onPress={()=> {navigation.navigate('ItemScreen', {param:data})}}
    className='rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[180px] my-2'>
      <Image className='w-full h-40' source={{uri : imageSrc}} />
        <Text className='text-[#428288] text-[16px] font-bold'>
        {title?.length>10 ? `${title.slice(0,10)}..` : title}
        </Text>
       <View className='flex-row items-center space-x-1'>
        <Entypo name="location-pin" size={20} color="gray" />
        <Text className='text-gray-400 text-[12px] font-bold'>
            {location?.length>10 ? `${location.slice(0,10)}..` : location}
        </Text>
        </View>
        

    </TouchableOpacity>
  )
}

export default ItemContainer