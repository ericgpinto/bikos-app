import React, { useContext } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { Feather, Entypo } from '@expo/vector-icons'
import logoImg from '../../assets/bikos-logo.png'
import { useNavigation, useRoute } from '@react-navigation/core';
import api from '../../services/api';
import AuthContext from '../../contexts/auth';

export default function DetailsAd(){
  const navigation = useNavigation();
  const route = useRoute();

  const ads = route.params.ads;

  const { user, token } = useContext(AuthContext)

  function navigateBack() {
    navigation.goBack()
  }

  async function applyToBiko(ads){

    const body = {}
    const response = await api.post(`/ads/${ads._id}/candidates/${user._id}/apply`, body, {
      headers:{
        authorization: `Bearer ${token}`
      }
    })

    showAlert()
  }

  function showAlert(){
    Alert.alert(
      "Aviso",
      "Candidatura realizada com sucesso!"
    )

    navigateBack()
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
        <TouchableOpacity 
        onPress={() => applyToBiko(ads)}
        style={styles.button}
        >
          <Text style={styles.apply}>Aplicar-se</Text>
          </TouchableOpacity>
    </View>
    
  )
}