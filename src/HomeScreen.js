import React, {useLayoutEffect} from 'react'
import { SafeAreaView, View, Text, Platform, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from '../GlobalStyles'
import {UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'





const HomeScreen = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'Testingggg'
      headerShown: false,
    })
  }, [navigation])

  return (
    <SafeAreaView className="bg-white pt-5" style={GlobalStyles.droidSafeArea}>
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image 
            source={{
              uri: 'https://links.papareact.com/wru'
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />

          <View className='flex-1'>
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">Current Location
            <ChevronDownIcon  size={20} color="#00cc88" />
             
           </Text>
          </View>
            <UserIcon size={35} color="#00cc88" />
        
        </View>
        {/* Search */}

        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <SearchIcon color="gray" size={20} />
            <TextInput placeholder='Restaurants and cuisines'
                    keyboardType='default'
            />
          </View>
            <AdjustmentsIcon color="#00cc88" />
        </View>
        
        {/* body */}

        <ScrollView className="bg-gray-100" contentContainerStyle={{paddingBottom: 140}}>
            {/* categories */}
            <Categories />


            {/* featured rows */}
            <FeaturedRow 
            id="123"
              title="Featured"
              description="Paid placements from our partners"
            />

            {/* Tasty Discounts */}

            <FeaturedRow 
            id="1234"
              title="Tasty Discounts"
              description="Everyone's been enjoying these juicy discounts"
            />

            {/* Offers new you */}

            <FeaturedRow 
            id="12345"
              title="Offers new you"
              description="Why not support your local restaurant new you"
            />


        </ScrollView>


      
    </SafeAreaView>
  )
}

export default HomeScreen