import React, { useEffect, useState } from 'react';
import { FlatList, View} from 'react-native';
import Text from '../../components/Text';
import api from '../../services/api';
import AdsList from './AdsList';
import FilterAd from './FilterAd';
import SearchAd from './SearchAd';

export default function Feed(){
  return (
    <View>
      <SearchAd></SearchAd>
      <FilterAd></FilterAd>
      <Text></Text>
      <AdsList></AdsList>
    </View>
  );
}