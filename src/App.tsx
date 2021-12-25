import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';
import Onboarding from './screens/onboarding';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from 
'@react-navigation/bottom-tabs';


const Stack = createBottomTabNavigator();


const Main = () => {
  return (
    <ScrollView>
      <Text>Some text</Text>
        <Text>Some more text</Text>       
    </ScrollView>


  );
}

const AppNavigator = () =>{

  return(
  <Stack.Navigator
  initialRouteName="Home"
      screenOptions={{
        headerStyle: {backgroundColor: '#42f44b'},
        headerTintColor: '#fff',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
   <Stack.Screen name = "prices" component = {Onboarding} />
   <Stack.Screen name = "search" component = {Main} 
   options={{title: 'Home Page'}
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
