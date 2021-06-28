import React, {useState, Component} from 'react';
import { Modal, Text, View, StyleSheet,TextInput, Button , TouchableOpacity, Alert, Image} from 'react-native';


export default function OrderDetail({navigation,route}){
    const{Detail} = route.params;
    const{Total} = route.params;
    return(
        <View style={styles.frame}>
            <Text style={styles.titleText}>Your Order</Text>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{Detail}</Text>
            <View style={{flexDirection: 'row'}}>
                <Text style={styles.customiseText}> Total :</Text>
                <Text style={{fontSize: 18, fontWeight: 'bold', alignSelf:'center', marginHorizontal:10}}>{Total}/-</Text>
            </View>
            <TouchableOpacity style={styles.addButton}>
                        <Button title='Place Order' color='coral' onPress={()=> navigation.navigate('Thanks')}/>
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
    addButton:{
        width: 150,
        marginVertical:10,
        alignSelf: 'flex-end'
        
   },
    titleText:{
        marginVertical: 10,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    },
    customiseText:{
        fontSize:20,
        color: 'coral',
        fontWeight:'bold',
        alignSelf:'flex-start',
        marginVertical:20
    },
})