import React from 'react';
import {View, StyleSheet, FlatList} from "react-native";

import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";

const MainScreen = ({ todos, addTodo, removeTodo, openTodo }) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => (
                    <Todo
                        todo={item}
                        onOpen={openTodo}
                        onRemove={removeTodo}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default MainScreen;

