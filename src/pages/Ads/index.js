import React, { useContext, useRef, useState } from 'react';
import { View, Text, TouchableOpacity} from 'react-native';
import { Modalize } from 'react-native-modalize';
import styles from './styles';
import api from '../../services/api';
import { FlatList } from 'react-native-gesture-handler';
import { useEffect } from 'react/cjs/react.development';
import AuthContext from '../../contexts/auth';
import { Ionicons, Feather } from '@expo/vector-icons'; 

export default function Ads(){
  
  const { user, token } = useContext(AuthContext)
  const [data, setData] = useState([])
  const [applicants, setApplicants] = useState([])
  
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

    const res = await api.get(`/candidates/ads/${ads._id}`, {
      headers: { "Authorization":`Bearer ${token}`}
    })
    setApplicants(res.data);
    
  }

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.item__name}>{item.provider.name}</Text>
    </View>
  );

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
            data: applicants,
            renderItem: renderItem,
            keyExtractor: item => String(item._id)
          }} 
      />
        
   </View>
  )
}

