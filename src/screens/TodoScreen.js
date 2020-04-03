import React, { useState, useContext } from 'react';
import { View, StyleSheet, Button, Dimensions } from "react-native";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

import {THEME} from "../theme";
import AppCard from "../components/ui/AppCard";
import EditModal from "../components/EditModal";
import AppTextBold from "../components/ui/AppTextBold";
import AppButton from "../components/ui/AppButton";
import TodoContext from "../context/todo/todoContext";
import ScreenContext from "../context/screen/screenContext";

const TodoScreen = () => {
    const { todos, updateTodo, removeTodo } = useContext(TodoContext);
    const { todoId, changeScreen } = useContext(ScreenContext);
    const [modal, setModal] = useState(false);

    const todo = todos.find(t => t.id === todoId);

    const saveHandler = title => {
        updateTodo(todo.id, title);
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
                <AppButton onPress={() => setModal(true)} color='blue'>
                    Редактировать
                </AppButton>
            </AppCard>
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.GREY_COLOR}
                        onPress={() => changeScreen(null)}
                    >Назад</AppButton>
                </View>
                <View style={styles.button}>
                    <AppButton
                        color={THEME.DANGER_COLOR}
                        onPress={() => removeTodo(todo.id)}
                    >Удалить</AppButton>
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
        width: Dimensions.get('window').width / 3,
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

