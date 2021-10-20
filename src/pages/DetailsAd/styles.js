import { StyleSheet } from "react-native";
import Constants from 'expo-constants';

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        
      },
      
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
    
      image:{
          left:20,
          top:10,
          width: 65,
          height:46
      },

      details:{
        top:20,
        left: 40,
      },

      detailsText:{
        fontSize: 18,
        fontWeight:"bold",
        justifyContent:"center",
        alignItems:"center",
      },

      textValue:{
        flexDirection:'row',
        left: 30,
        fontSize: 15,
      },

      iconStyle:{
        flexDirection:'row',
        top:20,
      },

      description:{
          top:40,
          left:40,
      },

      descriptionText:{
        fontWeight:"bold",
        fontSize: 18,
      },

      text:{
        top: 10,
        width: "80%",
        color:"#686868",
        fontSize: 15,
      },

      actionArea:{
        top:40,
        fontSize: 15,
        color:"#FFFFFF",
        width: "20%",
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:"#345C8B",
        borderRadius:5
      },

      categoryName:{
        top:20,
        flexDirection:'row',
        fontSize: 15,
        left: 80,
        color:"#FFFFFF",
        width: "20%",
        textAlign:'center',
        justifyContent:'center',
        backgroundColor:"#345C8B",
        borderRadius:5
      },

      candidatesInformation:{
        fontSize: 15,
        color: '#000',
        fontWeight:'bold',
        top: 50,
      },

      button:{
        top:120,
        left:40,
        width:"80%",
        height:30,
        backgroundColor: "#22630C",
        borderRadius:15
      },

      apply:{
        color:"#FFFFFF",
        textAlign:'center',
        justifyContent:'center',
        fontSize:18
      }
});

export default styles;