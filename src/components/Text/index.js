import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';


const TextSection = () => {
  return (
    <View style={styles.textView}>
        <Text style={styles.text}>Total de 5 serviços encontrados</Text>
    </View>
  
  );
}

export default TextSection;