import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import Feed from '../pages/Feed';
import Login from '../pages/Login';
import { Entypo, Feather, MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons'
import Ads from '../pages/Ads';
import Favorites from '../pages/Favorites';
import Notifications from '../pages/Notifications';
import SearchProviders from '../pages/SearchProviders';

const Tab = createBottomTabNavigator();

export default function ClientRoutes() {
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
            component={SearchProviders}
            options={{
                tabBarIcon:({size, color}) => (
                   <MaterialCommunityIcons name="account-search" size={20} color={color}/>
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
            name="Serviços" 
            component={Ads}
            options={{
               tabBarIcon:({size, color}) => (
                  <Entypo name="briefcase" size={20} color={color} />
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