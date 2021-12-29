import React, { useEffect, useState, useCallback } from 'react'
import axios from 'axios'
import { KeyboardAvoidingView, View, Pressable, Text, Button, Platform, RefreshControl, Image, ImageBackground, SafeAreaView, ScrollView, TextInput, StyleSheet } from 'react-native';
import { BsCurrencyBitcoin } from "react-icons/bs";
import { Icon } from 'react-native-elements';
import Pays from '../components/Pays';
import { profit } from '../components/Pays';
import { priceBit, priceEth, priceStellar, priceRipple } from './onboarding';
import { db } from "../firebaseConfig";
import {
    //collection,
    //getDocs,
    //addDoc,
    updateDoc,
   //deleteDoc,
    doc,
} from "@firebase/firestore";
import firebase from 'firebase';

const user = firebase.auth().currentUser;

const updateUser = async (id, bitcoin) => {
    const userDoc = doc(db, "users", id);
    const newFields = { bitcoin: bitcoin};
    await updateDoc(userDoc, newFields);
};

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout)
    })
}
let sum = 0
const Wallet = () => {
    const [refreshing, setRefreshing] = useState(false)
    const [coinName, setCoinName] = useState(null)
    const [index, setIndex] = useState(0)
    const [coinQuantity, setCoinQuantity] = useState(null)
    const [coinPrice, setCoinPrice] = useState(null)
    const [list, setList] = useState([])
    const [profit1, setProfit] = useState(0)
    const handleNewCoin = () => {
        if (coinName === null) {
            setCoinName(null)
            return
        }
        if (coinPrice === null) {
            setCoinName(null)
            return
        }
        if (coinQuantity === null) {
            setCoinName(null)
            return
        }

        let object = { id: index, name: coinName, price: coinPrice, quantity: coinQuantity }
        setIndex(index + 1)
        setList([...list, object])
        console.log(list)
        setCoinName(null)
        setCoinPrice(0)
        setCoinQuantity(null)
        setProfit(profit1 + profit)
        //sum = 0

        if (coinName === "Bitcoin") {
            sum += coinQuantity * (priceBit - coinPrice)
        }
        else if (coinName === "Ethereum") {
            sum += coinQuantity * (priceEth - coinPrice)
        } else if (coinName === "Stellar") {
            sum += coinQuantity * (priceStellar - coinPrice)
        } else if (coinName === "Ripple") {
            sum += coinQuantity * (priceRipple - coinPrice)
        }


    }
    const onRefresh = useCallback(() => {
        setRefreshing(true)

        wait(1000).then(() => {

            setRefreshing(false)

        })
    }, [refreshing])

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>

                <View>
                    <Text style={styles.totProfit}>
                        Total Profit:

                        {"$"}{sum}
                    </Text>
                    {
                        list.map((item) => {
                            console.log("//////  " + item.name + " //////////")
                            return (<Pays key={item.id} name={item.name} price={item.price} quantity={item.quantity} />)
                        })
                    }

                    <Text>
                    </Text>

                </View>
            </ScrollView>
            <KeyboardAvoidingView style={styles.addNewCoin} behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <TextInput value={coinName} onChangeText={text => setCoinName(text)} style={styles.input} placeholder={'Bitcoin, Ethereum, Steller, Ripple'}></TextInput>
                <TextInput value={coinQuantity} onChangeText={text => setCoinQuantity(text)} style={styles.input} placeholder={'Enter Quantity'}></TextInput>
                <TextInput value={coinPrice} onChangeText={text => setCoinPrice(text)} style={styles.input} placeholder={'Enter Price bought'}></TextInput>
                {/*<Pressable onPress={() => handleNewCoin()} style={styles.addButton}> */}
                <Pressable onPress={() => updateUser(user.uid, [coinName, coinQuantity, coinPrice])} style={styles.addButton}> 
                    <View>
                        <Text style={styles.plus} >+</Text>
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,


    },
    title: {
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 10,

    },
    totProfit: {
        textAlign: 'center',
        margin: 10,
        fontSize: 20,
    },
    titlePressable: {
        fontSize: 30,
        textAlign: 'center',

    },
    addNewCoin: {

        bottom: 0,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginBottom: 3,


    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        width: "100%",
        backgroundColor: '#fff',
        borderRadius: 20,
        borderColor: "black",
        borderWidth: 2,
    },
    addButton: {
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
    plus: {
        fontSize: 30,
        paddingBottom: 6,
        paddingLeft: 2,
    }
})
export default Wallet