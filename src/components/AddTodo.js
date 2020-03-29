import React, { useState } from 'react'
import {
    StyleSheet,
    View,
    TextInput,
    Alert,
    Button
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import {THEME} from "../theme";
import AppButton from "./ui/AppButton";

const AddTodo = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const pressHandler = () => {
        if (value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('Обязательное поле');
        }
    };

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setValue}
                value={value}
                autoCorrect={false}
                placeholder="Введите название дела..."
                // autoCapitalize="none"
                // keyboardType='number-pad'
            />
            {/*<AntDesign.Button onPress={pressHandler} name="pluscircleo">
                Добавить
            </AntDesign.Button>*/}
            <AppButton onPress={pressHandler}>Добавить</AppButton>
        </View>
    )
};

export default AddTodo;

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginBottom: 15
    },
    input: {
        width: '70%',
        padding: 10,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: THEME.MAIN_COLOR
    }
});
