import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableWithoutFeedback} from 'react-native';
import {send_request} from '../../api/accounts';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';


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

export default User;
