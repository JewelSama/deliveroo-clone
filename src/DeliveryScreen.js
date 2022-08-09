import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React from 'react'
import GlobalStyles from '../GlobalStyles'
import { useSelector } from 'react-redux'
import { selectRestaurant } from '../features/RestaurantSlice'
import { useNavigation } from '@react-navigation/native'
import { XIcon } from 'react-native-heroicons/solid'


const DeliveryScreen = () => {
    const navigation = useNavigation()
    const restaurant = useSelector(selectRestaurant)

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1" style={GlobalStyles.droidSafeArea}>
      <View className="z-50">

        <View className="flex-row justify-between items-center p-5">
            <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                <XIcon color="white" size={30} />
            </TouchableOpacity>
            <Text className="font-light text-lg text-white">Order Help</Text>
      </View>
      </View>
    </SafeAreaView>
  )
}

export default DeliveryScreen