import React,{useState} from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableHighlight, Image,ScrollView} from 'react-native';
import {search_film} from '../../api/films';
import Film from '../../components/Film';
import search from '../../img/search.png';
import styles from './styles';
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

