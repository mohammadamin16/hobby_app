import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight, TouchableWithoutFeedback} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import {like_film} from '../api/accounts';


class Film extends Component {
    constructor(props){
        super(props);
        this.state = {
            like_status : props.like_status
        }
    }
    render() {
        console.log(this.state.like_status ?  dislike : like);
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
                <TouchableWithoutFeedback
                    onPress={() => {
                    console.log(this.props.film.film_id);
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
                style={{flex: 1, width: 50, height: 50}}

                >
                <Image
                    style={{width: 50, height: 50}}
                    source={this.state.like_status ?  like : dislike}/>
                </TouchableWithoutFeedback>

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
//    styles should be here...

});

export default Film;
