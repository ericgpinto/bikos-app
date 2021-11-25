import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';

const AuthContext = createContext({ signed: true});

export const AuthProvider = ({ children }) => { 

    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStorageData(){
            const storagedUser = await AsyncStorage.getItem('@RNAuth:user');
            const storagedToken = await AsyncStorage.getItem('@RNAuth:token');

            if(storagedUser && storagedToken){
                // api.defaults.headers['Authorization'] == `Bearer ${storagedToken}`;
                setToken(storagedToken)
                // console.log(storagedToken)
                setUser(JSON.parse(storagedUser))
                console.log(user)
                setLoading(false)
            }
        }
        loadStorageData();
    }, []);

    async function signIn(email, password) {
        const response = await api.post('/login',{
            email, password
        })
        // console.log(response.data)

        setUser(response.data.user)

        // api.defaults.headers['Authorization'] == `Bearer ${response.data.token}`;
        setToken(response.data.token)

        await AsyncStorage.setItem('@RNAuth:user', JSON.stringify(response.data.user));
        await AsyncStorage.setItem('@RNAuth:token', response.data.token);
    }

    function signOut(){
        AsyncStorage.clear().then(() => {
            setUser(null);
        })
    }

    return(
        <AuthContext.Provider value={{ signed: !!user, user, token, loading, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthContext;