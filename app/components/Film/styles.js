import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    film:{
        flexDirection: 'row',
        backgroundColor: '#56ff71',
        borderRadius: 10,
        borderColor: '#17a92f',
        borderWidth: 2,
        marginBottom: 10,
        padding: 5,
        width: '80%',
        height: 150,
    },
    row:{
        flexDirection:'row',
    },
    options:{
        flexDirection: 'row',
    },
    title:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    },
    info_row:{
        flexDirection: 'row',
        alignItems: 'center',
    },
    rate_number: {
        backgroundColor: '#b0af22',
        borderRadius: 10,
        padding:5,
    },
    year_number: {
        backgroundColor: '#606aee',
        borderRadius: 10,
        padding:5,
    }
});

export default styles;