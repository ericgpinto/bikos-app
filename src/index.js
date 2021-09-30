import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes';
import api from './services/api';

export default function App(){

  return(
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );

}