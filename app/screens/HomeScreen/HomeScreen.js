import React, {Component, useEffect, useState} from 'react';
import {
    View,
    FlatList,
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
        return(
            <View style={styles.home_screen}>
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
