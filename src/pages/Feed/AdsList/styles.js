import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    backgroundColor:"#C4C4C4",
    width:375
  },

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },

  adsList: {
    marginTop: 60,
  },

  ad: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    left:33,
    width: "80%",
    height:215,
    marginBottom: 16,
  },

  adProperty: {
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold'
  },

  adValue: {
    marginTop: 8,
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
  },
});