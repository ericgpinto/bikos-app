import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Form from '../../components/Form';

// import { Container } from './styles';

export default function Feed(){
  return (
    <View>
      <Form>Pagina Feed</Form>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },

  text:{
    fontSize: 25,
    fontWeight:"bold"
  }
})