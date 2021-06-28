import React, {useState, Component} from 'react';
import { Modal, Text, View, StyleSheet,TextInput, Button , TouchableOpacity, Alert, Image} from 'react-native';
import { GlobalStyle } from '../styles/global';


export default function Login({navigation}){
         
    const[modalOpen,setModelOpen] = useState(false);
    const[userName, setUserName] = useState('');
    const[password, setPassword] = useState('');
    
    const[userNameSU, setUserNameSU] = useState('');
    const[phoneSU, setPhoneSU] = useState('');
    const[emailSU, setEmailSU] = useState('');
    const[passwordSU, setPasswordSU] = useState('');

    const[user, setuser] = useState([
        {user: 'jeetu',phone:'8411938510',email:'jeetu@gmail.com', password:'123456'}
    ]);
    const loginPressed = () => {
        let isUser = false;
        user.map((userData) => {
            if(userData.user === userName && userData.password === password){
                isUser = true;
            }
        });

        if(isUser){
            navigation.navigate('Home', {user:userName, pass:password});
        }else{
            Alert.alert('Alert!', 'Wrong User',[{text: 'OK', 
            onPress: () => console.log('')}]);
        }
    }

    const signUpPressed = () => {
        if(userNameSU != '' && phoneSU != '' && emailSU != '' && passwordSU != ''){
            setuser((prevUser) => [{user:userNameSU, phone:phoneSU, email: emailSU, password: passwordSU}, ...prevUser]);
            setModelOpen(false);
            console.log(user);
        }else{
            Alert.alert('Alert!', 'All field are mendatory',[{text: 'OK', 
            onPress: () => console.log('alert closed')}]);
        }
    }
    return(
        <View style={GlobalStyle.frame}>

            <Modal visible={modalOpen} animationType='slide'>
                <View style={GlobalStyle.frame}>
                    <TextInput placeholder='User Name' style={GlobalStyle.entry} onChangeText={(val) => setUserNameSU(val)}/>
                    <TextInput placeholder='Phone' keyboardType='phone-pad' style={GlobalStyle.entry} onChangeText={(val) => setPhoneSU(val)}/>
                    <TextInput placeholder='Email' style={GlobalStyle.entry} onChangeText={(val) => setEmailSU(val)}/>
                    <TextInput placeholder='Password' secureTextEntry={true} style={GlobalStyle.entry} onChangeText={(val) => setPasswordSU(val)}/>
                    <TouchableOpacity style={GlobalStyle.button}>
                        <Button title='Sign up' color='coral' onPress={signUpPressed}/>
                    </TouchableOpacity>

                </View>
            </Modal>
            <Image style={{width:100, height:100, marginBottom:50}} source= {require('../assets/images/pizza_delivery.jpg')}/>
            <TextInput placeholder='User Name' style={GlobalStyle.entry} onChangeText={(value) => setUserName(value)}/>
            <TextInput placeholder='Password' secureTextEntry={true} style={GlobalStyle.entry} onChangeText={(val) => setPassword(val)}/>
            <TouchableOpacity style={GlobalStyle.button}>
                <Button title='Login' color='coral' onPress={loginPressed}/>
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <Text style={{marginTop:3, marginRight:5}}>Register and get Rs100 off</Text>
                <TouchableOpacity onPress={() => setModelOpen(true)}>
                    <Text style={GlobalStyle.textClick}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity onPress={()=> navigation.navigate('Home', {user:'Guest'})}>
                <Text style={styles.guest}>Guest</Text>

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    guest:{
        marginTop:100, 
        marginLeft:200, 
        color:'coral',
        fontSize: 18,
        fontWeight: 'bold'
    }
})