import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { Feather, Entypo } from '@expo/vector-icons'
import Header from '../../components/Header';

// import { Container } from './styles';

export default function DetailsAd(){
  return(
    <View style={styles.container}>
      <View>
        <Header></Header>
      </View>
      <Text>
        <Entypo name="location" size={16} color="#000" />
        <Text> Porto Alegre</Text>
      </Text>
      <Text>
        <Entypo name="publish" size={16} color="#000" />
        <Text> Porto Alegre</Text>
      </Text>
      <Text>
        <Entypo name="user" size={16} color="#000" />
        <Text> Porto Alegre</Text>
      </Text>
      
    </View>
  )
}