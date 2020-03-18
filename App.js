import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';
import Todo from "./src/Todo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = title => {
      setTodos(prev => [...prev, {
          id: Date.now().toString(),
          title
      }]);
  };

  const removeTodo = id => {
      setTodos(prev => prev.filter(todo => todo.id !== id));
  };

  return (
    <View>
      <Navbar title='Todo App' />
      <AddTodo onSubmit={addTodo} />

      <FlatList
          keyExtractor={item => item.id.toString()}
          data={todos}
          renderItem={({ item }) => (
              <Todo todo={item} onRemove={removeTodo} />
          )}
      />

     {/* <View>
          { todos.map(todo => {
              return <Todo key={todo.id} todo={todo} />
          }) }
      </View>*/}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
