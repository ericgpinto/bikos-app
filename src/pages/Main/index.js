import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/bikos-logo.png'
import styles from './style';

export default function Main(){

    const navigation = useNavigation();

    function navigateToClient() {
        navigation.navigate('ClientRoutes');
    }

    function navigateToProvider() {
        navigation.navigate('Routes');
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.imageBox}>
                <Image source={logoImg} style={styles.image}/>
            </View>
            <View style={styles.textBox}>
                <Text style={styles.text}>Seja bem vindo!</Text>
                <Text style={styles.textBold}>O que gostaria de fazer?</Text>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity 
                style={styles.action}
                onPress={() => navigateToProvider()}
                >
                    <Text style={styles.actionText}>Prestar serviços</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.action}
                onPress={() => navigateToClient()}
                >
                    <Text style={styles.actionText}>Anunciar serviços</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};