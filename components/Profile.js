import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button, FlatList,TouchableOpacity} from 'react-native';
import Film from './Film';
import {get_friends, change_avatar} from '../api/accounts';
import ImagePicker from 'react-native-image-picker';
import {ToastAndroid} from 'react-native';




class Profile extends Component {
    state = {
        friends:[],
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
            uri:
            Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
        });

        Object.keys(body).forEach(key => {
            data.append(key, body[key]);
        });

        return data;
    };

    handleUploadPhoto = () => {
        const url = 'http://192.168.1.249:8000/api/change_avatar';
        fetch(url, {
            method: "POST",
            body: this.createFormData(this.state.image, { username: this.props.route.params.user.username })
            })
        .then(response => response.json())
        .then(response => {
            console.log("upload success", response);
            alert("Upload success!");
            this.setState({ photo: null });
        })
        .catch(error => {
            console.log("upload error", error);
            alert("Upload failed!");
        });
    };

    componentDidMount(){
        get_friends(this.props.route.params.user.username, this.after_loading_friends);
    }

    after_loading_friends = (data) => {
        this.setState({
            friends:data,
        });
    };

    render() {
        return (
            <View style={styles.profile_screen}>
                <View style={styles.part1}>
                    <Image
                        style={{
                            width:100,
                            height:100,
                            borderRadius: 50,
                        }}
                        source={this.state.image}
                    />
                    <View style={styles.row}>
                        <TouchableOpacity onPress = {this.handleChoosePhoto}>
                            <View style = {{backgroundColor: '#ffc863', alignItems: 'center',
                                    justifyContent: 'center', borderRadius: 5}}>
                                <Text style = {{color: 'white'}}>Change your avatar here</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.row}>
                        <View style={{flex:1}}>
                        <Text style={styles.label1}>Username</Text>
                        <Text style={styles.label1}>Name</Text>
                        <Text style={styles.label1}>Bio</Text>
                        </View>
                        <View style={{flex:3}}>
                        <Text style={styles.label2}>{this.props.route.params.user.username}</Text>
                        <Text style={styles.label2}>{this.props.route.params.user.name}</Text>
                        <Text style={styles.label2}>{this.props.route.params.user.bio}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.part2}>
                    <View style={styles.line}/>
                    <View style={styles.row}>
                        <View style={{flex:1}}>
                            <Text style={styles.label3}>Friends</Text>
                        </View>
                        <View style={{flex:3}}>
                            <FlatList
                                data={this.state.friends}
                                keyExtractor={item => item.username}
                                renderItem={({item}) =>(
                                    <Text style={styles.label2}>{item.name}</Text>
                                )} />
                   
                        </View>
                    </View>
                    {/*<Text>Friends: </Text>*/}
                </View>
                <View style={{flex:1}}>
                    <Button
                        onPress={this.props.route.params.success_function}
                        title={'Logout'}/>
                </View>
            </View>
        );
    }
}

const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};



const styles = StyleSheet.create({
    part1:{
        alignItems: 'center',
        flex: 3,
    },
    part2:{
        alignItems: 'center',
        flex: 3,
    },
    profile_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#9483eb',
        padding:10
        },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    line:{
        backgroundColor: '#ffbf26',
        width:'80%',
        height:10,
        borderRadius:10,
        margin:10,
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

});

export default Profile;
