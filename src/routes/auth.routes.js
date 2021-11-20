import React from 'react';
import { View } from 'react-native';
import Login from '../pages/Login';

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export default function AuthRoutes(){
    return (
    <AuthStack.Navigator screenOptions={{headerStyle:{backgroundColor:"#22630C"}}}>
        <AuthStack.Screen name="Login" component={Login}/>
    </AuthStack.Navigator>
    )
}

