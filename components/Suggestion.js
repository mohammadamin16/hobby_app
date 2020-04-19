import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, TouchableHighlight, TouchableWithoutFeedback, Button} from 'react-native';
import FitImage from 'react-native-fit-image';
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
                backgroundColor: '#87b7ff',
                borderRadius: 5,
                borderColor: '#364966',
                borderWidth:2.5,
                marginBottom: 10,
                }}>
                <View style={{flex: 1, justifyContent: 'space-between'}}>
                    <FitImage
                        // PlaceholderContent={<ActivityIndicator/>}
                        originalWidth={400}
                        originalHeight={400}
                        style={{borderRadius: 200,}}
                        source={{uri:this.props.notification.suggest.film.poster}}/>
                    <View style={[styles.row, {justifyContent: 'space-between',padding: 0}]}>
                        <Image
                            style={{width:30,
                                margin:5,
                                height:30,
                                borderRadius: 15,
                                borderWidth: 1,
                                borderColor:'#000',
                            }}
                            source={{uri:this.props.notification.owner.avatar}}
                            />
                        <Text
                            style={{
                                alignSelf: 'center',
                                padding:10,
                            }}>
                                {this.props.notification.owner.name}</Text>
                    <View style={styles.line} />
                    </View>
                    <View style={{flexDirection: 'column',justifyContent: 'space-between',padding: 5}}>
                        {/*<View style={{flex:1, alignItems:'center'}}>*/}

                        {/*</View>*/}
                        {/*<View style={{flex:1,}}>*/}
                            <Text style={{fontSize:20, alignSelf: 'center'}}>{this.props.notification.suggest.title}</Text>
                            {/*<Text style={{fontSize:10}}>{this.props.notification.suggest.text}</Text>*/}
                            <TouchableHighlight
                            onPress={this.see_more}
                            >
                            <View style={{flexDirection: 'row', justifyContent:'center'}}>
                                <Text style={{color:'#fff', backgroundColor: '#1f3040', borderRadius:5, paddingRight:5, paddingLeft:5}}>{this.props.notification.suggest.film.title}</Text>
                                <Text style={{color:'#ff4513'}}>See more...</Text>
                            </View>
                            </TouchableHighlight>
                        {/*</View>*/}
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
    },
    fitImage: {
        borderRadius: 20,
    },
    fitImageWithSize: {
        height: 100,
        width: 30,
    },

});

export default Film;
