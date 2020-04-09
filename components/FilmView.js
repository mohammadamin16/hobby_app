import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    Image,
    View,
    Text,
    Button,
    TouchableNativeFeedback,
    TouchableHighlight,
    ToastAndroid,
} from 'react-native';

class FilmView extends Component {
    onSuggest = () => {
        ToastAndroid.show("Suggested!", ToastAndroid.SHORT);
        this.props.navigation.navigate("SuggestScreen", {film:this.props.route.params.film})
    };
    render() {
        return (
            <View style={styles.profile_screen}>
                <Image
                    style={styles.poster}
                    source={{uri:this.props.route.params.film.poster}}
                    />
                <Text style={styles.title}>{this.props.route.params.film["title"]}</Text>
                <View style={styles.line} />
                <View style={styles.row}>
                    <View style={{flex:1}}>
                        <Text style={styles.label1}>Year :</Text>
                        <Text style={styles.label1}>Rate :</Text>
                        <Text style={styles.label1}>Director :</Text>
                    </View>
                    <View style={{flex:3}}>
                        <Text style={styles.label2}>{this.props.route.params.film["year"]}</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["rating"]}</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["director"]}</Text>
                    </View>
                </View>




                <TouchableHighlight
                style={styles.btn}
                underlayColor={'#fff'}
                onPress={this.onSuggest}>
                    <Text>Suggest!</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profile_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4e4283',
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
        fontSize:15,
        color:'#fff'
    },
    poster:{
        width:'50%',
        height:'50%',
        margin:10,
    },
    btn:{
        backgroundColor:'#c85733',
        borderColor:'#312e0f',
        borderWidth:2,
        borderRadius:10,
        padding:8,
        margin:5,
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    label1:{

        backgroundColor:'#64fffd',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    label2:{
        backgroundColor:'#c9ffc3',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
});

export default FilmView;
