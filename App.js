import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Navbar from './src/Navbar';
import AddTodo from './src/AddTodo';

export default function App() {
  return (
    <View>
      <Navbar title='Todo App' />
      <AddTodo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  }
});
