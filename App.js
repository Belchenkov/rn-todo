import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import Todo from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([
      {id: 1, title: 'text'},
      {id: 2, title: 'text'},
      {id: 3, title: 'text'},
      {id: 4, title: 'text'},
      {id: 5, title: 'text'},
      {id: 6, title: 'text'},
      {id: 7, title: 'text'},
      {id: 8, title: 'text'},
      {id: 9, title: 'text'},
      {id: 10, title: 'text'},
      {id: 11, title: 'text'},
      {id: 12, title: 'text'},
      {id: 13, title: 'text'},
      {id: 14, title: 'text'},
  ]);

  const addTodo = title => {
      setTodos(prev => [...prev, {
          id: Date.now().toString(),
          title
      }]);
  };

  return (
    <ScrollView>
      <Navbar title='Todo App' />
      <AddTodo onSubmit={addTodo} />

      <View>
          { todos.map(todo => {
              return <Todo key={todo.id} todo={todo} />
          }) }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
