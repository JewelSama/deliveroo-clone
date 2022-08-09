import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import RestaurantScreen from './src/RestaurantScreen'
import BasketScreen from './src/BasketScreen'
import {Provider} from 'react-redux'
import { store } from './store';
import PreaparingOrderScreen from './src/PreaparingOrderScreen';
import DeliveryScreen from './src/DeliveryScreen';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} 
            options={{ presentation: "modal" , headerShown: false }}
          />
          <Stack.Screen name="PreparingOrderScreen" component={PreaparingOrderScreen} 
            options={{presentation: "fullScreenModal", headerShown:false}}
          />
          <Stack.Screen name="Delivery" component={DeliveryScreen} 
            options={{presentation: "fullScreenModal", headerShown:false}}
          />
        </Stack.Navigator>      
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

