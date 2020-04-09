import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image,Button, View, Text, TouchableHighlight, TextInput,ScrollView} from 'react-native';
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
        suggest(this.props.route.params.user.username,this.props.route.params.film.imdb_id, this.state.title, this.state.text,this.on_send)
    };
    render() {
        return (
            <View style={{
                flex:1,
                backgroundColor: '#5592ff',
                padding: 5,
                }}>
                {/*<ScrollView style={{*/}
                {/*    flex:1,*/}
                {/*    flexDirection:'column',*/}
                {/*}}*/}
                {/*contentContainerStyle={{ flexGrow: 1 }}*/}
                {/*>*/}
                <View style={{
                    alignItems: 'center',
                }}>
                <Text style={{fontSize:40,}}>Create Suggest</Text>
                <Text>{this.props.route.params.film.title}</Text>
                <Image
                    source={{uri:this.props.route.params.film.poster}}
                    style={styles.poster}
                />
                <Text style={styles.label}>Title:</Text>

                <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({title: text})}
                        placeholder="e.g : best movie ever!"
                />
                <Text style={styles.label}>Text:</Text>
                <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({text: text})}
                        placeholder="e.g : I strongly suggest you to don't miss one the funniest movie in the world!"
                />
                    <View style={{paddingTop:10}}>
                        <TouchableHighlight
                        style={styles.btn}
                        onPress={this.send_suggest}>
                            <Text> {'Suggest to Friends'}</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            {/*</ScrollView>*/}
            </View>
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
        backgroundColor:'#90f8ff',
        borderColor : '#202258',
        borderWidth : 3,
        width:'75%'
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
    }
});

export default Suggest_Screen;
