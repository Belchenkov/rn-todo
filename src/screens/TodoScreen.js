import React from 'react';
import { View, StyleSheet, Text, Button } from "react-native";

import {THEME} from "../theme";

const TodoScreen = ({ goBack, todo }) => {
    return (
        <View>
            <Text style={styles.title}>{ todo.title }</Text>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <Button
                        title='Назад'
                        color={THEME.GREY_COLOR}
                        onPress={goBack}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Удалить'
                        color={THEME.DANGER_COLOR}
                        onPress={goBack}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    },
    button: {
        width: '40%',
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold'
    }
});

export default TodoScreen;

