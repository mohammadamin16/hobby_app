import React from 'react';
import styles from './styles';
import {Image, View, Text, TouchableWithoutFeedback} from 'react-native';

const Fav = (props) => {
    return(
        <TouchableWithoutFeedback
            onPress={() => {
                props.navigation.navigate('Films', {
                    screen: 'FilmView',
                    params: {film: props.item},
                });
            }}
        >
            <View style={styles.body}>
                <Image source={{uri:props.item.icon}}
                    style={styles.poster}
                    />
                <Text style={styles.title}>{props.item.title}</Text>
            </View>
        </TouchableWithoutFeedback>
    )
};
export default Fav;