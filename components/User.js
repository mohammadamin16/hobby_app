import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';
import {like_film} from '../api/accounts';


class User extends Component {
    constructor(props){
        super(props);
        this.state = {
            like_status : false
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
                <Text>{this.props.user.name}</Text>
                <TouchableHighlight onPress={() => {
                    // like_film(this.props.user.username, this.props.film.imdb_id);
                    this.setState(() => {
                            if (this.state.like_status){
                                return {like_status:false}
                            }else{
                                return {like_status:true}
                            }
                        }
                    )
                }}>
                <Image
                    style={{flex: 1, width: 50, height: 50}}
                    source={this.state.like_status ?  like : dislike}/>
                </TouchableHighlight>

                </View>
                <Image
                    style={{flex: 1, }}
                    source={{uri:this.props.user.avatar}}
                    PlaceholderContent={<ActivityIndicator/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
//    styles should be here...

});

export default User;
