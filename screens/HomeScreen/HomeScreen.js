import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    Image,
    View,
    Text,
    Button,
    FlatList,
    ToastAndroid,
    RefreshControl,
} from 'react-native';
import Suggestion from '../../components/Suggestion/index';
import {get_notifications} from '../../api/hobby';
import styles from './styles';

class HomeScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading:true,
            notifications:[]
        }
    }

    update_notifications = (notis) => {
        this.setState({notifications:notis});
        this.setState({loading:false})
    };
    get_notis = () => {
        get_notifications(this.props.route.params.user.username, this.update_notifications)
    };

    componentDidMount() {
        this.get_notis()
    }

    render() {
        let scrollview = <FlatList
                        refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={this.get_notis}/>}
                        data={this.state.notifications}
                        keyExtractor={item => item.imdb_id}
                        renderItem={({item}) =>(
                            <Suggestion
                                navigation={this.props.navigation}
                                notification={item} />
                        )} />;
        return(
            <View style={styles.home_screen}>
                {scrollview}
            </View>
        );
    }
}


export default HomeScreen;
