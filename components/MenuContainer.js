import { View,Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const MenuContainer = ( {key, title,imageSrc,type,setType,}) => {
    const handleChangeType=()=>{
        setType(title.toLowerCase())
    }
  return (
    <TouchableOpacity className='items-center justify-center space-y-2'
    onPress={handleChangeType}
    >
      <View className={`w-24 h-24 p-2 shadow-sm rounded-full
      items-center justify-center
      ${type===title.toLowerCase()?"bg-[#00bcc9]/50":""}`}>
        <Image  className='w-full h-full object-contain' 
        source={imageSrc}/>
      </View>
      <Text className='text-[#00bcc9] text-medium font-semibold'
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

export default MenuContainer