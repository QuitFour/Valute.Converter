import React, { useState } from 'react';
import {View, StyleSheet, TextInput, Button, Alert} from 'react-native';

export const Convert = ({ onSubmit }) => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
       if (value.trim()){
            if(isNaN(value)) {
                Alert.alert('Укажите сумму');
            } else {
                onSubmit(value);
                setValue("");
            }
        } else {
            Alert.alert('Укажите сумму');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                placeholder="Напишите сумму в рублях"
            />
            <Button title="Конвертировать" onPress={pressHandler} color="#7FFF00"  />
        </View>
    );
};

const styles = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    input: {
        width: "65%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderBottomColor: "#7FFF00"
    }
});