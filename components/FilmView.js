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
    ScrollView,
} from 'react-native';
import suggest from '../img/suggest.png';
import FitImage from 'react-native-fit-image';


class FilmView extends Component {
    onSuggest = () => {
        this.props.navigation.navigate("SuggestScreen", {film:this.props.route.params.film})
    };
    info = () => {
        return ([
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label1}>Year :</Text>
                    <Text style={styles.label2}>{this.props.route.params.film["year"]}</Text>
                </View>
            ]
        );
    };

    render() {
        return (
            <View style={styles.profile_screen}>

                <View>
                        <Text style={styles.title}>{this.props.route.params.film["title"]}</Text>
                    </View>
                <View style={{flex:3, width:'50%'}}>
                    <FitImage
                    // PlaceholderContent={<ActivityIndicator/>}
                    originalWidth={1}
                    originalHeight={1}
                    style={{borderRadius: 10,}}
                    source={{uri:this.props.route.params.film.poster}}/>
                    {/*<View style={styles.line} />*/}
                </View>
                <ScrollView style={{width:'100%', flex:3,}}>
                <View style={styles.row}>
                        <Text style={styles.label1}>Year :</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["year"]}</Text>
                </View>
                <View style={styles.row}>
                        <Text style={styles.label1}>Director :</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["director"]}</Text>
                </View>
                <View style={styles.row}>
                        <Text style={styles.label1}>Country :</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["countries"]}</Text>
                </View>
                <View style={styles.row}>
                        <Text style={styles.label1}>Cast :</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["cast"]}</Text>
                </View>
                <View style={styles.row}>
                        <Text style={styles.label1}>Rating :</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["rating"]}</Text>
                </View>
                <View style={styles.row}>
                        <Text style={styles.label1}>Writer :</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["writer"]}</Text>
                </View>
                <View style={styles.row}>
                        <Text style={styles.label1}>Summery :</Text>
                        <Text style={styles.label2}>{this.props.route.params.film["synopsis"]}</Text>
                </View>

                </ScrollView>

            <TouchableHighlight
                style={styles.btn}
                underlayColor={'#fff'}
                onPress={this.onSuggest}>
                    <Image source={suggest}
                        style={{width:50, height:50}}
                    />
                {/*<Text>Suggest!</Text>*/}
            </TouchableHighlight>

            </View>
        );
    }
}

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

export default FilmView;
