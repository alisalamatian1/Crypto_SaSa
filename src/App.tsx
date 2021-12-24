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
      <View>
        <Text>Some more text</Text>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1
        }}
        defaultValue="You can type in me, interesting   "
      />
    </ScrollView>


  );
}

const AppNavigator = () =>{

  return(
  <Stack.Navigator>
   <Stack.Screen name = "prices" component = {Onboarding} />
   <Stack.Screen name = "main" component = {Main} />
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
