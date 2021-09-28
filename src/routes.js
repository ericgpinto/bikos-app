import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ads from './pages/Ads';
import Favorites from './pages/Favorites';
import Feed from './pages/Feed';
import Login from './pages/Login/styles';
import { Entypo, Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

 export default function Routes() {
     return(
         <Tab.Navigator
           screenOptions={{
               tabBarStyle:{
                   borderTopColor:'transparent'
               },
               tabBarActiveTintColor:"#000",
               tabBarStyle:{
                   paddingBottom:5,
                   paddingTop:5
               }
           }}
         >

             <Tab.Screen 
             name="Explorar" 
             component={Feed}
             options={{
                 tabBarIcon:({size, color}) => (
                    <Feather name="search" size={size} color={color} />
                 )
             }}

            />

             <Tab.Screen 
             name="Favoritos" 
             component={Favorites}
             options={{
                tabBarIcon:({size, color}) => (
                   <Entypo name="heart" size={size} color={color} />
                )
            }}
             />

             <Tab.Screen 
             name="Serviços" 
             component={Ads}
             options={{
                tabBarIcon:({size, color}) => (
                   <Entypo name="briefcase" size={size} color={color} />
                )
            }}
             />

             <Tab.Screen 
             name="Entrar" 
             component={Login}
             options={{
                tabBarIcon:({size, color}) => (
                   <Entypo name="login" size={size} color={color} />
                )
            }}
             />

         </Tab.Navigator>
     )
 }