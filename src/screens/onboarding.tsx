import React, { useCallback } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, RefreshControl } from 'react-native';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Bitcoin from '../components/Bitcoin';



const Onboarding = () => {
    const wait = (timeout) => {
        return new Promise(resolve => {
          setTimeout(resolve, timeout)
        })
      }
      const url = 'https://api.cryptonator.com/api/ticker/btc-usd'
    const [bitcoin, setbitcoin] = useState(null)
    const content = null
    
    useEffect(()=>{
        axios.get(url)
            .then(response=>{
                setbitcoin(response.data)
            })
    },[url])
    let price: number;
    if(bitcoin){
      price = bitcoin.ticker.price;
    }else{
      price = 0;
    }
    
      
    const [refreshing, setRefreshing] = useState(false)
      const onRefresh = useCallback(()=>{
        setRefreshing(true)
    
        wait(2000).then(()=>{
          setRefreshing(false)
          
        })
      }, [refreshing])

  return (
      
    <ScrollView>
      <Text>Bitcoin price</Text>
      <View>
        <Text>Bitcoin price</Text>
    

     <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

    <View>
        <Bitcoin price = {price}/>
    </View>

    </ScrollView>
        
        
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
