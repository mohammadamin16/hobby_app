import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button} from 'react-native';

import add_friend from '../img/add_friend.png'
import remove_friend from '../img/remove_friend.png'


class UserView extends Component {
    render() {
        return (
            <View style={styles.profile_screen}>
                <Image
                    style={{width:100, height:100}}
                    source={{uri:this.props.route.params.user.avatar}}
                />
                <View style={styles.line} />
                <Text>Username: {this.props.route.params.user.username}</Text>
                <Text>name: {this.props.route.params.user.name}</Text>
                <Text>Bio: {this.props.route.params.user.bio}</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    profile_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor:'#90f8ff',
        },
    line:{
        backgroundColor: '#ffbf26',
        width:'80%',
        height:10,
        borderRadius:10,
    }
});

export default UserView;
