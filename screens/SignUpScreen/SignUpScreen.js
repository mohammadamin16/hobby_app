import React, {Component, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableHighlight, TouchableNativeFeedback, View} from 'react-native';
import {login, signup} from '../../api/accounts';
import hobby from '../../img/hobby.png';

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
                <View style={styles.row}>
                    {/*<Text style={styles.label}>Full Name:</Text>*/}
                    <TextInput
                        style={styles.input}
                        onSubmitEditing={this.onSubmit}
                        onChangeText={(text) => this.setState({name: text})}
                        placeholder="insert your fullname!"
                    />
                </View>
                <TouchableNativeFeedback
                    onPress={this.onSubmit}
                    background={TouchableNativeFeedback.Ripple('#2b5b2c', false)}>
                    <View style={styles.btn}>
                        <Text style={{color:'#fff'}}>Sign Up</Text>
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
        backgroundColor: '#7e6382',
    },
    welcome:{
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
    },
    label:{
        paddingTop:10,
        paddingRight:20,
        height: 40,
        fontSize: 20,
    },
    btn:{
        backgroundColor:'#499a4a',
        color:'#fff',
        padding:10,
        borderRadius:8,
    }
});

export default SignUpScreen;
