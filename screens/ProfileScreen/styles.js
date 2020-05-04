import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    profile_screen: {
        flex: 1,
        backgroundColor: '#9483eb',
        padding:10,
        },
    label1:{
        margin:2,
        backgroundColor:'#64fffd',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    label2:{
        margin:2,
        backgroundColor:'#c9ffc3',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    label3:{
        margin:2,
        backgroundColor:'#ffb6a3',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    row:{
        flexDirection: 'row',
    },
    //New Styles:
    user_info:{
        flexDirection: 'column',
        flex:4,
        padding:10,
        // backgroundColor:'blue',
    },
    avatar_part:{
        flex:1,
        alignItems: 'center',
    },
    avatar:{
        alignSelf:'center',
        width:100,
        height:100,
        borderRadius: 75,
        borderColor:'#000',
        borderWidth: 2,
    },
    change_avatar_btn:{
        width:100,
        backgroundColor: '#77dcd1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom:10,
        marginTop:10,
    },
    logout_btn:{
        width:100,
        backgroundColor: '#af473a',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    text_part:{
        flex:2,
        alignItems: 'center'
        // backgroundColor:'red',
    },
    name:{
        textAlign: 'center',
        flex:1,
        fontSize:20,
        fontWeight: 'bold',
    },
    username:{
        flex:1,
        fontSize:15,
    },
    bio:{
        flex:1,
        fontSize:15,
        fontStyle:'italic',
    },
    line:{
        backgroundColor: '#31131d',
        width:'70%',
        height:2,
        borderRadius:10,
    },
    line2:{
        backgroundColor: '#31131d',
        width:'90%',
        height:2,
        borderRadius:10,
    },
    line1_part:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    friends_text:{
        fontStyle:'italic',
    }
});

export default styles;