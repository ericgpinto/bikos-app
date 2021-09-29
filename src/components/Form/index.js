import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons'

const UselessTextInput = () => {

  return (
    <View style={styles.searchSection}>
        <Feather name="search" style={styles.searchIcon} size={20} color="#000"/>
        <TextInput
            style={styles.input}
            placeholder="Encontre um biko"
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"
        />
    </View>
  );
};

const styles = StyleSheet.create({

    searchSection: {
    flexDirection: 'row',
    width:233,
    height:52,
    justifyContent: 'center',
    alignItems: 'center',
    left:33,
    top:50,
    borderRadius:20,
    backgroundColor: '#F3B948',
},
searchIcon: {
    padding: 10,
},
input: {
    flex: 1,
    paddingLeft: 0,
    backgroundColor: '#F3B948',
    color: '#424242',
},
});

export default UselessTextInput;