import React, {useLayoutEffect, useState, useEffect} from 'react'
import { SafeAreaView, View, Text, Platform, StatusBar, Image, TextInput, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import GlobalStyles from '../GlobalStyles'
import {UserIcon, ChevronDownIcon, SearchIcon, AdjustmentsIcon } from 'react-native-heroicons/outline'
import Categories from '../components/Categories'
import FeaturedRow from '../components/FeaturedRow'
import sanityClient  from '../sanity'




const HomeScreen = () => {
  const [featuredCategory, setfeaturedCategory] = useState([])



  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: 'Testingggg'
      headerShown: false,
    })
  }, [navigation])

  useEffect(() => {
    sanityClient.fetch(`
    *[_type == "featured"] {
      ...,
      restaurants[]->{
        ...,
        dishes[]->
    }
    }`).then((data) => {
      setfeaturedCategory(data)
    });

  }, [sanityClient])

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
            {featuredCategory?.map(category => (
              <FeaturedRow
              key={category._id} 
                id={category._id}
                title={category.name}
                description={category.short_description}
              />
            ))}



            {/* Tasty Discounts */}

            


        </ScrollView>


      
    </SafeAreaView>
  )
}

export default HomeScreen