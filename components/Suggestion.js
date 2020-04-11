import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';
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
    see_more = () => {
        // this.props.navigation.navigate('FilmView', {film:this.props.notification.suggest.film})
        this.props.navigation.navigate('Films', {
              screen: 'FilmView',
              params: { film:this.props.notification.suggest.film  },
});
    };



    render() {
        return (
            <View style={{
                // flexDirection: 'row',
                backgroundColor: '#11ff38',
                borderRadius: 5,
                borderColor: '#155924',
                borderWidth:2.5,
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
                            }}>
                                {this.props.notification.owner.name}</Text>
                    </View>
                    <View style={styles.line} />
                    <View style={{flexDirection: 'row',justifyContent: 'space-between',padding: 5}}>
                        <View style={{flex:1, alignItems:'center'}}>
                            <Image
                                PlaceholderContent={<ActivityIndicator/>}
                                style={{flex:1 , width: 100, height: 100,alignSelf:'center'}}
                                        source={{uri:this.props.notification.suggest.film.poster}}/>
                            <Text style={{fontSize:7}}>{this.props.notification.suggest.film.title}</Text>
                        </View>
                        <View style={{flex:1,}}>
                            <Text style={{fontSize:20, alignSelf: 'center'}}>{this.props.notification.suggest.title}</Text>
                            <Text style={{fontSize:10}}>{this.props.notification.suggest.text}</Text>
                            <TouchableHighlight
                            onPress={this.see_more}
                            >
                            <Text style={{color:'#ff4513'}}>See more...</Text>
                            </TouchableHighlight>
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
        alignSelf:'center',
        backgroundColor: '#051709',
        width:'90%',
        height:1,
        borderRadius:10,
    }

});

export default Film;
