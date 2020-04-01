import React, { useState, useContext } from 'react';
import {View, StyleSheet, Alert} from "react-native";

import Navbar from "./components/Navbar";
import { THEME } from "./theme";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import TodoContext from "./context/todo/todoContext";

const MainLayout = () => {
    const { todos, addTodo, removeTodo, updateTodo } = useContext(TodoContext);
    const [todoId, setTodoId] = useState(null);
    // const [todos, setTodos] = useState([]);

    /*const addTodo = title => {
        setTodos(prev => [...prev, {
            id: Date.now().toString(),
            title
        }]);
    };
*/
    /*const removeTodo = id => {
        const todo = todos.find(t => t.id === id);

        Alert.alert(
            'Удаление элемента',
            `Вы действительно хотите удалить ${todo.title}?`,
            [
                {
                    text: 'Отмена',
                    style: 'cancel',
                },
                {
                    text: 'Удалить',
                    style: 'negative',
                    onPress: () => {
                        setTodoId();
                        setTodos(prev => prev.filter(todo => todo.id !== id));
                    }
                },
            ],
            {cancelable: false},
        );
    };
*/
    /*const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }

            return todo;
        }));
    };*/

    let content = (
        <MainScreen
            openTodo={id => setTodoId(id)}
            todos={todos}
            addTodo={addTodo}
            removeTodo={removeTodo}
        />
    );

    if (todoId) {
        const selectedTodo = todos.find(todo => todo.id === todoId);

        content = <TodoScreen
            onSave={updateTodo}
            onRemove={removeTodo}
            goBack={() => setTodoId(null)}
            todo={selectedTodo}
        />
    }

    return (
        <View>
            <Navbar title='Todo App' />

            <View style={styles.container}>
                { content }
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingHorizontal: THEME.PADDING_HORIZONTAL,
        paddingVertical: 20
    }
});

export default MainLayout;
