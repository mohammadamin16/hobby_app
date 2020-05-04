import React from 'react';
import {TouchableWithoutFeedback, View, Text, Image} from 'react-native';
import { get_friends } from '../../api/accounts';
import styles from './styles';

const Frined = (props) => {
    return(
        <TouchableWithoutFeedback
                onPress={() => {
                    props.navigation.navigate('People', {
                        screen: 'UserView',
                        params: {user: item},
                    });
                }}
            >
                <View style={styles.body}>
                    <Image source={{uri:props.item.avatar}}
                           style={styles.avatar}
                    />
                   <Text>@{props.item.username}</Text>
                </View>
            </TouchableWithoutFeedback>
    )
};
export default Frined;