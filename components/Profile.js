import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text} from 'react-native';

// this.props.route.params.user.username
class Profile extends Component {
    render() {
        console.log(this.props.route.params.user.avatar);
        return (
            <View style={styles.profile_screen}>
                <Image
                    style={{width:100, height:100}}
                    source={{uri:this.props.route.params.user.avatar}}
                />
                <View style={styles.line} />
                <Text>Username: {this.props.route.params.user.username}</Text>
                <Text>name: {this.props.route.params.user.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profile_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4e4283',
        },
    line:{
        backgroundColor: '#ffbf26',
        width:'80%',
        height:10,
        borderRadius:10,
    }
});

export default Profile;
