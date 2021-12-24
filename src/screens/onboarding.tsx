import React from 'react';
import { View, Text, Image, ScrollView, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';



export const Bitcoin = async function () {
    const [currentPrice, setPrice] = useState("");
    try {
        useEffect(() => {
            const result = await fetch("https://api.cryptonator.com/api/ticker/btc-usd")      
        //bitcoinPrice.value = data.ticker.price;
        const data = await result.json();
        console.log(data.ticker.price)
        }, []);
        return (
            <View>
            <Button
            onPress={() => {
                setPrice (data.ticker.price);
            }}
            disabled={currentPrice != ""}
            title={currentPrice? "Refresh" : "Current Price"}
            />
        </View>
    )
        
                  
    }   
    catch (e) {
        console.log(e)
        //bitcoinPrice.value = "data unavailable";
        return <Text>"data unavailable"</Text>
    }
    

}

const Onboarding = () => {
  return (
    <ScrollView>
      <Text>Bitcoin price</Text>
      <View>
        <Text>Bitcoin price</Text>
     
     <Bitcoin />
        
        
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
