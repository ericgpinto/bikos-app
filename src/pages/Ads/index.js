import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import { Modalize } from 'react-native-modalize';

export default function Ads(){

  return(
   <View style={styles.container}>
     <TouchableOpacity>
       <Text style={{fontSize:25}}>OI</Text>
     </TouchableOpacity>
   </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  button:{
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    borderRadius:7
  }
})
