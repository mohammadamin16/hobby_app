import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import {login} from '../api/accounts';
import hobby from '../img/hobby.png';
class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
        }
    }

    apiDidAuthenticate = () => {
        this.props.navigation.navigate('Home')
    };

    onSubmit = async () => {
        let username = this.state.username;
        let password = this.state.password;
        login(username, password, this.props.route.params.success_function);

    };


    render() {
        return (
            <View style={styles.welcome_screen}>


                <View style={[styles.row, {alignItems: 'center'}]}>
                    <Text style={styles.welcome}>Hobby</Text>
                    <Image
                        style={{width:100, height:100}}
                        source={hobby}
                    />
                </View>

                <View style={styles.row}>
                    {/*<Text style={styles.label}>Username:</Text>*/}
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({username: text})}
                        placeholder="insert your username!"
                    />
                </View>
                <View style={styles.row}>
                    {/*<Text style={styles.label}>Password:</Text>*/}
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        onSubmitEditing={() => {
                            alert('password: ' + this.state.password)
                        }}
                        onChangeText={(text) => this.setState({password: text})}
                        placeholder="insert your password!"
                    />
                </View>

                <TouchableNativeFeedback
                    onPress={this.onSubmit}
                    background={TouchableNativeFeedback.Ripple('#721f24', false)}>
                    <View style={styles.btn}>
                        <Text style={{color:'#fff'}}>Sign In</Text>
                    </View>
                </TouchableNativeFeedback>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome_screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#917296',
    },
    welcome:{
        // fontStyle: 'italic',
        fontSize:50,
        color:'#2f1d39',
        fontWeight:'bold'
    },
    input:{
        padding:10,
        borderRadius:10,
        height:40,
        backgroundColor:'#39b8e2',
        borderColor : '#164858',
        borderWidth : 3,
        width:'75%'
    },
    row:{
        margin:30,
        flexDirection:'row',
        justifyContent: 'center',

    },
    label:{
        paddingTop:5,
        paddingRight:20,
        height: 40,
        fontSize: 20,
    },
    btn:{
        backgroundColor:'#ff2b63',
        color:'#fff',
        padding:10,
        borderRadius:8,
    }
});

export default LoginScreen;
