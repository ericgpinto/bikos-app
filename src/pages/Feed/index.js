import React, { useEffect, useState } from 'react';
import { FlatList, View} from 'react-native';
import Text from '../../components/Text';
import api from '../../services/api';
import AdsList from './AdsList';
import Header from './Header';

export default function Feed(){
  return (
    <View>
      <Header></Header>
      <Text></Text>
      <AdsList></AdsList>
    </View>
  );
}