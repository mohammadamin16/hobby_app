import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight, TouchableWithoutFeedback,Button} from 'react-native';
import like from '../../img/like.png';
import dislike from '../../img/dislike.png';
import watch from '../../img/watch.png';
import unwatch from '../../img/unwatch.png';
import {like_film, dislike_film, unwatch_film, watch_film} from '../../api/hobby';
import FitImage from 'react-native-fit-image';
import styles from './styles';

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
            <View style={styles.film}>
            <View style={{flex: 3, justifyContent: 'space-between', alignItems: 'center'}}>

                <Text style={styles.title}>{this.props.film.title}</Text>
                <View style={styles.info_row}>
                    <Text style={styles.year_number}>{this.props.film.year}</Text><Text style={styles.rate_number}> {this.props.film.rating}</Text>
                </View>
                <View style={styles.options}>
                <TouchableWithoutFeedback
                        onPress={() => {
                        this.setState(() => {
                                if (this.state.like_status){
                                    dislike_film(this.props.user.username, this.props.film.imdbID);
                                    return {like_status:false}
                                }else{
                                    like_film(this.props.user.username, this.props.film.imdbID);
                                    return {like_status:true}
                                }
                            }
                        )
                    }}
                    style={{flex: 1, width: 50, height: 50}}>

                    <Image
                        style={{width: 30, height: 30, marginRight:10}}
                        source={this.state.like_status ?  like : dislike}/>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback
                        onPress={() => {
                        this.setState(() => {
                                if (this.state.watch_status){
                                    unwatch_film(this.props.user.username, this.props.film.imdbID);
                                    return {watch_status:false}
                                }else{
                                    watch_film(this.props.user.username, this.props.film.imdbID);
                                    return {watch_status:true}
                                }
                            }
                        )
                    }}
                    style={{flex: 1, width: 50, height: 50}}>

                    <Image
                        style={{width: 30, height: 30}}
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
                <FitImage
                    // PlaceholderContent={<ActivityIndicator/>}
                    originalWidth={300}
                    originalHeight={400}
                    style={{alignItems:'center'}}
                    source={{uri:this.props.film.icon}}/>

                </TouchableHighlight>
            </View>
        );
    }
}

export default Film;
