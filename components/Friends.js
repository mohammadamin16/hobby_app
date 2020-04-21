import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, FlatList, ToastAndroid, ActivityIndicator,RefreshControl} from 'react-native';
import {get_requests} from '../api/accounts';
import Film from './Film';
import Request from './Request';

class Friends extends Component {
    constructor(props){
        super(props);
        this.state = {
            requests:[],
            loading: true,
        }
    }

    update_requests = (requests) => {
        this.setState({requests:requests});
        this.setState({loading:false});
    };

    get_reqs = () => {
        get_requests(this.props.route.params.user.username, this.update_requests);
    };

    get_msg = () => {
        if (this.state.requests.length === 0){
            return ("You don't have any requests!");
        }else{
            return ("Your Friendship Requests is here:");
        }
    };

    componentDidMount() {
        this.get_reqs();
    }

    render() {
        let scrollview = <FlatList
                        refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={this.get_reqs}/>}
                        data={this.state.requests}
                        keyExtractor={item => item.username}
                        renderItem={({item}) =>(
                            <View style={{alignItems: 'center'}}>
                            <Request
                                reload={this.get_reqs}
                                navigation={this.props.navigation}
                                signed_user={this.props.route.params.user}
                                user={item} />
                            </View>
                        )} />;
        return(
            <View style={styles.friends_screen}>
                <Text style={{
                    backgroundColor: '#0c3415',
                    color: '#fff',
                    padding:5,
                    textAlign: 'center',
                    borderRadius: 10
                }}>
                    {this.get_msg()}
                </Text>
                {scrollview}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    friends_screen : {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#97c55f',
        padding:10,
    }
});

export default Friends;
