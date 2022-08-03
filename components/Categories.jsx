import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    style={{paddingHorizontal: 15, paddingTop: 10}}
    >
        {/* categorycard */}
        <CategoryCard imageUri='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imageUri='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imageUri='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imageUri='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imageUri='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imageUri='https://links.papareact.com/gn7' title="Testing"/>
        <CategoryCard imageUri='https://links.papareact.com/gn7' title="Testing"/>
      <Text></Text>
    </ScrollView>
  )
}

export default Categories