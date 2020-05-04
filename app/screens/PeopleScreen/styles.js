import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    people_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4492c6',
    },
    input:{
        flex:6,
        padding:10,
        borderRadius:10,
        height:40,
    },
    row:{
        // backgroundColor:'red',
        margin:30,
        flexDirection:'row',
    },
    label1:{
        paddingTop:10,
        paddingRight:20,
        height: 40,
        fontSize: 20,
    },
    btn:{
        flex:1,
        backgroundColor:'#111330',
        color:'#fff',
        padding:10,justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        height:40,
        width:60
    },

    searchbar:{
        flexDirection: 'row',
        backgroundColor:'#316a90',
        borderColor : '#202258',
        borderWidth : 3,
        width:'100%',
        borderRadius: 7,
    }
});

export default styles; 
