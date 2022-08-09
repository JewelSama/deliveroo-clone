import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation, useRoute, UseRoute} from '@react-navigation/native'
import { urlFor } from '../sanity'
import { ArrowLeftIcon, QuestionMarkCircleIcon } from 'react-native-heroicons/outline'
import { ChevronRightIcon, LocationMarkerIcon, StarIcon } from 'react-native-heroicons/solid'
import DishRow from '../components/DIshRow'
import BasketIcon from '../components/BasketIcon'
import { useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { setRestaurant } from '../features/RestaurantSlice'
import { useState } from 'react'


const RestaurantScreen = () => {
    const [res, setRes] = useState([])
    const dispatch = useDispatch()
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

    

    useEffect(() => {
       dispatch(setRestaurant({
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
        }))
    }, [dispatch])

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

  return (
    <>
    <BasketIcon />

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
                    <View className="flex-row items-center space-x-1">
                        <StarIcon size={22} color="green" opacity={0.5} />
                        <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">{rating}</Text> .{genre}
                        </Text>
                    </View>
                   
                    <View className="flex-row items-center space-x-1">
                        <LocationMarkerIcon size={22} color="gray" opacity={0.4} />
                        <Text className="text-xs text-gray-500">
                            <Text className="text-green-500">Nearby . {address}</Text>
                        </Text>
                    </View>

                </View>
                <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>
            </View>
            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
                <QuestionMarkCircleIcon color="gray" opacity={0.6} size={20} />
                <Text className="pl-2 flex-1 text-md font-bold">
                    Have a food allergy?
                </Text>
                <ChevronRightIcon color="#00cc88" />
            </TouchableOpacity>
            <View className="pb-36">
                <Text className="px-4 pt-5 mb-3 font-bold text-xl">
                    Menu
                </Text>

            {/* DishRows */}
             {dishes.map(dish => (
                <DishRow 
                    key={dish._id}
                    id={dish._id}
                    name={dish.name}
                    description={dish.short_description}
                    price={dish.price}
                    image={dish.image}
                />
             ))}


            </View>
        </View>
      
    </ScrollView>
    </>
  )
}

export default RestaurantScreen