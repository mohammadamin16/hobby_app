import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    profile_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#071b08',
        padding:10
        },
    line:{
        backgroundColor: '#3b7b5e',
        width:'80%',
        height:10,
        borderRadius:10,
        margin:10,
    },
    title:{
        textAlign: 'center',
        fontSize:35,
        textDecorationLine: 'underline',
        color:'#b0ffab',
        fontWeight: 'bold',
        // fontStyle: 'underline'
    },
    poster:{
        margin:10,
    },
    btn:{
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ee6e73',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        right: 10,
    },
    row:{
        width: '100%',
        flexDirection:'row',
        // justifyContent:'center',
        // alignItems:'center'
    },
    label1:{
        flex:2,
        backgroundColor:'#64fffd',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    label2:{
        flex:6,
        backgroundColor:'#c9ffc3',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
});

export default styles;
