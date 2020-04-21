import React, {Component, useEffect, useState} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    Image,
    View,
    Text,
    Button,
    TouchableOpacity,
    ToastAndroid,
    FlatList, TouchableWithoutFeedback,
} from 'react-native';

import add_friend from '../img/add_friend.png'
import remove_friend from '../img/remove_friend.png'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {get_favs, get_friends} from '../api/accounts';


class UserView extends Component {
    state = {
        friends:[],
        favs:[],
        image :{uri:this.props.route.params.user.avatar},
    };
    componentDidMount(){
        get_friends(this.props.route.params.user.username, this.after_loading_friends);
        get_favs(this.props.route.params.user.username, this.handle_favs)
    }


    handle_favs = (favs) => {
        this.setState({favs:favs})
    };

    after_loading_friends = (data) => {
        this.setState({
            friends:data,
        });
    };

    render_friend = (info) => {
        let item = info.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.navigation.navigate('People', {
                        screen: 'UserView',
                        params: {user: item},
                    });
                }}
            >
                <View style={{
                    backgroundColor: '#4fc8ff',
                    width:100,
                    height:'100%',
                    borderRadius:10,
                    alignItems: 'center',
                    padding:10,
                    marginRight:5,
                }}>
                    <Image source={{uri:item.avatar}}
                           style={{width:80, height:80, borderRadius:40, borderWidth: 2, borderColor: '#000'}}
                    />
                   <Text>@{item.username}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };


    render_fav = (info) => {
        let item = info.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => {
                    this.props.navigation.navigate('Films', {
                        screen: 'FilmView',
                        params: {film: item},
                    });
                }}
            >
                <View style={{
                    backgroundColor: '#183e11',
                    width:90,
                    height:150,
                    borderRadius:5,
                    alignItems: 'center',
                    padding:3,
                    marginRight:5,
                }}>
                    <Image source={{uri:item.icon}}
                           style={{width:70, height:100, borderRadius:5, borderWidth: 2, borderColor: '#000'}}
                           />
                   <Text style={{fontSize: 10, textAlign: 'center'}}>{item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    };


    render() {
        return (
            <View style={styles.profile_screen}>
                <View style={styles.user_info}>
                    <View style={styles.row}>
                        <View style={styles.avatar_part}>
                            <Image style={styles.avatar} source={this.state.image}/>
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
                    </TouchableOpacity>
                </View>
                <View style={{flex:3, paddingTop:15,}}>
                    <FlatList
                        horizontal={true}
                        data={this.state.friends}
                        renderItem={this.render_friend}
                        keyExtractor={item => item.username}/>
                    <View style={{flexDirection: 'row',alignItems: 'center',}}>
                        <View style={styles.line2} />
                    </View>
                </View>
                <View style={{flex:3}}>
                    <FlatList
                        horizontal={true}
                        data={this.state.favs}
                        renderItem={this.render_fav}
                        keyExtractor={item => item['imdbID']}/>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    profile_screen: {
        flex: 1,
        backgroundColor: '#90f8ff',
        padding:10,
        },
    label1:{
        margin:2,
        backgroundColor:'#64fffd',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    label2:{
        margin:2,
        backgroundColor:'#c9ffc3',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    label3:{
        margin:2,
        backgroundColor:'#ffb6a3',
        borderRadius: 10,
        padding:7,
        fontWeight:'bold',
    },
    row:{
        flexDirection: 'row',
    },
    user_info:{
        flexDirection: 'column',
        flex:4,
        padding:10,
    },
    avatar_part:{
        flex:1,
        alignItems: 'center',
    },
    avatar:{
        alignSelf:'center',
        width:100,
        height:100,
        borderRadius: 75,
        borderColor:'#000',
        borderWidth: 2,
        backgroundColor: '#000',
    },
    change_avatar_btn:{
        width:100,
        backgroundColor: '#77dcd1',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom:10,
        marginTop:10,
    },
    logout_btn:{
        width:100,
        backgroundColor: '#af473a',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    text_part:{
        flex:2,
        alignItems: 'center'
        // backgroundColor:'red',
    },
    name:{
        textAlign: 'center',
        flex:1,
        fontSize:20,
        fontWeight: 'bold',
    },
    username:{
        flex:1,
        fontSize:15,
    },
    bio:{
        flex:1,
        fontSize:15,
        fontStyle:'italic',
    },
    line:{
        backgroundColor: '#31131d',
        width:'80%',
        height:2,
        borderRadius:10,
    },
    line2:{
        backgroundColor: '#31131d',
        width:'100%',
        height:2,
        borderRadius:10,
    },
    line1_part:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    friends_text:{
        fontStyle:'italic',
    }
});

export default UserView;
