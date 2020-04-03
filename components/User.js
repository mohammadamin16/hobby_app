import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import {like_film} from '../api/accounts';
import remove_friend from '../img/remove_friend.png';
import add_friend from '../img/add_friend.png';
import {send_request} from '../api/accounts';



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
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#5592ff',
                borderRadius: 10,
                borderColor: '#3c46ff',
                marginBottom: 10,
                padding: 5,
                }}>
            <View style={{flex: 3, justifyContent: 'space-between'}}>
                <Text>{this.props.user.name}</Text>
                <TouchableHighlight onPress={() => {this.request_friendship()}}>
                    <Image
                    style={{flex: 1, width: 50, height: 50}}
                    // source={this.state.like_status ?  like : dislike}
                    source={this.state.friend_state ? remove_friend : add_friend}

                />
                </TouchableHighlight>

                </View>
                <Image
                    style={{flex: 1, }}
                    source={{uri:this.props.user.avatar}}
                    PlaceholderContent={<ActivityIndicator/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
//    styles should be here...

});

export default User;
