import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from "react-native";

const Todo = ({ todo, onRemove, onOpen }) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => onOpen(todo.id)}
            onLongPress={() => onRemove(todo.id)}
        >
            <View style={styles.todo}>
                <Text style={styles.title}>{ todo.title }</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Todo;

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10
    },
    title: {
        fontFamily: 'roboto'
    }
});
