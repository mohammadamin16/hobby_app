import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from './app/screens/LoginScreen/index';
import SignUpScreen from './app/screens/SignUpScreen/index';
import SearchFilm from './app/screens/SearchFilmScreen/index';
import Profile from './app/screens/ProfileScreen/index';
import PeopleScreen from './app/screens/PeopleScreen/index';
import HomeScreen from './app/screens/HomeScreen/index';
import FilmView from './app/screens/FilmScreen/index';
import UserScreen from './app/screens/UserScreen/index';
import SuggestScreen from './app/screens/SuggestScreen/index';
import Friends from './app/screens/FriendsScreen/index';
import { YellowBox, AsyncStorage } from 'react-native';
import { login } from "./app/api/accounts";
import SplashScreen from 'react-native-splash-screen'

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function FilmSearchTab({ route, navigation }) {
        return (
                <Stack.Navigator initialRouteName="SearchFilm"
                    screenOptions={{
                    headerShown: false
                }}>
                    <Stack.Screen name="FilmView" component={FilmView}/>
                    <Stack.Screen name="SearchFilm" component={SearchFilm} initialParams={{user: route.params.user}}/>
                    <Stack.Screen name="SuggestScreen" component={SuggestScreen} initialParams={{user: route.params.user}}/>
                </Stack.Navigator>
        );
}

function PeopleTab({ route, navigation }) {
        return (
                <Stack.Navigator initialRouteName="PeopleSearch"
                    screenOptions={{
                    headerShown: false
                    }}>
                    <Stack.Screen name="PeopleSearch" component={PeopleScreen} initialParams={{user: route.params.user}}/>
                    <Stack.Screen name="UserView" component={UserScreen} initialParams={{user: route.params.user}}/>
                </Stack.Navigator>
        );
}



class App extends React.Component{
    constructor(){
        super();
        SplashScreen.hide()
    }

    state = {
        user:{},
        logged_in:false,
    };

    login_user = (user, password) =>{
        this.setState({user:user});
        this.setState({logged_in:true});
        this.save_user(user.username,password)
        
    };
    logout_user = () => {
        console.log("Is this refreshing or not");
        this.setState({user:{}});
        this.setState({logged_in:false});
        this.clear_user()
        
    };
    
    clear_user = async () => {
        try {
            await AsyncStorage.removeItem('username');
            await AsyncStorage.removeItem('password');
            console.log('User logged out')
        } catch (error) {
            console.error(error)
        }
    }

    save_user = async (username, password) => {
        try {
            await AsyncStorage.setItem('username', username);
            await AsyncStorage.setItem('password', password);
            console.log('login username:')
            console.log(username)
        } catch (error) {
            console.error(error)
        }
    };

    componentDidMount = async() =>  {
        try {
            const username = await AsyncStorage.getItem('username');
            const password = await AsyncStorage.getItem('password');
            if (username !== null && password !== null) {
                login(username, password, this.login_user)
            }
          } catch (error) {
              console.error(error)
          }
        
    }

    render(){
        YellowBox.ignoreWarnings([
            'Non-serializable values were found in the navigation state',
        ]);
        if (this.state.logged_in){
            return (
                <NavigationContainer>
                    <Tab.Navigator
                        barStyle={{height:35, justifyContent:'center', paddingBottom:10,paddingTop:0, margin:0}}
                        initialRouteName="Home"
                        activeColor={'#ffffff'}
                        inactiveColor={'#000000'}
                        labeled={false}
                    >
                        <Tab.Screen
                            options={{
                                    tabBarLabel: 'Home',
                                    tabBarColor:'#909eda',
                                    tabBarIcon: ({ color }) => (
                                    <MaterialCommunityIcons name="home" color={color} size={26} />
                                    ),
                            }}
                            name="Home" component={HomeScreen} initialParams={{user:this.state.user}} />
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
        }
        else {
            return(
                <NavigationContainer>
                    <Tab.Navigator
                    initialRouteName="Login"
                    activeColor={'#fff'}
                    inactiveColor={'#261a2f'}
                    pressColor={'#fff'}
                    barStyle={{backgroundColor: '#5533ad', height:35, justifyContent:'center', paddingBottom:10,paddingTop:0, margin:0}}
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
