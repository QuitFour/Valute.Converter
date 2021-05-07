import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const HatBar = ({title}) => {
    return (
        <View style={styles.hatbar}>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    hatbar: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#BEF574',
        paddingBottom: 10
    },
    text: {
        color: '#858585',
        fontSize: 20
    }
});