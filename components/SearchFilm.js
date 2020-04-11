import React,{useState} from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableHighlight, Image,ScrollView} from 'react-native';
import {search_film} from '../api/accounts';
import Film from '../components/Film';

export default class SearchFilm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
            query:'harry potter',
            result:[],
        }
    }

    search_result_setter = (data) => {
        this.setState({result:data});
    };

    api = async () => {
        this.setState({isLoading:true});
        await search_film(this.state.query, this.props.route.params.user.username ,this.search_result_setter);
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
                    keyExtractor={item => item.imdb_id}
                    renderItem={({item}) =>(
                            <Film
                            film={item}
                            navigation={this.props.navigation}
                            like_status={item.like_status}
                            watch_status={item.watch_status}
                            user={this.props.route.params.user}
                            />
                        )} />;
            }

        return(
            <ScrollView style={{backgroundColor: '#44c660',}}>
            <View style={styles.home_screen}>
                <View style={styles.row}>
                    <TextInput
                    style={styles.input}

                    placeholder="enter a film title in english"
                    onSubmitEditing={this.api.bind(this)}
                    onChangeText={(text) => {this.setState({query:text})}}
                    />
                    <TouchableHighlight onPress={this.api.bind(this)}>
                        <Text style={styles.btn}>Search</Text>
                    </TouchableHighlight>
                    </View>
                <View style={styles.row}>
                    {result}
                </View>
            </View>
        </ScrollView>
        );
    }
}


const styles = StyleSheet.create({
    home_screen: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
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