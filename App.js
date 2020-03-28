import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';

import Navbar from './src/components/Navbar';
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

async function loadApplication() {
    await Font.loadAsync({
        'gloria-regular': require('./assets/fonts/GloriaHallelujah-Regular.ttf')
    });
}

export default function App() {
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
      {id: '1', title: 'Закончить курс по React Native'}
  ]);

  const addTodo = title => {
      setTodos(prev => [...prev, {
          id: Date.now().toString(),
          title
      }]);
  };

  const removeTodo = id => {
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
                  }},
          ],
          {cancelable: false},
      );
  };

  const updateTodo = (id, title) => {
        setTodos(old => old.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }

            return todo;
        }));
  };

  let content = (<MainScreen
      openTodo={id => setTodoId(id)}
      todos={todos}
      addTodo={addTodo}
      removeTodo={removeTodo}
  />);

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
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
