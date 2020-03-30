import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WelcomeScreen from './components/WelcomeScreen';
import Home from './components/Home';
import Profile from './components/Profile';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

  // initialParams={{ itemId: 42 }}




class App extends React.Component{
    state = {
        user:{},
        logged_in:false,
    };

    set_user = (user) =>{
        this.setState({user:user});
        this.setState({logged_in:true});
        console.log('this user just logged in:');
        console.log(this.state.user)
    };

    render(){
    if (this.state.logged_in){
        return (
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="Profile" component={Profile} />
                </Tab.Navigator>
            </NavigationContainer>
        );
    }else {
      return(
        <NavigationContainer>
            <Stack.Navigator>
                <Tab.Screen name="Login" component={WelcomeScreen} initialParams={{success_function:this.set_user, text:'Hello'}} />
            </Stack.Navigator>
        </NavigationContainer>
        );
    }



    }
}

export default App;
