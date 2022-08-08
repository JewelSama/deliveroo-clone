import { View, Text, ScrollView } from 'react-native'
import React, {useState, useEffect} from 'react'
import CategoryCard from './CategoryCard'
import sanityClient, { urlFor } from '../sanity';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`
      *[_type == "category"]
    `).then(data => {
      setCategories(data)
    })
  }, [])
  // console.log(categories)


  return (
    <ScrollView 
    horizontal 
    showsHorizontalScrollIndicator={false}
    style={{paddingHorizontal: 15, paddingTop: 10}}
    >
        {/* categorycard */}

      {categories?.map((category) => (
        <CategoryCard 
        key={category._id}
        imageUri={urlFor(category.image).width(200).url()} 
        title={category.name}
        />
      ))}


    </ScrollView>
  )
}

export default Categories