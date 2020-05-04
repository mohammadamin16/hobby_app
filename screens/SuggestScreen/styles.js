import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    poster:{
        width:'30%',
        height:'30%',
        margin:10,
    },
    input:{
        padding:10,
        borderRadius:10,
        height:40,
        backgroundColor:'#f7ffb0',
        borderColor : '#583d16',
        borderWidth : 2,
        width:'75%',
        margin: 10,
    },
    label1:{
        paddingTop:10,
        paddingRight:20,
        height: 40,
        fontSize: 20,
    },
    btn:{
        backgroundColor: '#fff',
        padding:5,
        margin:10,
        borderRadius:15,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.7
    },
    suggest_on:{
        fontSize: 20,
        color:'#fff',
        fontStyle: 'italic'
    },
    film_title:{
        color:'#192627',
        fontWeight: 'bold',
        backgroundColor: '#8bd8de',
        borderRadius: 10,
        padding:5
    }
});

export default styles;