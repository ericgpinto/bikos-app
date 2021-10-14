import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
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
      width: 65,
      height:46
  },

  headerText: {
    fontSize: 15,
    color: '#737380',
    top: 20,
    left:32,
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  filterSection:{
    flexDirection:'row',
    top:15,
    height:80
},

input:{
    backgroundColor:"#FEE2AB",
    height:50,
    width: "60%",
    borderRadius:8,
    left: 32,
},

filterButton:{
    backgroundColor:"#FEE2AB",
    left: 50,
    height: 50,
    width: 55,
    borderRadius:8,
    justifyContent: 'center',
    alignItems: 'center',
},

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  adsList: {
    marginTop: 50,
  },

  ad: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    left:33,
    width: "80%",
    height:"90%",
    marginBottom: 16,
  },

  adProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  adValue: {
    marginTop: 5,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380'
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
  }
});