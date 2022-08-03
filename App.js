import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/HomeScreen';

const Stack = createNativeStackNavigator() 

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>      
      </TailwindProvider>
    </NavigationContainer>
  );
}

