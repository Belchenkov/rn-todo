import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import Navbar from './src/components/Navbar';
import MainScreen from "./src/screens/MainScreen";
import TodoScreen from "./src/screens/TodoScreen";

// Load Fonts
async function loadApplication() {
   /* await Font.loadAsync({
        'roboto-regular': require('./assets/fonts/Roboto-Regular.ttf'),
        'roboto-bold': require('./assets/fonts/Roboto-Bold.ttf')
    })*/
}

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [todoId, setTodoId] = useState(null);
  const [todos, setTodos] = useState([
      {id: '1', title: 'Закончить курс по React Native'}
  ]);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={loadApplication}
                onError={err => console.log(err)}
                onFinish={() => setIsReady(true)}
            />
        )
    }

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
