import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    
    list:{
        marginTop: 32,
    },

    listItem:{
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 16,
    },

    listText:{
      marginTop: 8,
      fontSize: 15,
      marginBottom: 15,
      color: '#737380'
    },

    adProperty: {
      fontSize: 14,
      color: '#41414d',
      fontWeight: 'bold'
    },

    buttonArea:{
      position:'absolute',
      marginLeft:280,
      marginTop:350
    },

    addButton:{
      backgroundColor:"#F3B948",
      borderRadius:30,
      width:60,
      height:60,
      alignItems:'center',
      justifyContent:'center',
    },

    detailsButton: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
  
    detailsButtonText: {
      color: '#22630C',
      fontSize: 15,
      fontWeight: 'bold'
    },

    botao:{
      alignItems:'center',
      justifyContent:'center',
      padding:15,
      borderRadius:7
    },

    item:{
      padding:15,
      borderBottomColor: '#f9f9f9',
      borderBottomWidth: 1,
    },

    item1:{
      flexDirection:'row',
      justifyContent:'space-around',
    },

    item__name: {
      right:40,
      fontSize: 16,

    },

    chooseButton:{
      marginTop:10,
      backgroundColor:"#22630C",
      alignItems:'center',
      justifyContent:'center',
      width:180,
      height:25,
      borderRadius:5,
    },

    text:{
      fontSize:15,
      color:"#FFFFFF"
    }
   
  })

export default styles;