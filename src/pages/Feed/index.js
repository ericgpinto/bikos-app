import React from 'react';
import { View} from 'react-native';
import Text from '../../components/Text';
import FilterAd from './FilterAd';
import SearchAd from './SearchAd';


export default function Feed(){
  return (
    <View>
      <SearchAd></SearchAd>
      <FilterAd></FilterAd>
      <Text></Text>
    </View>
  );
}