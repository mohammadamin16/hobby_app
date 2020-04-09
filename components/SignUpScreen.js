import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View} from 'react-native';
import {login, signup} from '../api/accounts';

class SignUpScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            name:'',
        }
    }

    apiDidAuthenticate = () => {
        this.props.navigation.navigate('Login' , {username_value:this.state.username})
    };

    onSubmit = async () => {
        let username = this.state.username;
        let password = this.state.password;
        let name = this.state.name;
        signup(username, password,name , this.apiDidAuthenticate);
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
                        style={styles.input}
                        autoFocus={true}
                        onChangeText={(text) => this.setState({username: text})}
                        placeholder="insert your username!"
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        onSubmitEditing={() => {
                            alert('password: ' + this.state.password)
                        }}
                        onChangeText={(text) => this.setState({password: text})}
                        placeholder="insert your password!"
                    />
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Full Name:</Text>
                    <TextInput
                        style={styles.input}
                        onSubmitEditing={this.onSubmit}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="insert your fullname!"
                    />
                </View>
                <TouchableHighlight onPress={this.onSubmit}>
                    <Text style={styles.btn}>Sign Up</Text>
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
    label1:{
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

export default SignUpScreen;
