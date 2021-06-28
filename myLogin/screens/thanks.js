import React, {useState, Component} from 'react';
import { Modal, Text, View, StyleSheet,TextInput, Button , TouchableOpacity, Alert, Image} from 'react-native';

export default function Thanks({navigation}){
    return(
        <View style={styles.frame}>
            <Text style={styles.titleText}>Order placed</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Preparing your order</Text>

            <TouchableOpacity style={styles.addButton}>
                        <Button title='Order again' color='coral' onPress={()=> navigation.navigate('Home')}/>
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    frame:{
        flex: 1,
        backgroundColor:'#f2f5f4',
        padding: 30
    },
    titleText:{
        marginVertical: 10,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    addButton:{
        width: 150,
        marginVertical:10,
        alignSelf: 'flex-end'
        
   },
})