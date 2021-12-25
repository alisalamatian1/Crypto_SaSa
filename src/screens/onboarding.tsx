import React, { useCallback } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView, RefreshControl, TextInput, Button } from 'react-native';
import { useEffect, useState } from 'react';
import Coin from '../components/Coin'
import axios from 'axios'


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}
const styles = StyleSheet.create({
    main:{
        flex:1
    }
})
const Onboarding = () => {
    const originalUrl = 'https://api.cryptonator.com/api/ticker/btc-usd'
    let url = 'https://api.cryptonator.com/api/ticker/btc-usd'
    let urlEth = "https://api.cryptonator.com/api/ticker/eth-usd" 
    const [bitcoin, setbitcoin] = useState(null)
    const [ethereum, setEthereum] = useState(null)
    const [refreshing, setRefreshing] = useState(false)

    const content = null
    useEffect(()=>{
        axios.get(url)
            .then(response=>{
                setbitcoin(response.data)
            
            })

        axios.get(urlEth)
            .then(response=>{
                setEthereum(response.data)            
            })


    },[refreshing])


let priceBit : number;
let priceEth : number;

if (bitcoin){
    priceBit = bitcoin.ticker.price;
}else{
    priceBit = 0;
}
if (ethereum){
    priceEth = ethereum.ticker.price;
}else{
    priceEth = 0;
}


  
  const onRefresh = useCallback(()=>{
    setRefreshing(true)

    wait(1000).then(()=>{
      url = originalUrl
      setRefreshing(false)
      
    })
  }, [refreshing])
  

  return (
    <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>

    <View style={styles.main}>
       <Coin name = {"Bitcoin"} logo = {'logo-bitcoin'} price = {priceBit}/>
       <Coin name = {"Ethereum"} price = {priceEth}/>
    </View>

    </ScrollView>
  );
}

export default Onboarding;