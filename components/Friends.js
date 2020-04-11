import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button, FlatList,ToastAndroid} from 'react-native';
import Suggestion from '../components/Suggestion';
import {get_requests} from '../api/accounts';
import Film from './Film';
import Toast from 'react-native-easy-toast';
import Request from './Request';

class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            requests:[]
        }
    }

    update_requests = (requests) => {
        this.setState({requests:requests});
    };

    componentDidMount() {
        get_requests(this.props.route.params.user.username, this.update_requests)
    }

    render() {
        let scrollview = <FlatList
                        data={this.state.requests}
                        keyExtractor={item => item.username}
                        renderItem={({item}) =>(
                            <Request
                                signed_user={this.props.route.params.user}
                                user={item} />
                        )} />;
        return(
            <View style={styles.friends_screen}>
                {scrollview}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    friends_screen : {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#baff68',
        padding:10,
    }
});

export default Friends;
