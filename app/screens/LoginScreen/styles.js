import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    welcome_screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#917296',
    },
    welcome:{
        // fontStyle: 'italic',
        fontSize:50,
        color:'#2f1d39',
        fontWeight:'bold'
    },
    input:{
        padding:10,
        borderRadius:10,
        height:40,
        backgroundColor:'#39b8e2',
        borderColor : '#164858',
        borderWidth : 3,
        width:'75%'
    },
    row:{
        margin:30,
        flexDirection:'row',
        justifyContent: 'center',

    },
    label:{
        paddingTop:5,
        paddingRight:20,
        height: 40,
        fontSize: 20,
    },
    btn:{
        backgroundColor:'#ff2b63',
        color:'#fff',
        padding:10,
        borderRadius:8,
    }
});

export default styles;