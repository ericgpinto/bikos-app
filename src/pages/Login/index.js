import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styles';
import logoImg from '../../assets/bikos-logo.png'
import { useState } from 'react/cjs/react.development';
import api from '../../services/api';

export default function Login(){

  const [email, setEmail] = useState()
  const [password, setPassoword] = useState()

  async function handleSignIn() {
    const response = await api.post("/login",{
      email,
      password
    });

    console.log(response.data)
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image source={logoImg} style={styles.image}/>
      </View>
      <View style={styles.socialLogin}>
        <TouchableOpacity style={styles.googleLogin}>
          <Text style={styles.textButton}>Entrar com o Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.facebookLogin}>
          <Text style={styles.textButton}>Entrar com o Facebook</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.localLogin}>
        <Text style={styles.textMessage}>Ou entre com seu Email</Text>
        <TextInput 
        style={styles.input} 
        placeholder="E-mail" 
        placeholderTextColor="#000"
        onChangeText={setEmail}
        value={email}
        />
        <TextInput 
        style={styles.input} 
        placeholder="Senha"
        placeholderTextColor="#000"
        onChangeText={setPassoword}
        value={password}
        />
        <TouchableOpacity 
        style={styles.localLoginButton}
        onPress={handleSignIn}
        >
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newAccount}>
        <Text style={styles.textMessage}>Não possui conta?</Text>
        <TouchableOpacity style={styles.buttonNewAccount}>
          <Text style={styles.textNewAccount}>Criar conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}