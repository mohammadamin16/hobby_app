import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text, Button} from 'react-native';

class FilmView extends Component {
    render() {
        return (
            <View style={styles.profile_screen}>
                <Image
                    style={{width:'50%', height:'50%', }}
                    source={{uri:this.props.route.params.film.poster}}
                    />
                <Text>title: {this.props.route.params.film.title}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    profile_screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#4e4283',
        },
    line:{
        backgroundColor: '#ffbf26',
        width:'80%',
        height:10,
        borderRadius:10,
    }
});

export default FilmView;
