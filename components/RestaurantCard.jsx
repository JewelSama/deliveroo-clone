import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import {LocationMarkerIcon} from 'react-native-heroicons/outline'


const RestaurantCard = ({
    id, 
    imageUri,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
  return (
    <TouchableOpacity className="bg-white mr-3 shadow-lg" style={{shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 4,}}>
      <Image 
        source={{
            uri: imageUri
        }}
        className="h-36 w-64 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row items-center space-x-1">
            <StarIcon color="green" opacity={0.5} size={22} />
            <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> . {genre}
            </Text>
        </View>
        <View className="flex-row items-center space-x-1">
            <LocationMarkerIcon color="gray" opacity={0.4} size={22} />
            <Text className="text-xs text-gray-500">Nearby . {address}</Text>
        </View>

      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard