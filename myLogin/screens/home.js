import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList, Button, CheckBox} from 'react-native';
import { GlobalStyle } from '../styles/global';
import Card from '../shared/card'

export default function Home({route,navigation}){
    const[items,setItems] = useState([
        {image: require('../assets/images/BBQ-Chicken-Pizza.jpg'), name: 'BBQ Chicken', price: 400, calories:450},
        {image: require('../assets/images/Butter_Puneer_Pizza.jpg'), name: 'Butter Paneer', price:450, calories:520},
        {image: require('../assets/images/Cheese_Corn_Pizza.jpg'), name: 'Cheese Corn' , price:400, calories:320},
        {image:require('../assets/images/Chicken_Tikka.jpg'), name: 'Chicken Tikka', price:400, calories:360},
        {image: require('../assets/images/Garlic_Chicken.jpg'), name: 'Garlic Chicken', price: 420, calories:500},
        {image: require('../assets/images/Onion_Capsicum_Pizza.jpg'), name: 'Onion Capsicum', price: 300, calories:250},
        {image: require('../assets/images/Onion_Pizza.jpg'), name: 'Onion',price: 250, calories:320},
        {image: require('../assets/images/Paneer_Tikka_Pizza.jpg'), name: 'Paneer Tikka', price: 360,calories:100},
        {image: require('../assets/images/Tandoori_Chicken.jpg'), name: 'Tandoori Chicken' , price: 560,calories:252},
        {image: require('../assets/images/Tandoori_Paneer_Pizza.jpg'), name: 'Tandoori Paneer', price: 500,calories:200}
    ])

     
    const{user} = route.params;

        return(
        <View style={GlobalStyle.header}>
            <View style={{flexDirection: 'row'}}>
                <Text style={GlobalStyle.headerText}>Welcome {user}</Text>
                
            </View>
            <FlatList
            numColumns={2}
            data={items}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>navigation.navigate('Details', {...item, userName:route.params.user})}>
                    <Card>
                        <View style={styles.imageView}>
                            <Image style={styles.image} source= {item.image}/>
                            <View style={{flex:1, flexDirection: 'column'}}>
                                <Text style={GlobalStyle.text}>{item.name}</Text>
                            </View>
                        </View>
                    </Card>
                </TouchableOpacity>
                              
            )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: 150,
        height:150,
    },
    imageView:{
        flex:1,
        margin: 20
    }
})