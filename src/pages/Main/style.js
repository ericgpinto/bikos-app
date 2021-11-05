import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        backgroundColor:"#F0F0F5"
    },

    imageBox:{
        alignItems:'center',
        justifyContent:'center',
        height:"50%",
    },

    image:{
        width:"65%",
        height:"60%"
    },

    text:{
        fontSize:15
    },

    textBold:{
        fontSize:15,
        fontWeight: 'bold'
    },


    actions:{
        marginTop:16,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    action:{
        backgroundColor: '#FEE2AB',
        borderRadius: 8,
        height: "78%",
        width: '48%',
        justifyContent: 'center',
        
    },

    actionText: {
        color: '#000',
        fontSize: 15,
        fontWeight: 'bold',
        top:40,
        left: 10

      }

});

export default styles