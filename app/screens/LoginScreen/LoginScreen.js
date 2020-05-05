import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, Text, TextInput, TouchableHighlight, View, Image, TouchableOpacity, TouchableNativeFeedback} from 'react-native';
import {login} from '../../api/accounts';
import hobby from '../../img/hobby.png';
import styles from './styles'
import Spinner from 'react-native-loading-spinner-overlay';

class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:'',
            loading:false,
        }
    }

    apiDidAuthenticate = () => {
        this.props.navigation.navigate('Home')
    };

    onSubmit = async () => {
        this.setState({loading:true});

        let username = this.state.username;
        let password = this.state.password;
        login(username, password, this.props.route.params.success_function, this.remove_loading);
    };

    remove_loading = () => {
        this.setState({loading:false});
    };


    render() {
        return (
            <View style={styles.welcome_screen}>
                <Spinner
                    overlayColor={'#00000088'}
                    visible={this.state.loading}
                    textContent={'Loading...'}
                    textStyle={{
                        color:'#fff',
                    }}
                />

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

export default LoginScreen;
