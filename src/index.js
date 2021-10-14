import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import api from './services/api';
import { DetailsAdStackNavigator, MainStackNavigator } from './routes/StackNavigator';

export default function App(){

  return(
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );

}