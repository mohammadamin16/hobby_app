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
import {send_request, accept_request, deny_request} from '../api/accounts';
import deny from '../img/deny.png';
import accept from '../img/accept.png';


class Request extends Component {
    constructor(props){
        super(props);
        this.state = {
            decided : false
        }
    }

    on_accept = () => {
        accept_request(this.props.signed_user.username, this.props.user.username);
        this.props.reload();
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

    go_to_user = () => {
        this.props.navigation.navigate('People', {
            screen: 'UserView',
            params: {user: this.props.user},
        });
    };

    render() {
        return (
               <View style={styles.body}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems:'center'}}>
                    <View style={[styles.row, {justifyContent: 'space-between',padding: 5}]}>
                        <TouchableWithoutFeedback
                            onPress={this.go_to_user}>
                        <Image
                            style={styles.poster}
                            source={{uri:this.props.user.avatar}}/>
                        </TouchableWithoutFeedback>
                    </View>
                        <Text style={styles.username}>@{this.props.user.username}</Text>
                        <Text style={styles.name}>{this.props.user.name}</Text>

                    <View style={styles.line} />
                    <View style={{flexDirection: 'row', padding: 5, width:'100%', justifyContent: 'center'}}>
                            <TouchableWithoutFeedback
                                onPress={this.on_accept}>
                                <Image source={accept} style={{width:50, height:50, marginRight:50}}/>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback
                                onPress={this.on_deny}>
                                <Image source={deny} style={{width:50, height:50}}/>
                            </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    body:{
        backgroundColor: '#11ff38',
        borderRadius: 5,
        borderColor: '#155924',
        borderWidth:2.5,
        margin: 10,
        width:'80%'
    },
    poster:{
        backgroundColor: '#000000',
        width:100,
        height:100,
        alignSelf:'center',
        borderRadius: 50,
        borderColor: '#155924',
        borderWidth: 2
    },
    username:{
        padding:5,
        textAlign: 'center',
        fontStyle:'italic',
        backgroundColor: '#08220e',
        borderRadius: 10,
        color: '#fff'
    },
    name:{
        padding:0,
        fontSize:20
    }
});

export default Request;
