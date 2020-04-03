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
        return (
            <View style={{
                flexDirection: 'row',
                backgroundColor: '#11ff38',
                borderRadius: 10,
                borderColor: '#155924',
                borderWidth:4,
                marginBottom: 10,
                }}>
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View style={[styles.row, {justifyContent: 'space-between',padding: 5}]}>
                    <Image
                        style={{width:50, height:50}}
                        source={{uri:this.props.notification.owner.avatar}}
                    />
                    <Text
                        style={{
                            alignSelf: 'center',
                            padding:10,
                        }}
                    >
                        {this.props.notification.owner.username}</Text>
                </View>
                <View style={styles.line} />
                <View style={{flexDirection: 'row',justifyContent: 'space-between',padding: 5}}>
                    <View style={{flex:1,}}>
                        <Image
                            // resizeMode={'cover'}
                            PlaceholderContent={<ActivityIndicator/>}
                            style={{flex:1 , width: 100, height: 100,alignSelf:'center'}}
                            source={{uri:this.props.notification.suggest.film.poster}}/>

                        <Text style={{alignSelf:'center'}}>{this.props.notification.suggest.film.title}</Text>
                    </View>
                    <View style={{flex:1,}}>
                        <Text style={{fontSize:20}}>{this.props.notification.suggest.title}</Text>
                    <Text>{this.props.notification.suggest.text}</Text>
                    </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection:'row'
    },
    line:{
        backgroundColor: '#051709',
        width:'100%',
        height:1,
        borderRadius:10,
    }

});

export default Film;
