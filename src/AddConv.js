import React from  'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export const AddConv = ({ addconv, onRemove }) => {
    return (
            <View style={styles.addconv}>
                <Text>{addconv.title}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
    addconv: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    }
});