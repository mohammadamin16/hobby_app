import React,{useState} from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableHighlight, Image, ScrollView} from 'react-native';
import {search_people, get_people} from '../api/accounts';
import Film from '../components/Film';
import User from './User';

export default class People extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
            query:'',
            result:[],
        }
    }

    search_result_setter = (data) => {
        this.setState({result:data});
    };

    async componentDidMount(){
        this.setState({isLoading:true});
        await get_people(this.search_result_setter);
        this.setState({isLoading:false});
    }

    api = async () => {
        this.setState({isLoading:true});
        await search_people(this.state.query, this.props.route.params.user.username ,this.search_result_setter);
        this.setState({isLoading:false});
    };

    render(){
        const loading = this.state.isLoading;
        let result ;
        if (loading){
            result = <ActivityIndicator size="large" color="#0000ff" /> ;
        }
        else{

        let data = this.state.result;
            result = <FlatList
                    data={data}
                    keyExtractor={item => item.username}
                    renderItem={({item}) =>(
                        <TouchableHighlight
                        onPress={() => {
                            this.go_to_user_view(item)
                        }}>
                        <User
                        signed_user={this.props.route.params.user}
                        user={item}
                        />
                        </TouchableHighlight>
                        )} />;
            }

        return(
            <View style={styles.people_screen}>
                <View style={styles.row}>
                    <TextInput
                    style={styles.input}
                    placeholder="Search for username or names"
                    onSubmitEditing={this.api.bind(this)}
                    onChangeText={(text) => {this.setState({query:text})}}
                    />
                    <TouchableHighlight onPress={this.api.bind(this)}>
                        <Text style={styles.btn}>Search</Text>
                    </TouchableHighlight>
                    </View>
                <View style={styles.row}>
                    <ScrollView>
                    {result}
                    </ScrollView>
                </View>
            </View>
        );
    }

    go_to_user_view(_user) {
        this.props.navigation.navigate('UserView', {user:_user})
    }
}



const styles = StyleSheet.create({
    people_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4492c6',
    },
    input:{
        padding:10,
        borderRadius:10,
        height:40,
        backgroundColor:'#90f8ff',
        borderColor : '#202258',
        borderWidth : 3,
        width:'100%'
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