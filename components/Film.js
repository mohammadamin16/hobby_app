import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight, TouchableWithoutFeedback,Button} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import watch from '../img/watch.png';
import unwatch from '../img/unwatch.png';
import {like_film, watch_film} from '../api/accounts';


class Film extends Component {
    constructor(props){
        super(props);
        this.state = {
            like_status : props.like_status,
            watch_status : props.watch_status
        }
    }
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#5592ff',
                borderRadius: 10,
                borderColor: '#3c46ff',
                marginBottom: 10,
                padding: 5,
                }}>
            <View style={{flex: 3, justifyContent: 'space-between'}}>
                <Text>{this.props.film.title}</Text>
                <Text>year: {this.props.film.year}</Text>
                <View style={styles.row}>
                <TouchableWithoutFeedback
                        onPress={() => {
                        like_film(this.props.user.username, this.props.film.imdb_id);
                        this.setState(() => {
                                if (this.state.like_status){
                                    return {like_status:false}
                                }else{
                                    return {like_status:true}
                                }
                            }
                        )
                    }}
                    style={{flex: 1, width: 50, height: 50}}>

                    <Image
                        style={{width: 50, height: 50}}
                        source={this.state.like_status ?  like : dislike}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => {
                        watch_film(this.props.user.username, this.props.film.imdb_id);
                        this.setState(() => {
                                if (this.state.watch_status){
                                    return {watch_status:false}
                                }else{
                                    return {watch_status:true}
                                }
                            }
                        )
                    }}
                    style={{flex: 1, width: 50, height: 50}}>

                    <Image
                        style={{width: 50, height: 50}}
                        source={this.state.watch_status ?  watch : unwatch}/>
                    </TouchableWithoutFeedback>
                </View>


                </View>
                <TouchableHighlight
                    onPress={() => {
                        this.props.navigation.navigate('FilmView', {film:this.props.film})
                    }}
                    style={{flex: 1}}
                >
                <Image
                    style={{ width: '100%', height: 150}}
                    source={{uri: this.props.film.icon}}
                    PlaceholderContent={<ActivityIndicator/>}
                />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
    }

});

export default Film;
