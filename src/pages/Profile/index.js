import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AuthContext from '../../contexts/auth';
import styles from './styles';

export default function Profile(){

    const { signOut } = useContext(AuthContext)

    function handleSignOut(){
      signOut();
    }

    return(
        <View style={styles.container}>
          <TouchableOpacity onPress={handleSignOut}>
            <Text>Sign Out</Text>
          </TouchableOpacity>
        </View>
       )
};