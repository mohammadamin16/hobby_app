import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button, FlatList,TouchableOpacity,TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import {get_friends} from '../../api/accounts';
import {get_favs} from '../../api/hobby';
import {ToastAndroid} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import handleChoosePhoto from './handleAvatar';
import Fav from '../../components/Fav/index'
import Friend from '../../components/Friend/index'

class Profile extends Component {
    state = {
        friends:[],
        favs:[],
        image :{uri:this.props.route.params.user.avatar},
    };

    componentDidMount(){
        get_friends(this.props.route.params.user.username, this.after_loading_friends);
        get_favs(this.props.route.params.user.username, this.handle_favs)
    }

    after_loading_friends = (data) => {
        this.setState({
            friends:data,
        });
    };

    render_friend = (info) => {
        let item = info.item;
        return (
            <Friend navigation={this.props.navigation}
            item={item} />
        )
    };


    render_fav = (info) => {
        let item = info.item;
        return (
            <Fav 
                item={item}
                navigation={this.props.navigation}
            />
        )
    };

    handle_favs = (favs) => {
        this.setState({favs:favs})
    };

    render() {
        return (
            <View style={styles.profile_screen}>
                <View style={styles.user_info}>
                    <View style={styles.row}>
                        <View style={styles.avatar_part}>
                            <Image style={styles.avatar} source={this.state.image}/>
                            <TouchableOpacity onPress = {handleChoosePhoto}>
                                <View style ={styles.change_avatar_btn}><Text style ={styles.change_avatar_txt}>Change avatar</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.props.route.params.success_function}>
                                <View style ={styles.logout_btn}><Text style ={styles.logout_txt}>Logout</Text></View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.text_part}>
                            <Text style={styles.name}>{this.props.route.params.user.name}</Text>
                            <Text style={styles.username}>@{this.props.route.params.user.username}</Text>
                            <Text style={styles.bio}>{this.props.route.params.user.bio}</Text>
                        </View>
                    </View>

                </View>
                <View style={styles.line1_part}>
                    <Text style={styles.friends_text}>Friends:</Text>
                    <View style={styles.line} />
                    <TouchableOpacity
                        onPress={() => {ToastAndroid.show('Hobby is not complete yet!', ToastAndroid.SHORT);}}>
                        <View style={styles.icon}>
                            <MaterialCommunityIcons name="account-edit" color={'#9483eb'} size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.firned_part}>
                    <FlatList
                        horizontal={true}
                        data={this.state.friends}
                        renderItem={this.render_friend}
                        keyExtractor={item => item.username}/>
                    <View style={styles.line2_part}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('People', {
                        screen: 'PeopleSearch',
                    });}}>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name="account-multiple-plus" color={'#9483eb'} size={30} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.line2} />
                    </View>
                </View>
                <View style={styles.fav_part}>
                    <FlatList
                        horizontal={true}
                        data={this.state.favs}
                        renderItem={this.render_fav}
                        keyExtractor={item => {
                            return(item['imdbID'].toString())
                        }}/>
                </View>
            </View>
        );
    }
}



export default Profile;
