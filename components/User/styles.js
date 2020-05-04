import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    user:{
        flexDirection: 'row',
        backgroundColor: '#5592ff',
        borderRadius: 10,
        borderColor: '#3c46ff',
        marginBottom: 10,
        padding: 5,
        width:'100%',
        height:110,
    },
    avatar:{
        width:100,
        height:100,
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: '#000',
        borderColor: '#000000'
    },
    name:{
        fontSize:16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    username:{
        padding:2,
        textAlign: 'center',
        fontStyle:'italic',
        fontSize:15,
        // backgroundColor: '#08220e',
        borderRadius: 10,
        color: '#12154b',
    },

});

export default styles;