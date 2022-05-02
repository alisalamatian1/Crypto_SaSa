import React, { useCallback } from 'react';
import { View, Text, ScrollView, StyleSheet, RefreshControl } from 'react-native';
import { useEffect, useState } from 'react';
import Coin from '../components/Coin'
import axios from 'axios'


const wait = (timeout) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}
const styles = StyleSheet.create({
  main: {
    flex: 1
  }
})
let priceBit: number;
let priceEth: number;
let priceStellar: number;
let priceRipple: number;
const Onboarding = () => {
    const originalUrl = 'https://api.nomics.com/v1/currencies/ticker?key=118c3d3f998c44f6566e9f109fab3d53288d0fc9&ids=BTC,ETH,XRP&interval=1d,30d&convert=CAD'
    let url = 'https://api.cryptonator.com/api/ticker/btc-usd'
    let urlEth = "https://api.cryptonator.com/api/ticker/eth-usd"
    let urlStellar = "https://api.cryptonator.com/api/full/xlm-usd"
    let urlRipple = "https://api.cryptonator.com/api/full/xrp-usd"
    const [bitcoin, setbitcoin] = useState(null)
    const [ethereum, setEthereum] = useState(null)
    const [stellar, setStellar] = useState(null)
    const [ripple, setRipple] = useState(null)
    const [refreshing, setRefreshing] = useState(false)

    
    const content = null
    useEffect(() => {
      axios.get(originalUrl)
        .then(response => {

          console.log("1")
          console.log(response.data[0].price)
          setbitcoin(response.data[0].price)
          console.log("11")
          setEthereum(response.data[1].price)
          console.log("111")
          setRipple(response.data[2].price)


        })

      


    }, [refreshing])



    if (bitcoin) {
      priceBit = bitcoin;
    } else {
      priceBit = 0;
    }
    if (ethereum) {
      priceEth = ethereum;
    } else {
      priceEth = 0;
    }
    if (ripple) {
      priceRipple = ripple;
    } else {
      priceRipple = 0;
    }

    const onRefresh = useCallback(() => {
      setRefreshing(true)

      wait(1000).then(() => {
        url = originalUrl
        setRefreshing(false)

      })
    }, [refreshing])


    return (
      <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

        <View style={styles.main}>
          <Coin name={"Bitcoin"} logo={'logo-bitcoin'} price={bitcoin} />
          <Text></Text>
          <Coin name={"Ethereum"} price={ethereum} />
          <Text></Text>
          <Coin name={"Ripple"} price={ripple} />
        </View>

      </ScrollView>
    );
}
export { priceBit, priceEth, priceStellar, priceRipple };
export default Onboarding;