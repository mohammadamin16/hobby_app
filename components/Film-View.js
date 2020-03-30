import React from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableHighlight, Image} from 'react-native';
import * as axios from 'axios';
import {search_film} from '../api/accounts';

export default class FetchExample extends React.Component {


    render(){
        return(
            <View style={styles.film_view}>
                <View style={styles.row}>
                    <Image
                        style={styles.poster}
                        source={{ uri: this.props.image }}
                        PlaceholderContent={<ActivityIndicator />}
                    />
                </View>

            <Text style={{}}>{this.props.title}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    film_view: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#44c660',
    },
    poster: {
        flex:1,
    },
    title:{
        color:'#3d31ff'
    },
    row:{
        // backgroundColor:'red',
        margin:30,
        flexDirection:'row',
    },
});