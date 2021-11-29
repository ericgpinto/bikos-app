import React, { useContext, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Linking} from 'react-native';
import { Modalize } from 'react-native-modalize';
import styles from './styles';
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react/cjs/react.development';
import AuthContext from '../../contexts/auth';
import { Ionicons, Feather, FontAwesome } from '@expo/vector-icons'; 

export default function Ads(){
  
  const { user, token } = useContext(AuthContext)
  const [data, setData] = useState([])
  const [dado, setDado] = useState([])
  
  const modalizeRef = useRef(null)

  useEffect(() => {
    loadAds();
  }, []);

  async function loadAds(){

    const response = await api.get(`/ads/${user._id}`, {
      headers: { "Authorization":`Bearer ${token}`}
    })

    setData(response.data);
  }

  async function onOpen(ads){
    modalizeRef.current?.open();

    const res = await api.get(`/ads/${ads._id}/candidates`, {
      headers: { "Authorization":`Bearer ${token}`}
    })
    setDado(res.data);
  }

  function sendWhatsapp(element){
    console.log(element)
    Linking.openURL(`whatsapp://send?phone=${element.user.phone}`)
  }

  const renderItem = ( {item}) => {
    return item.applicants.map((element) => {
      return (
        <View key={element._id} style={styles.item}>
          <View style={styles.item1}>
            <Text style={styles.item__name}>{element.user.phone}</Text>
            <TouchableOpacity onPress={()=> sendWhatsapp(element)}>
              <FontAwesome name="whatsapp" size={24} color="black"/>
            </TouchableOpacity>
          </View>
          <View>
          <TouchableOpacity style={styles.chooseButton}>
            <Text style={styles.text}>Escolher Prestador</Text>
          </TouchableOpacity>
          </View>
        </View>
      );
    });
  };

  return(
   <View style={styles.container}>
      <FlatList
          data={data}
          style={styles.list}
          contentContainerStyle={{ marginHorizontal: 30}}
          keyExtractor={ads => String(ads._id)}
          renderItem={({ item: ads }) => (
            <View style={styles.listItem}>
               <Text style={styles.adProperty}>Categoria</Text>
              <Text style={styles.listText}>{ads.category.name}</Text>
              <Text style={styles.adProperty}>Localização</Text>
              <Text style={styles.listText}>{ads.city}, {ads.state}</Text>
              <TouchableOpacity 
                style={styles.detailsButton} 
                onPress={() => onOpen(ads)}
              >
                <Text style={styles.detailsButtonText}>Ver Candidatos</Text>
                <Feather name="arrow-right" size={16} color="#22630C" />            
              </TouchableOpacity>
            </View>
          )}
      />
      <View style={styles.buttonArea}>
        <TouchableOpacity style={styles.addButton}>
        <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>


      <Modalize
          ref={modalizeRef}
          snapPoint={350}
          modalHeight={400}
          flatListProps={{
            data: dado,
            renderItem: renderItem,
            keyExtractor: item => String(item._id)
          }} 
      />
        
   </View>
  )
}

