import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsAd from "../pages/DetailsAd";
import ProviderRoutes from "./provider.routes";
import ClientRoutes from "./client.routes"
import Main from "../pages/Main";
import Informations from "../pages/Informations";


const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return(
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor:"#22630C"
            }
        }}>
            <Stack.Screen name="Main" component={Main}/>
            
            <Stack.Screen
                name="Routes"
                component={ProviderRoutes}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="ClientRoutes"
                component={ClientRoutes}
                options={{ headerShown: false }}
            />
            
            <Stack.Screen name="DetailsAd" component={DetailsAd}/>

            
        </Stack.Navigator>
    )
}

export { MainStackNavigator }