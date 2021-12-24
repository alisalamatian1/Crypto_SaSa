import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

const Onboarding = () => {
  return (
    <ScrollView>
      <Text>Bitcoin price</Text>
      <View>
        <Text>Bitcoin price</Text>
        
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

export default Onboarding;
