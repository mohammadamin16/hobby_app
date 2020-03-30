import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight} from 'react-native';
import like from '../img/like.png';
import dislike from '../img/dislike.png';


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
                <TouchableHighlight onPress={() => {
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
                    source={this.state.like_status ?  dislike : like}/>
                </TouchableHighlight>

                </View>
                <Image
                    style={{flex: 1, width: 50, height: 150}}
                    source={{uri: this.props.film.icon}}
                    PlaceholderContent={<ActivityIndicator/>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
//    styles should be here...

});

export default Film;
