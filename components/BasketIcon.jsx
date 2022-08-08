import { View, Text } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux'
import { selectBasketItems, selectBasketTotal } from '../features/BasketSlice'
import { useNavigation } from '@react-navigation/native'

const BasketIcon = () => {
    const navigation = useNavigation()
    const items = useSelector(selectBasketItems)
    const basketTotoal = useSelector(selectBasketTotal)


  return (
    <View>
      <Text>BasketIcon</Text>
    </View>
  )
}

export default BasketIcon