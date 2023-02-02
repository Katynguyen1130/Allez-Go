import { View,Image, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign, FontAwesome } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 

const ItemScreen = ({route}) => {
    const navigation = useNavigation();
    const data = route?.params?.param;

    console.log(data)
  return (
    <SafeAreaView className ='flex-1  bg-white relative'>
      <ScrollView className='flex-1 px-4 py-6'>
        <View className='relative bg-white shadow-lg'>
            <Image 
            className='w-full h-72 object-cover rounded-2xl'
            source = {{
                uri: data?.photo?.images?.large?.url ? data?.photo?.images?.large?.url : "https://i.pinimg.com/originals/39/f1/51/39f151cdc918fbf0ab8052aacd36abfa.jpg"
            }}/>

            <View className = ' absolute top-0 w-full'>
                <View className='flex-row justify-between'>
                <TouchableOpacity 
                onPress={()=> {navigation.navigate('Discover')}}
                className ='w-10 h-10 items-center ml-4 mt-2 rounded-md justify-center bg-white'>
                <AntDesign name="arrowleft" size={24} color={`#06B2B2`} />
                </TouchableOpacity>
                <TouchableOpacity className ='w-10 h-10 mr-4 mt-2 rounded-md items-center justify-center bg-[#06B2B2]'>
                <Ionicons name="md-heart-outline" size={24} color="white" />
                </TouchableOpacity>
                </View>

            </View >

            <View className = ' absolute bottom-0 w-full flex-row justify-between px-6' > 
                <View className='flex-row space-x-2 items-center'>
                    <Text className='text-white text-[18px] font-semibold'> {data?.price}</Text>
                </View>
                <View className='px-2 mb-2 ml-4 py-1 rounded-md bg-teal-100'>
                    <Text className='text-[12px] font-semibold'>{data?.open_now_text}</Text>
                </View>
            </View>
        </View >

        <View className='mt-6'>
            <Text className='text-[#428288] text-[22px] font-bold'>
                {data?.name}
            </Text>
            <View className='flex-row items-center space-x-2 mt-2'>
            <Entypo name="location-pin" size={28} color="gray" />
            <Text className='text-gray-400 text-[16px] font-bold'>
            {data.location_string?.length>28 ? `${data.location_string.slice(0,28)}..` : data.location_string}
        </Text>
            </View>

        </View>

        <View className='mt-4 flex-row items-center justify-between'>
            {
                data?.rating && (
                    <View className='flex-row items-center space-x-2'>
                        <View className='w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md'>
                            <FontAwesome name='star' size={24} color = "#D58574" />
                        </View>
                        <View>
                        <Text className='text-[#515151] '> {data.rating} </Text>
                        <Text className='text-[#515151] '> Ratings </Text>
                        </View>                     
                    </View>
                )
            }
            {
                data?.price_level && (
                    <View className='flex-row items-center space-x-2'>
                        <View className='w-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md'>
                            <FontAwesome name='money' size={24} color = "#D58574" />
                        </View>
                        <View>
                        <Text className='text-[#515151] '> {data?.price_level} </Text>
                        <Text className='text-[#515151] '> Price level </Text>
                        </View>                     
                    </View>
                )
            }
            

        </View>

        {data?.description && (
            <Text className='text-[#97A6AF] mt-2 tracking-wide text-[14px] font-semibold' > 
                {data?.description}
            </Text>
        )} 

        {data?.cuisine && (
            <View className='flex-row gap-2 items-center justify-start flex-wrap mt-4'>
                {
                    data?.cuisine.map(
                        (n) => (
                            <TouchableOpacity key={n.key} 
                            className='px-2 py-1 rounded-md bg-emerald-100'>
                                    <Text> {n.name}</Text>
                            </TouchableOpacity>
                        )
                    )
                }
            </View>
        )}

        <View className='space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2'>
            {
                data?.phone &&  (
                    <View className='flex-row items-center justify-start'>
                        <FontAwesome name='phone' size={24} color ='#428288' />
                        <Text className='text-[14px] text-[#515151] '> {data?.phone}</Text>
                    </View>
                )
            }
             {
                data?.email &&  (
                    <View className='flex-row items-center justify-start'>
                        <FontAwesome name='envelope' size={24} color ='#428288' />
                        <Text className='text-[14px] text-[#515151] '> {data?.email}</Text>
                    </View>
                )
            }
              {
                data?.address &&  (
                    <View className='flex-row items-center justify-start'>
                        <FontAwesome name='map-pin' size={24} color ='#428288' />
                        <Text className='text-[14px] text-[#515151] '> {data?.address}</Text>
                    </View>
                )
            }

            <View className='mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12'>
                <Text className = 'text-2xl font-semibold  uppercase tracking-wider text-gray-100'>
                    Book Now</Text>
            </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default ItemScreen