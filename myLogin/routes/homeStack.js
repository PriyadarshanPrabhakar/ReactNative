import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../screens/login';
import Home from '../screens/home';
import Details from '../screens/details';
import Cart from '../screens/cart'
import OrderDetail from '../screens/orderDetail';
import Thanks from '../screens/thanks'

const Stack = createStackNavigator();

const LoginStack = (navigation) => {
  return (
      <Stack.Navigator screenOptions={{headerStyle:{backgroundColor:'coral',height:70}}}>
        <Stack.Screen 
          name="Login" 
          component={Login} 
          />
        <Stack.Screen
          name="Home"
          component={Home}/>
         
         <Stack.Screen
         name="Details"
         component={Details}/>

        <Stack.Screen
              name="Cart"
              component={Cart}
              />

        <Stack.Screen
              name="OrderDetail"
              component={OrderDetail}
              />
        <Stack.Screen
          name="Thanks"
          component={Thanks}
              />

      </Stack.Navigator>

      
  );
};

export const AppNavigator = () => (
    <NavigationContainer>
        <LoginStack />
      </NavigationContainer>
    );