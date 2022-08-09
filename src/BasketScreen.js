import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native' 
import { selectRestaurant } from '../features/RestaurantSlice'
import {useDispatch, useSelector} from 'react-redux'
import { selectBasketItems } from '../features/BasketSlice'
import { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { XCircleIcon } from 'react-native-heroicons/solid'
import GlobalStyles from '../GlobalStyles'



const BasketScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([])

useEffect(() => {
  const groupItems = items.reduce((results, item) => {
    (results[item.id] = results[item.id] || []).push(item)
    return results;
  }, {})
  setGroupedItemsInBasket(groupItems)

}, [items])

// console.log(groupedItemsInBasket)



  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea} className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00cc88] bg-white shadow-xs">
            <View>
              <Text className="text-lg font-bold text-center">Basket</Text>
              <Text className="text-gray-400 text-center">
                {restaurant.title}
              </Text>
            </View>
            <TouchableOpacity onPress={navigation.goBack}className="rounded-full bg-gray-100 absolute top-3 right-5">
            <XCircleIcon color="#00cc88" height={50} width={50} />
            </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image source={{uri: "https://links.papareact.com/wru"}} className="h-7 w-7 bg-gray-300 p-4 rounded-full" />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00cc88]">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key}>
                <Text>{items.length} x</Text>
            </View>
))}
        </ScrollView>

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen