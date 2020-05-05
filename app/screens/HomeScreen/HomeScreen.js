import React, {Component, useEffect, useState} from 'react';
import {
    View,
    FlatList,
    RefreshControl,
    Text,
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

    get_msg = () => {
        if (this.state.notifications.length === 0){
            return (
                <Text style={{
                    backgroundColor: '#0c3415',
                    color: '#fff',
                    padding:5,
                    textAlign: 'center',
                    borderRadius: 10
                }}>
                    You don't have any suggestions!
                </Text>
            )
        }
    };

    render() {
        return(
            <View style={styles.home_screen}>
                {this.get_msg()}
                <FlatList
                    refreshControl={<RefreshControl refreshing={this.state.loading} onRefresh={this.get_notis}/>}
                    data={this.state.notifications}
                    keyExtractor={item => {
                        return(item['suggest']['film']['imdbID'].toString());
                    }}
                    renderItem={({item}) =>(
                        <Suggestion
                            navigation={this.props.navigation}
                            notification={item} />
                    )} />
            </View>
        );
    }
}


export default HomeScreen;
