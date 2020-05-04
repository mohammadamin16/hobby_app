import React,{useState} from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableHighlight,TouchableWithoutFeedback, Image, ScrollView} from 'react-native';
import {search_people, get_people} from '../../api/accounts';
import User from '../../components/User';
import white_search from '../../img/white_search.png';
import styles from './styles'

export default class PeopleScreen extends React.Component {
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
                            onPress={() => {this.go_to_user_view(item)}}>
                                <User
                                    signed_user={this.props.route.params.user}
                                    user={item}/>
                        </TouchableHighlight>
                    )} />;
                }

        return(
            <View style={styles.people_screen}>
                <View style={styles.searchbar}>
                    <TextInput
                    style={styles.input}
                    placeholder="enter a film title in english"
                    onSubmitEditing={this.api.bind(this)}
                    onChangeText={(text) => {this.setState({query:text})}}
                    />
                    <TouchableWithoutFeedback onPress={this.api.bind(this)}>
                        <View style={styles.btn}>
                            <Image source={white_search} style={{width:35, height:35}} />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.row}>
                    {result}
                </View>
            </View>
        );
    }

    go_to_user_view(_user) {
        this.props.navigation.navigate('UserView', {user:_user})
    }
}


