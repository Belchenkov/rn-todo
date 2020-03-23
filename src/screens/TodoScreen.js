import React from 'react';
import { View, StyleSheet, Text, Button } from "react-native";

import {THEME} from "../theme";
import AppCard from "../components/ui/AppCard";

const TodoScreen = ({ goBack, todo, onRemove }) => {
    return (
        <View>
            <AppCard style={styles.card}>
                <Text style={styles.title}>{ todo.title }</Text>
                <Button title='Редактировать' />
            </AppCard>
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
                        onPress={() => onRemove(todo.id)}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginBottom: 50,
        padding: 15
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
        width: '40%',
        borderRadius: 10
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 22,
        marginBottom: 20
    }
});

export default TodoScreen;

