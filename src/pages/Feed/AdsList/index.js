import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import api from '../../../services/api';
import styles from './styles';
import { Feather } from '@expo/vector-icons'

export default function AdsList(){

  const [ads, setAds] = useState([])

  async function loadAds(){
    const response = await api.get("/ads/feed");
    setAds(response.data)
  }

  useEffect(() => {
    loadAds();
  }, [])


  return (
    <View styles={styles.container}>
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
              onPress={() => navigateToDetail(incident)}
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