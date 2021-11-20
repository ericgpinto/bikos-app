import React from 'react';
import { View } from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import ProviderRoutes from './provider.routes';
import ClientRoutes from './client.routes';
import DetailsAd from '../pages/DetailsAd';
import Main from '../pages/Main';

const AppStack = createStackNavigator();

export default function AppRoutes(){
    return(
        <AppStack.Navigator screenOptions={{headerStyle:{backgroundColor:"#22630C"}}}>

            <AppStack.Screen name="Main" component={Main}/>
                    
            <AppStack.Screen
                name="Routes"
                component={ProviderRoutes}
                options={{ headerShown: false }}
            />

            <AppStack.Screen
                name="ClientRoutes"
                component={ClientRoutes}
                options={{ headerShown: false }}
            />

            <AppStack.Screen name="DetailsAd" component={DetailsAd}/>


        </AppStack.Navigator>
    )
}