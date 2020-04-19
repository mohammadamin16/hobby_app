import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import SearchFilm from './components/SearchFilm';
import Profile from './components/Profile';
import People from './components/People';
import Home from './components/Home';
import FilmView from './components/FilmView';
import UserView from './components/UserView';
import Suggest_Screen from './components/Suggest_Screen';
import Friends from './components/Friends';
import {ToastAndroid} from 'react-native';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();

function FilmSearchTab({ route, navigation }) {
        return (
                <Stack.Navigator initialRouteName="SearchFilm"
                    screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="FilmView" component={FilmView}/>
                    <Stack.Screen name="SearchFilm" component={SearchFilm} initialParams={{user: route.params.user}}/>
                    <Stack.Screen name="SuggestScreen" component={Suggest_Screen} initialParams={{user: route.params.user}}/>
                </Stack.Navigator>
        );
}

function PeopleTab({ route, navigation }) {
        return (
                <Stack.Navigator initialRouteName="PeopleSearch"
                    screenOptions={{
                    headerShown: false
                    }}>
                    <Stack.Screen name="PeopleSearch" component={People} initialParams={{user: route.params.user}}/>
                    <Stack.Screen name="UserView" component={UserView} initialParams={{user: route.params.user}}/>
                </Stack.Navigator>
        );
}



class App extends React.Component{
    state = {
        user:{},
        logged_in:false,
    };

    login_user = (user) =>{
        this.setState({user:user});
        this.setState({logged_in:true});

    };
    logout_user = () =>{
        this.setState({user:{}});
        this.setState({logged_in:false});
    };


    render(){
    if (this.state.logged_in){
        return (
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="Home"
                    activeColor={'#ffffff'}
                    inactiveColor={'#000000'}
                    labeled={false}
                    // barStyle={{ backgroundColor: '#a49ddb' }}
                >

                    <Tab.Screen
                         options={{
                                tabBarLabel: 'Home',
                                tabBarColor:'#909eda',
                                tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="home" color={color} size={26} />
                                ),
                         }}
                        name="Home" component={Home} initialParams={{user:this.state.user}} />
                    <Tab.Screen
                        options={{
                                tabBarColor:'#a49ddb',
                                tabBarLabel: 'Profile',
                                tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account-circle" color={color} size={26} />
                                ),
                            }}
                        name="Profile" component={Profile} initialParams={{user:this.state.user, success_function:this.logout_user}} />
                    <Tab.Screen
                                options={{
                                tabBarColor:'#7cbc89',
                                tabBarLabel: 'Films',
                                tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="filmstrip" color={color} size={26} />
                                ),
                            }}
                        name="Films" component={FilmSearchTab} initialParams={{user:this.state.user}} />
                    <Tab.Screen
                        options={{
                                tabBarColor:'#c1c578',
                                tabBarLabel: 'Friends',
                                tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="bell" color={color} size={26} />
                                ),
                            }}
                        name="Friends" component={Friends} initialParams={{user:this.state.user}} />
                    <Tab.Screen
                            options={{
                                tabBarColor:'#8fd0cf',
                                tabBarLabel: 'People',
                                tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account-search" color={color} size={26} />
                                ),
                            }}
                        name="People" component={PeopleTab} initialParams={{user:this.state.user}} />
                </Tab.Navigator>
            </NavigationContainer>
        );
        }else {
            return(
                <NavigationContainer>
                    <Tab.Navigator
                    initialRouteName="Login"
                    activeColor={'#fff'}
                    inactiveColor={'#261a2f'}
                    pressColor={'#fff'}
                    barStyle={{ backgroundColor: '#5533ad' }}
                    labeled={false}
                        >
                        <Tab.Screen
                            options={{
                                    tabBarColor:'#fff',
                                    barStyle: {backgroundColor: '#42ad37'},
                                    tabBarLabel: 'Login',
                                    tabBarIcon: ({color}) => (
                                        <MaterialCommunityIcons name="login" color={color} size={26}/>
                                    ),
                                }}
                            name="Login" component={LoginScreen} initialParams={{success_function:this.login_user}}
                        />
                        <Tab.Screen
                            options={{
                                tabBarLabel: 'Signup',
                                tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="account-plus" color={color} size={26} />
                                ),
                            }}
                            name="SignUpScreen" component={SignUpScreen} initialParams={{success_function:this.login_user}} />
                    </Tab.Navigator>
                </NavigationContainer>
            );
        }
    }
}

export default App;
