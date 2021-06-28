import React, {useState} from 'react';
import { Text, View, Button , TouchableOpacity, Image, StyleSheet} from 'react-native';
import { GlobalStyle } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';

export default function Details({route,navigation}){
    let effectivePrice = 0;
    const{image} = route.params;
    const{name} = route.params;
    const{price}= route.params;
    const{calories} = route.params;
    const{userName} = route.params;
    const[cheeseBurstEnable, setCheeseBurstEnable] = useState(false);
    const[doubleCheeseEnable, setDoubleCheeseEnable] = useState(false);
    const[thinCrustEnable, setThinChrustEnable] = useState(false);
    
    let nameCheck = route.params.userName;

    if(nameCheck != 'Guest'){
        effectivePrice = (route.params.price) - 100;
    }else{
        effectivePrice = route.params.price;
    }
     const [totalPrice, setTotalPrice] = useState(effectivePrice);
     const [orderDetail, setOrderDetail] = useState(route.params.name);

    const cheeseBurstPressed = () => {
        setTotalPrice(totalPrice + 80); 
        
        setOrderDetail(orderDetail + ' + ' + 'Chees Burst');
        setDoubleCheeseEnable(true);
        setThinChrustEnable(true)
        setCheeseBurstEnable(true);
    }

    const doubleCheesePressed = () => {
        setTotalPrice(totalPrice + 60);
        setOrderDetail(orderDetail + ' + ' + 'Double Cheese');
        setCheeseBurstEnable(true);
        setDoubleCheeseEnable(true);
    }

    const thinCrustPressed = () => {
        setTotalPrice(totalPrice + 50);
        setOrderDetail(orderDetail + ' + ' + 'Thin Crust');
        setCheeseBurstEnable(true);
        setThinChrustEnable(true);
    }

    const addCartPressed = ()=> {
       
    }
    return(
        <View style={styles.detailFrame}>
            <View style={styles.imageView}>
                <Text style={styles.titleText}>{name}</Text>
                <Image style={styles.image} source={image}/>
                <Text style={styles.price}>{effectivePrice}/-</Text>
            </View>
                                       

                <View style={styles.customise}>
                    <Text style={styles.customiseText}>Customise</Text>
                    <View style={styles.detailView}>
                        <Text style={styles.price}> Cheese Burst (80/-)</Text>
                        <TouchableOpacity opa disabled={cheeseBurstEnable} style={{alignSelf:'center'}} onPress= {cheeseBurstPressed}>
                            <Ionicons name="md-add" size={24} color="black" style={{alignSelf: 'center', marginLeft:150}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailView}>
                        <Text style={styles.price}> Double Cheese (60/-)</Text>
                        <TouchableOpacity disabled={doubleCheeseEnable} style={{alignSelf:'center'}} onPress={doubleCheesePressed}>
                            <Ionicons name="md-add" size={24} color="black" style={{alignSelf: 'center', marginLeft:138}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailView}>
                        <Text style={styles.price}> Thin Crust (50/-)</Text>
                        <TouchableOpacity disabled={thinCrustEnable} style={{alignSelf: 'center'}} onPress={thinCrustPressed}>
                            <Ionicons name="md-add" size={24} color="black" style={{alignSelf: 'center', marginLeft:173}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.detailView}>
                        <Text style={styles.customiseText}> Total :</Text>
                        <Text style={{fontSize:18, fontWeight: 'bold', alignSelf: 'flex-start', marginTop: 2, marginLeft:5}}> {totalPrice}/-</Text>
                    </View>
                </View>
                                
                <TouchableOpacity style={styles.addButton}>
                        <Button title='Continue' color='coral' onPress={()=> navigation.navigate('OrderDetail' , {Detail:orderDetail, Total: totalPrice})}/>
                </TouchableOpacity>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    imageView:{
        flex:1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    },
    customiseText:{
        fontSize:20,
        color: 'coral',
        fontWeight:'bold',
        alignSelf:'flex-start'
    },
    customise:{
        flex:1,
        marginVertical: 10,
    },
    price:{
        fontSize:18,
        fontWeight: 'bold',
        alignSelf:'flex-start',
        marginVertical:10
    },
    detailFrame:{
        flex: 1,
        backgroundColor:'#f2f5f4',
        paddingHorizontal: 30
    },
    image:{
        height:250,
        width:150,
        aspectRatio: 1
    },
    detailView:{
        flex:1,
        flexDirection: 'row',
        marginVertical: 10,
        maxHeight: 50,
    },
    detailLeft:{
        flex:1,
        alignContent:'flex-start'
    },
    addButton:{
         width: 150,
         marginVertical:10,
         alignSelf: 'flex-end'
         
    },
    detailRight:{
        alignSelf: 'center',
    },
    titleText:{
        
        marginVertical: 10,
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'flex-start'
    }
})