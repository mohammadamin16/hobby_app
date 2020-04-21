import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button, FlatList,TouchableOpacity,TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import Film from './Film';
import {get_friends, change_avatar, get_favs} from '../api/accounts';
import ImagePicker from 'react-native-image-picker';
import {ToastAndroid} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



class Profile extends Component {
    state = {
        friends:[],
        favs:[],
        image :{uri:this.props.route.params.user.avatar},
    };

    on_avatar_change = () => {
        ToastAndroid.show("Avatar changed!", ToastAndroid.SHORT);
    };

    handleChoosePhoto = () => {
        const options = {
            noData: true,
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
          if (response.uri) {
                    this.setState({ image: response });
                    this.handleUploadPhoto()
                }
            }
        });

    };

    createFormData = (photo, body) => {
        const data = new FormData();

        data.append("image", {
            name: photo.fileName,
            type: photo.type,
            uri:Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
        });

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });

        return data;
    };

    handleUploadPhoto = () => {
        // const url = 'https://vast-brushlands-59580.herokuapp.com/api/change_avatar';
        const url = 'http://192.168.1.249:8000/api/change_avatar';
        fetch(url, {
            method: "POST",
            body: this.createFormData(this.state.image, { username: this.props.route.params.user.username })
            })
        .then(response => response.json())
        .then(response => {
            alert("Upload success!");
        })
        .catch(error => {
            console.log("upload error", error);
            alert("Upload failed!");
        });
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
                           style={{width:70, height:70, borderRadius:35, borderWidth: 2, borderColor: '#000'}}
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
                            <TouchableOpacity onPress = {this.handleChoosePhoto}>
                                <View style = {styles.change_avatar_btn}><Text style = {{color: '#000'}}>Change avatar</Text></View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress = {this.props.route.params.success_function}>
                                <View style = {styles.logout_btn}><Text style = {{color: 'white'}}>Logout</Text></View>
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
                        <View style={{backgroundColor:'#000',borderRadius: 15,}}>
                            <MaterialCommunityIcons name="account-edit" color={'#9483eb'} size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{flex:3, paddingTop:15,}}>
                    <FlatList
                        horizontal={true}
                        data={this.state.friends}
                        renderItem={this.render_friend}
                        keyExtractor={item => item.username}/>
                    <View style={{flexDirection: 'row',alignItems: 'center',}}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('People', {
                        screen: 'PeopleSearch',
                    });}}>
                            <View style={{backgroundColor:'#000',borderRadius: 15,}}>
                                <MaterialCommunityIcons name="account-multiple-plus" color={'#9483eb'} size={30} />
                            </View>
                        </TouchableOpacity>
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
        backgroundColor: '#9483eb',
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
    //New Styles:
    user_info:{
        flexDirection: 'column',
        flex:4,
        padding:10,
        // backgroundColor:'blue',
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
        width:'70%',
        height:2,
        borderRadius:10,
    },
    line2:{
        backgroundColor: '#31131d',
        width:'90%',
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

export default Profile;
