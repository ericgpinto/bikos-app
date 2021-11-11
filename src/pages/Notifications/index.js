import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function Notifications(){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Pagina Notifications</Text>
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