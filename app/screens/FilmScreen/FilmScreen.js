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
import suggest from '../../img/suggest.png';
import FitImage from 'react-native-fit-image';
import styles from './styles'

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

export default FilmView;
