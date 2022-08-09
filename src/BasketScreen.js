import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native' 
import { selectRestaurant } from '../features/RestaurantSlice'
import {useDispatch, useSelector} from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/BasketSlice'
import { useMemo } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { XCircleIcon } from 'react-native-heroicons/solid'
import GlobalStyles from '../GlobalStyles'
import { urlFor } from '../sanity'
import { removeFromBasket } from '../features/BasketSlice'


const BasketScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const restaurant = useSelector(selectRestaurant)
  const items = useSelector(selectBasketItems)
  const basketTotal = useSelector(selectBasketTotal)
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

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View key={key} className="flex-row items-center space-x-3 bg-white py-2 px-5">
                <Text className="text-[#00cc88]">{items.length} x</Text>
                <Image 
                  source={{ uri: urlFor(items[0]?.image).url() }}
                  className="h-12 w-12 rounded-full"
                />
                <Text className="flex-1">{items[0]?.name}</Text>
                <Text className="text-gray-600">
                  ₦{items[0]?.price}
                </Text>
                <TouchableOpacity onPress={() => dispatch(removeFromBasket({id: key}))}>
                  <Text className="text-[#00cc88] text-xs">
                    Remove
                  </Text>
                </TouchableOpacity>
            </View>
))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              ₦{basketTotal}
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              ₦450
            </Text>
          </View>

          <View className="flex-row justify-between">
            <Text>Order Total</Text>
            <Text className="font-extrabold">
              ₦{basketTotal + 500}
            </Text>
          </View>

          <TouchableOpacity onPress={() => navigation.navigate("PreparingOrderScreen")} className="rounded-lg bg-[#00cc88] p-4">
            <Text className="text-center text-white text-lg font-bold">Place Order</Text>
          </TouchableOpacity>

        </View> 

      </View>
    </SafeAreaView>
  )
}

export default BasketScreen