import React,{useState} from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableHighlight, Image,ScrollView} from 'react-native';
import {search_film} from '../api/accounts';
import Film from '../components/Film';
import search from '../img/search.png';

export default class SearchFilm extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            isLoading: false,
            query:'',
            result:[]
,
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
            result = <ActivityIndicator size="large" color='#0000ff' /> ;
        }
        else{

        let data = this.state.result;
            result = this.state.result.map((item) =>
            <Film
                key={item.imdbID}
                film={item}
                navigation={this.props.navigation}
                like_status={item.like_status}
                watch_status={item.watch_status}
                user={this.props.route.params.user}
                />
                )
            }

        return(

            <View style={styles.home_screen}>
                <View style={styles.searchbar}>
                    <TextInput
                    style={styles.input}
                    placeholder="enter a film title in english"
                    onSubmitEditing={this.api.bind(this)}
                    onChangeText={(text) => {this.setState({query:text})}}
                    />
                    <TouchableHighlight onPress={this.api.bind(this)}>
                        <View style={styles.btn}>
                        <Image source={search} style={{width:37, height:37}} />
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.row}>
                    <ScrollView>
                    {result}
                    </ScrollView>
                </View>
            </View>
                // </View>
        );
    }
}


const styles = StyleSheet.create({
    home_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#44c660',
        // justifyContent: 'center',
    },
    welcome:{
        fontSize:50,
        color:'#375382',
    },
    input:{
        flex:6,
        padding:10,
        borderRadius:10,
        height:40,
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
        flex:1,
        backgroundColor:'#004406',
        color:'#fff',
        padding:10,justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        height:40,
        width:60
    },
    searchbar:{
        flexDirection: 'row',
        backgroundColor:'#377842',
        borderColor : '#202258',
        borderWidth : 3,
        width:'100%',
        borderRadius: 7,
    }
});