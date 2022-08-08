import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation, useRoute, UseRoute} from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon } from 'react-native-heroicons/outline'
import { StarIcon } from 'react-native-heroicons/solid'


const RestaurantScreen = () => {
    const navigation = useNavigation()
    const {params: {
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
    }} = useRoute()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])


  return (
    <ScrollView>
        <View className="relative">
            <Image 
                source={{ uri: urlFor(imageUri).url() }}
                className="w-full h-56 bg-gray-300 p-4"
            />
            <TouchableOpacity onPress={navigation.goBack} className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full">
                <ArrowLeftIcon size={20} color="#00cc88" />
            </TouchableOpacity>
        </View>
        <View className="bg-white">
            <View className="px-4 pt-4">
                <Text className="text-3xl font-bold">{title}</Text>
                <View className="flex-row space-x-2 my-1">
                    <View>
                        <StarIcon size={22} color="green" opacity={0.5} />
                        <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating}</Text> .{genre}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
      
    </ScrollView>
  )
}

export default RestaurantScreen