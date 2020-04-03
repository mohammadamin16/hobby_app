import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {login} from '../api/accounts';

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
                </View>

                <View style={styles.row}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        // value={this.props.route.params.username_value}
                        style={styles.input}
                        onChangeText={(text) => this.setState({username: text})}
                        placeholder="insert your username!"
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        secureTextEntry={true}
                        // autoFocus={true}
                        onSubmitEditing={() => {
                            alert('password: ' + this.state.password)
                        }}
                        onChangeText={(text) => this.setState({password: text})}
                        placeholder="insert your password!"
                    />
                </View>
                <TouchableHighlight onPress={this.onSubmit}>
                    <Text style={styles.btn}>Sign In</Text>
                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome_screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#44c660',
    },
    welcome:{
        fontSize:50,
        color:'#375382',
    },
    input:{
        padding:10,
        borderRadius:10,
        height:40,
        backgroundColor:'#90f8ff',
        borderColor : '#202258',
        borderWidth : 3,
        width:'75%'
    },
    row:{
        // backgroundColor:'red',
        margin:30,
        flexDirection:'row',
    },
    label:{
        paddingTop:10,
        paddingRight:20,
        height: 40,
        fontSize: 20,
    },
    btn:{
        backgroundColor:'#004406',
        color:'#fff',
        padding:10,
        borderRadius:20,
    }
});

export default LoginScreen;
