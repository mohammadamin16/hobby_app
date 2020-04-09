import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button, FlatList} from 'react-native';
import Film from './Film';
import {get_friends} from '../api/accounts';


class Profile extends Component {
    state = {
        friends:[]
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
                        style={{width:100, height:100}}
                        source={{uri:this.props.route.params.user.avatar}}
                    />
                    <View style={styles.row}>
                        <View style={{flex:1}}>
                        <Text style={styles.label1}>Username</Text>
                        <Text style={styles.label1}>Full Name</Text>
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

const styles = StyleSheet.create({
    part1:{
        alignItems: 'center',
        flex: 2,
    },
    part2:{
        alignItems: 'center',
        flex: 2,
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
