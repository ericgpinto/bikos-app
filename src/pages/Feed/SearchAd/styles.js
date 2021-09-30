import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    searchSection: {
        flexDirection: 'row',
        width:233,
        height:52,
        justifyContent: 'center',
        alignItems: 'center',
        left:33,
        top:50,
        borderRadius:20,
        backgroundColor: '#F3B948',
    },

    searchIcon: {
        padding: 10,
    },

    input: {
        flex: 1,
        paddingLeft: 0,
        backgroundColor: '#F3B948',
        color: '#424242',
    }
});

export default styles;