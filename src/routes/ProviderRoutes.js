import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import Ads from '../pages/Ads';
import Favorites from '../pages/Favorites';
import Feed from '../pages/Feed';
import { Entypo, Feather, FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Login from '../pages/Login';
import Notifications from '../pages/Notifications';
import Informations from '../pages/Informations';

const Tab = createBottomTabNavigator();

 export default function ProviderRoutes() {
     return(
         <Tab.Navigator
           screenOptions={{
               tabBarStyle:{
                   borderTopColor:'transparent'
               },
               tabBarActiveTintColor:"#000",
               tabBarStyle:{
                   paddingBottom:5,
                   paddingTop:5,
                   color:"#000"
               },
               
               headerStyle:{
                   backgroundColor:"#22630C",
                 
               },
            

           }}
         >

             <Tab.Screen 
             name="Explorar" 
             component={Feed}
             options={{
                 tabBarIcon:({size, color}) => (
                    <MaterialCommunityIcons name="briefcase-search" size={20} color={color} />
                 )
             }}

            />

             <Tab.Screen 
             name="Favoritos" 
             component={Favorites}
             options={{
                tabBarIcon:({size, color}) => (
                   <FontAwesome name="heart" size={20} color={color} />
                )
            }}
             />

             <Tab.Screen 
             name="Informações" 
             component={Informations}
             options={{
                tabBarIcon:({size, color}) => (
                   <FontAwesome name="history" size={20} color={color} />
                )
            }}
             />

            <Tab.Screen 
             name="Notificações" 
             component={Notifications}
             options={{
                tabBarIcon:({size, color}) => (
                   <Ionicons name="notifications" size={20} color={color} />
                )
            }}
             />

             <Tab.Screen 
             name="Perfil" 
             component={Login}
             options={{
                tabBarIcon:({size, color}) => (
                   <Entypo name="user" size={20} color={color} />
                )
            }}
             />

         </Tab.Navigator>
     )
 }