import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#11ff38',
        borderRadius: 5,
        borderColor: '#155924',
        borderWidth:2.5,
        margin: 10,
        width:'80%'
    },
    poster:{
        backgroundColor: '#000000',
        width:100,
        height:100,
        alignSelf:'center',
        borderRadius: 50,
        borderColor: '#155924',
        borderWidth: 2
    },
    username:{
        padding:5,
        textAlign: 'center',
        fontStyle:'italic',
        backgroundColor: '#08220e',
        borderRadius: 10,
        color: '#fff'
    },
    name:{
        padding:0,
        fontSize:20
    }
});

export default styles;