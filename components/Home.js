import React,{useState} from 'react';
import {FlatList, ActivityIndicator, Text, View, StyleSheet, TextInput, TouchableHighlight, Image} from 'react-native';
import {search_film} from '../api/accounts';
import Film from '../components/Film';

export default class FetchExample extends React.Component {
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

    api = async () => {
        this.setState({isLoading:true});
        console.log('search starts...');
        await search_film(this.state.query, this.search_result_setter);
        this.setState({isLoading:false});
    };

    render(){
        const loading = this.state.isLoading;
        let result ;
        // if (loading){
        //     result = <ActivityIndicator size="large" color="#0000ff" /> ;
        // }
        // else{
        // let data = [
        // {"icon": "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SY150_CR0,0,101,150_.jpg", "imdb_id": "0295297", "title": "Harry Potter and the Chamber of Secrets"}, {"icon": "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SY150_CR0,0,101,150_.jpg", "imdb_id": "0330373", "title": "Harry Potter and the Goblet of Fire"}, {"icon": "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SY150_CR0,0,101,150_.jpg", "imdb_id": "0241527", "title": "Harry Potter and the Sorcerer's Stone"}, {"icon": "https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX101_CR0,0,101,150_.jpg", "imdb_id": "1201607", "title": "Harry Potter and the Deathly Hallows: Part 2"}
        // ];
        let data = this.state.result;
            result = <FlatList
                    data={data}
                    keyExtractor={item => item.imdb_id}
                    renderItem={({item}) =>(
                        <Film
                        film={item}
                        like_status={false}
                        user={this.props.route.params.user}
                        />
                        )} />;
            // }

        return(
            <View style={styles.home_screen}>
                {/*<Text>{this.props.route.params.user.username}</Text>*/}
                <View style={styles.row}>
                    <TextInput
                    style={styles.input}
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
        );
    }
}


const styles = StyleSheet.create({
    home_screen: {
        flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#44c660',
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
    label:{
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