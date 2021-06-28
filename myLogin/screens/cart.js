import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,FlatList, Button, CheckBox} from 'react-native';
import { GlobalStyle } from '../styles/global';

export default function Cart({route}){
    return(
        <View style={styles.cartFrame}>
            <Text style={GlobalStyle.text}>Cart</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    cartFrame:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        backgroundColor:'#f2f5f4',
        margin:50
    }
})