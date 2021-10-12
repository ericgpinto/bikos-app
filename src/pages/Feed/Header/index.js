import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import logoImg from '../../../assets/bikos-logo.png'
import { Entypo, Feather } from '@expo/vector-icons'

export default function Header(){
    return (
        <View style={styles.container}>
            <View style={styles.logoSection}>
                <Image 
                source={logoImg}
                style={styles.image}
                />
                <Text style={styles.logoText}>Bikos</Text>
            </View>
            <View style={styles.filterSection}>
                <TextInput 
                style={styles.input}
                placeholder="Encontre um biko"
                >
                <Feather name="search" style={styles.searchIcon} size={20} color="#000"/>
                </TextInput>
                <TouchableOpacity style={styles.filterButton}>
                    <Feather name="filter" size={20} color="#000"/>
                </TouchableOpacity>
            </View>
            {/* <View styles={styles.filterSection}>
                <TextInput 
                style={styles.input}
                placeholder="Encontre um biko"
                >
                <Feather name="search" style={styles.searchIcon} size={20} color="#000"/>
                </TextInput>
            </View> */}
        </View>
    );
};