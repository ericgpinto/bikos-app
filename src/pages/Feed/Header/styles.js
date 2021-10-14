import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container:{
        height: 180,
    
    },

    logoSection:{
        flexDirection:'row',
        height:80,
    },

    filterSection:{
        flexDirection:'row',
        top:5,
        height:80
    },

    logoText:{
        fontSize:16,
        left: 30,
        top: 35,
    },

    input:{
        backgroundColor:"#FEE2AB",
        height:50,
        width: "60%",
        borderRadius:8,
        left: 32,
    },

    image:{
        left:32,
        top: 20,
        width: 54,
        height:46
    },

    searchIcon:{
        
    },

    filterButton:{
        backgroundColor:"#FEE2AB",
        left: 50,
        height: 50,
        width: 55,
        borderRadius:8,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default styles;