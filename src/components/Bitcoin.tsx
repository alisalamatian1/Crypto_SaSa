import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { View, Text, Image, ImageBackground, ScrollView, TextInput, StyleSheet } from 'react-native';

const Bitcoin = (props) =>{
    
    if(props.price){
        return(

            <View style = {styles.view}>
                <Text style={styles.title}>Bitcoin</Text>
                <Text>
                    
                    
                <Image style = {styles.logo} source={require("../assets/bitcoin.png")}>

                </Image>
                </Text>
                <Text style = {styles.price}>
                     {props.price}
                     ...
                     {Math.round(props.price * 100)/100}
                </Text>
            </View>
        )
    }
    return(
        <View>
            <Text>
                Loading...
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    view:{
        backgroundColor: 'rgb(255, 255, 255)'
    },
    title:{
        fontSize: 20,
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 10,
    },
    logo:{
        maxHeight: 100,
        maxWidth: 100,
    },
    price: {
        fontSize: 20,
        paddingBottom: 5,
        marginTop: 10,
        alignSelf: 'center'
    }

})

export default Bitcoin