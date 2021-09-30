import React from "react";
import { View, TextInput, TouchableOpacity,  } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons'
import styles from "./styles";

const SearchAd = () => {

  return (
    <View style={styles.searchSection}>
        <Feather name="search" style={styles.searchIcon} size={20} color="#000"/>
        <TextInput
            style={styles.input}
            placeholder="Encontre um biko"
            placeholderTextColor="#000"
            underlineColorAndroid="transparent"/>
    </View>
  );
};

export default SearchAd;