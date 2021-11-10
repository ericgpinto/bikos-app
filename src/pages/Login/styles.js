import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({

    container:{
        paddingHorizontal: 24,
        backgroundColor:"#F0F0F5"
    },

    imageBox:{
        alignItems:'center',
        justifyContent:'center',
        height:"30%",
    },

    image:{
        width:"45%",
        height:"75%"
    },

    socialLogin:{
        alignItems:'center'
    },

    googleLogin:{
        backgroundColor:"#22630C",
        height:40,
        width:280,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,
    },

    facebookLogin:{
        marginTop:15,
        backgroundColor:"#1F72D4",
        height:40,
        width:280,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7
    },

    textButton:{
        fontSize:15,
        fontWeight:"bold",
        color:"#FFF",
    },

    localLogin:{
        marginTop: 15,
        left: 20
    },

    textMessage:{
        fontSize:15,
    },

    input:{
        marginTop:10,
        height:35,
        borderBottomWidth: 1,
        width:272,
        borderBottomColor: "#C4C4C4"
    },

    localLoginButton:{
        marginTop:10,
        backgroundColor:"#22630C",
        height:40,
        width:280,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:7,

    },

    newAccount:{
        marginTop:20,
        flexDirection:'row',
        left: 20
    },

    buttonNewAccount:{
        left: 5,
    },

    textNewAccount:{
        fontSize:15,
        fontWeight:'bold',
        color:"#22630C"
    }
});

export default styles