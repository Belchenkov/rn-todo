import React, { useState } from 'react';
import { View, StyleSheet, Button } from "react-native";

import {THEME} from "../theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";
import AppTextBold from "../components/ui/AppTextBold";

const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
    const [modal, setModal] = useState(false);

    const saveHandler = title => {
        onSave(todo.id, title);
        setModal(false);
    };

    return (
        <View>
            <EditModal
                visible={modal}
                onCancel={() => setModal(false)}
                value={todo.title}
                onSave={saveHandler}
            />
            <AppCard style={styles.card}>
                <AppTextBold style={styles.title}>{ todo.title }</AppTextBold>
                <Button
                    title='Редактировать'
                    onPress={() => setModal(true)}
                />
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

