import React from 'react';
import { View, StyleSheet} from 'react-native';
import FilterAd from './FilterAd';
import SearchAd from './SearchAd';


export default function Feed(){
  return (
    <View>
      <SearchAd></SearchAd>
      <FilterAd></FilterAd>
    </View>
  );
}