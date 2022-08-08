import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';
import RestaurantScreen from './src/RestaurantScreen'
import {Provider} from 'react-redux'
import { store } from './store';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        </Stack.Navigator>      
      </TailwindProvider>
      </Provider>
    </NavigationContainer>
  );
}

