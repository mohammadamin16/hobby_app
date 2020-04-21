import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableWithoutFeedback} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import {like_film} from '../api/accounts';
import remove_friend from '../img/remove_friend.png';
import add_friend from '../img/add_friend.png';
import {send_request} from '../api/accounts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            friend_state : false
        }
    }

    request_friendship =  () => {
        send_request(this.props.signed_user.username, this.props.user.username);
        if (this.state.friend_state){
            this.setState({friend_state:false});
        }else{
            this.setState({friend_state:true});
        }

    };

    render() {
        return (
            <View style={styles.user}>
                <View style={{flex:2}}>
                    <Text style={styles.name}>{this.props.user.name}</Text>
                    <View>
                    <Text style={styles.username}>@{this.props.user.username}</Text>
                    </View>
                    <TouchableWithoutFeedback
                        onPress={this.request_friendship}>
                            <View style={{backgroundColor: '#12154b', width:40, height:40, borderRadius:20, justifyContent: 'center', alignItems: 'center'}}>
                                <MaterialCommunityIcons
                                    name={this.state.friend_state ? 'account-clock-outline' : 'account-multiple-plus'}
                                    color={'#fff'} size={25} />
                            </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={{flex:1}}>
                    <Image
                        style={styles.avatar}
                        source={{uri:this.props.user.avatar}}
                        PlaceholderContent={<ActivityIndicator/>}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    user:{
        flexDirection: 'row',
        backgroundColor: '#5592ff',
        borderRadius: 10,
        borderColor: '#3c46ff',
        marginBottom: 10,
        padding: 5,
        width:'100%',
        height:110,
    },
    avatar:{
        width:100,
        height:100,
        borderRadius: 50,
        borderWidth: 2,
        backgroundColor: '#000',
        borderColor: '#000000'
    },
    name:{
        fontSize:16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    username:{
        padding:2,
        textAlign: 'center',
        fontStyle:'italic',
        fontSize:15,
        // backgroundColor: '#08220e',
        borderRadius: 10,
        color: '#12154b',
    },

});

export default User;
