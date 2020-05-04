import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image,Button, View, Text, TouchableHighlight, TextInput,ScrollView,ImageBackground} from 'react-native';
import {suggest} from '../../api/hobby';
import styles from "./styles";


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

export default Suggest_Screen;
