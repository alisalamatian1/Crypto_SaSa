import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { KeyboardAvoidingView, View, Pressable, Text, Button, Platform, Image, ImageBackground, SafeAreaView, ScrollView, TextInput, StyleSheet } from 'react-native';
import {BsCurrencyBitcoin} from "react-icons/bs";
import { Icon } from 'react-native-elements';
import Pays from './Pays';
import { profit } from './Pays';
const Wallet = () => {
    const [coinName, setCoinName] = useState(null)
    const [index, setIndex] = useState(0)
    const [coinQuantity, setCoinQuantity] = useState(null)
    const [coinPrice, setCoinPrice] = useState(null)
    const [list, setList] = useState([])
    const [profit1, setProfit] = useState(profit)
    const handleNewCoin = () =>{
        if(coinName === null ){
            setCoinName(null)
            return
        }
        if(coinPrice === null ){
            setCoinName(null)
            return
        }
        if(coinQuantity === null ){
            setCoinName(null)
            return
        }
        
        let object = {id: index, name: coinName, price: coinPrice, quantity: coinQuantity}
        setIndex(index + 1)
        setList([...list, object])
        console.log(list)
        setCoinName(null)
        setCoinPrice(null)
        setCoinQuantity(null)
        setProfit(profit1 + profit)
        
    }
    return(
       <SafeAreaView style = {styles.container}>
           <ScrollView>

               <View>
                    <Text style = {styles.totProfit}>
                        Total Profit: {"$"}{profit}
                    </Text>
                   {
                       list.map((item)=>{
                           return(<Pays key={item.id} name={item.name} price={item.price} quantity={item.quantity}/>)
                       })
                   }
                   
               </View>
           </ScrollView>
           <KeyboardAvoidingView style={styles.addNewCoin} behavior = {Platform.OS === "ios" ? "padding" : "height"} >
               <TextInput value = {coinName} onChangeText={text=>setCoinName(text)} style={styles.input} placeholder={'Bitcoin, Ethereum, Steller, Ripple'}></TextInput>
               <TextInput value = {coinQuantity} onChangeText={text=>setCoinQuantity(text)} style={styles.input} placeholder={'Enter Quantity'}></TextInput>
               <TextInput value = {coinPrice} onChangeText={text=>setCoinPrice(text)} style={styles.input} placeholder={'Enter Price bought'}></TextInput>
               <Pressable onPress = {() => handleNewCoin()} style={styles.addButton}>
                   <View>
                       <Text style={styles.plus} >+</Text>
                   </View>
               </Pressable>
               </KeyboardAvoidingView>
       </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        

    },
    title:{
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
    totProfit:{
        textAlign: 'center',
        margin: 10,
        fontSize: 20,
    },
    titlePressable:{
        fontSize: 30,
        textAlign: 'center',

    },
    addNewCoin:{
        
        bottom: 0,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 3,
        
        
    },
    input:{
        paddingVertical: 15,
        paddingHorizontal:15,
        width: "100%",
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 2,
    },
    addButton:{
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        textAlign: 'center',
        marginTop: 4,
        
    },
    plus:{
        fontSize: 30,
        paddingBottom: 6,
        paddingLeft: 2,
    }
})
export default Wallet