import React from "react";
import { View, TextInput, TouchableOpacity,  } from "react-native";
import { Entypo, Feather } from '@expo/vector-icons'
import styles from "./styles";

const FilterAd = () => {

  return (
    <View style={styles.filterSection}>
         <TouchableOpacity style={styles.filterButton}>
            <Feather name="filter" style={styles.searchIcon} size={20} color="#000"/>
          </TouchableOpacity>
    </View>
  );
};

export default FilterAd;