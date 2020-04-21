import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image,Button, View, Text, TouchableHighlight, TextInput,ScrollView,ImageBackground} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import {like_film} from '../api/accounts';
import remove_friend from '../img/remove_friend.png';
import add_friend from '../img/add_friend.png';
import {suggest} from '../api/accounts';



class Suggest_Screen extends Component {
    state = {
        title:'',
        text:'',
    };

    on_send = () => {
        this.props.navigation.goBack();
    };

    send_suggest = () => {
        console.log(this.props.route.params.film);
        suggest(this.props.route.params.user.username,this.props.route.params.film.imdbID, this.state.title, this.state.text,this.on_send)
    };
    render() {
        return (
            <ImageBackground source={{uri:this.props.route.params.film.poster}} style={styles.image}>
            <View style={{

                flex:1,
                backgroundColor: '#000000',
                padding: 5,
                alignItems: 'center',
                }}>

                <Text style={styles.suggest_on}>Suggest On:</Text>
                <Text style={styles.film_title}>{this.props.route.params.film.title}</Text>

                <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({title: text})}
                        placeholder="title, like : best movie ever!"
                />
                <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({text: text})}
                        placeholder="Suggestion body"
                />
                    <View style={{paddingTop:10}}>
                        <TouchableHighlight
                        style={styles.btn}
                        onPress={this.send_suggest}>
                            <Text> {'Suggest to Friends'}</Text>
                        </TouchableHighlight>
                    </View>
            </View>
            </ImageBackground>
        );
    }
}

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

export default Suggest_Screen;
