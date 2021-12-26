import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Onboarding from './screens/onboarding';
import Wallet from './components/Wallet'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from 
'@react-navigation/bottom-tabs';


const Stack = createBottomTabNavigator();




const AppNavigator = () =>{

  return(
  <Stack.Navigator
  initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#696969'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold', fontSize:20},
      }}>
   <Stack.Screen name = "prices" component = {Onboarding} 
   options={{title: 'Coins'}}/>
   <Stack.Screen name = "search" component = {Wallet} 
   options={{title: 'Wallet'}
  }
  />
  </Stack.Navigator>
  )
}

const App =() =>{
  return(
  <NavigationContainer>
    <AppNavigator />
  </NavigationContainer>

  )
}

export default App;
