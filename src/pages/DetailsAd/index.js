import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Feather, Entypo } from '@expo/vector-icons'
import logoImg from '../../assets/bikos-logo.png'
import { useRoute } from '@react-navigation/core';

export default function DetailsAd(){

  const route = useRoute();
  const ads = route.params.ads;

  function applyToBiko(){
    
  }

  return(
    <View styles={styles.container}>
      <View style={styles.details}>
        <Text style={styles.detailsText}>Detalhes do Biko</Text>
        <Entypo name="location" style={styles.iconStyle} size={20} color="#000" />
        <Text style={styles.textValue}>{ads.city} - {ads.state}</Text>
        <Entypo name="publish" style={styles.iconStyle} size={20} color="#000" />
        <Text style={styles.textValue}>{ads.createdAt}</Text>
        <Entypo name="user" style={styles.iconStyle} size={20} color="#000" />
        <Text style={styles.textValue}>{ads.announcer.name}</Text>
      </View>
      <View style={styles.description}>
          <Text style={styles.descriptionText}>Descrição</Text>
          <Text style={styles.text}>
          {ads.description}
          </Text>
          <Text style={styles.actionArea}>{ads.category.actionArea.name}</Text>
          <Text style={styles.categoryName}>{ads.category.name}</Text>
          <Text style={styles.candidatesInformation}>
            6 prestadores já se candidataram.
          </Text>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.apply}>Aplicar-se</Text>
          </TouchableOpacity>
    </View>
    
  )
}