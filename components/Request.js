import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    Image,
    View,
    Text,
    TouchableHighlight,
    TouchableWithoutFeedback,
    Button
} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import {like_film} from '../api/accounts';
import remove_friend from '../img/remove_friend.png';
import add_friend from '../img/add_friend.png';
import {send_request, accept_request, deny_request} from '../api/accounts';



class Request extends Component {
    constructor(props){
        super(props);
        this.state = {
            decided : false
        }
    }

    on_accept = () => {
        accept_request(this.props.signed_user.username, this.props.user.username)
    };

    on_deny = () => {
        deny_request(this.props.signed_user.username, this.props.user.username)
    };

    request_friendship =  () => {
        send_request(this.props.signed_user.username, this.props.user.username);
        if (this.state.decided){
            this.setState({friend_state:false});
        }else{
            this.setState({friend_state:true});
        }
    };

    render() {
        return (
               <View style={{
                backgroundColor: '#11ff38',
                borderRadius: 5,
                borderColor: '#155924',
                borderWidth:2.5,
                margin: 10,
                }}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems:'center'}}>
                    <View style={[styles.row, {justifyContent: 'space-between',padding: 5}]}>
                        <Image
                            style={{width:70, height:70, alignSelf:'center'}}
                            source={{uri:this.props.user.avatar}}/>
                        <Text
                            style={{
                                padding:10,
                            }}>
                        {this.props.user.name}</Text>
                    </View>
                    
                    <View style={styles.line} />
                    <View style={{flexDirection: 'row', padding: 5}}>
                        <Button
                            style={{backgroundColor:'red'}}
                            title={'Accept'} onPress={this.on_accept} />
                        <Button title={'Deny'} onPress={this.on_deny} />
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
//    styles should be here...

});

export default Request;
