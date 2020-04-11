import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar,} from 'react-native';
import {Header,LearnMoreLinks,Colors,DebugInstructions,ReloadInstructions,} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function FilmSearchTab({ route, navigation }) {
        return (
                <Stack.Navigator initialRouteName="SearchFilm">
                    <Stack.Screen name="FilmView" component={FilmView}/>
                    <Stack.Screen name="SearchFilm" component={SearchFilm} initialParams={{user: route.params.user}}/>
                    <Stack.Screen name="SuggestScreen" component={Suggest_Screen} initialParams={{user: route.params.user}}/>
                </Stack.Navigator>
        );
}

function PeopleTab({ route, navigation }) {
        return (
                <Stack.Navigator initialRouteName="SearchFilm">
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
    logout_user = (user) =>{
        this.setState({user:{}});
        this.setState({logged_in:false});
    };


    render(){
    if (this.state.logged_in){
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} initialParams={{user:this.state.user}} />
                    <Tab.Screen name="Profile" component={Profile} initialParams={{user:this.state.user, success_function:this.logout_user}} />
                    <Tab.Screen name="Films" component={FilmSearchTab} initialParams={{user:this.state.user}} />
                    <Tab.Screen name="Friends" component={Friends} initialParams={{user:this.state.user}} />
                    <Tab.Screen name="People" component={PeopleTab} initialParams={{user:this.state.user}} />
                </Tab.Navigator>
            </NavigationContainer>
        );
        }else {
            return(
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="Login" component={LoginScreen} initialParams={{success_function:this.login_user}} />
                        <Tab.Screen name="SignUpScreen" component={SignUpScreen} initialParams={{success_function:this.login_user}} />
                    </Tab.Navigator>
                </NavigationContainer>
            );
        }
    }
}

export default App;
