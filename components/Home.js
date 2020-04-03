import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button, FlatList,ToastAndroid} from 'react-native';
import Suggestion from '../components/Suggestion';
import {get_notifications} from '../api/accounts';
import Film from './Film';
import Toast from 'react-native-easy-toast';

class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            notifications:[]
        }
    }

    update_notifications = (notis) => {
        this.setState({notifications:notis});
    };

    componentDidMount() {

        get_notifications(this.props.route.params.user.username, this.update_notifications)
    }

    render() {
        let list = [{title:'One'}, {title:'Two'}];
        let scrollview = <FlatList
                        data={this.state.notifications}
                        keyExtractor={item => item.imdb_id}
                        renderItem={({item}) =>(
                            <Suggestion notification={item} />
                        )} />;
        ToastAndroid.show("Hi There!", ToastAndroid.SHORT);
        return(
            <View style={styles.home_screen}>
                {scrollview}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    home_screen : {
        flex:1,
        flexDirection:'column',
        backgroundColor:'#0f0a30',
        // margin:30,
        padding:10,
    }
});

export default Home;
