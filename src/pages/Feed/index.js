import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import api from '../../services/api';
import styles from './styles';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';
import logoImg from '../../assets/bikos-logo.png'

export default function AdsList(){

  const [ads, setAds] = useState([])

  async function loadAds(){
    const response = await api.get("/ads/feed");
    setAds(response.data)
  }

  const navigation = useNavigation();

  function navigateToDetail(ads) {
    navigation.navigate('DetailsAd', { ads });
  }

  useEffect(() => {
    loadAds();
  }, [])


  return (
    <View styles={styles.container}>
        <View style={styles.header}>
            <Image source={logoImg} style={styles.image}/>
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
        <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}>1 Bikos</Text> encontrados.
        </Text>
        <FlatList
          data={ads}
          style={styles.adsList}
          keyExtractor={ads => String(ads._id)}
          renderItem={({ item: ads }) => (
            <SafeAreaView style={styles.ad}>
              <Text style={styles.adProperty}>Categoria</Text>
              <Text style={styles.adValue}>{ads.category.name}</Text>
              <Text style={styles.adProperty}>Localização</Text>
              <Text style={styles.adValue}>{ads.city}, {ads.state}</Text>
              <TouchableOpacity 
                style={styles.detailsButton} 
                onPress={() => navigateToDetail(ads)}
              >
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#22630C" />            
              </TouchableOpacity>
            </SafeAreaView>
          )}
        />
    </View>
  );
}