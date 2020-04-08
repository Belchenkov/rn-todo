import React, { useReducer, useContext } from 'react';
import { Alert } from "react-native";

import TodoContext from './todoContext';
import { todoReducer }  from './todoReducer';
import {
    ADD_TODO,
    CLEAR_ERROR, FETCH_TODOS,
    HIDE_LOADER,
    REMOVE_TODO,
    SHOW_ERROR,
    SHOW_LOADER,
    UPDATE_TODO
} from "../types";
import ScreenContext from "../screen/screenContext";
import { Http } from "../../http";

const TodoState = ({ children }) => {
    const url = 'https://rn-todo-minin.firebaseio.com';
    const urlTodos = 'https://rn-todo-minin.firebaseio.com/todos.json';

    const initialState = {
        todos: [],
        loading: false,
        error: null
    };

    const { changeScreen } = useContext(ScreenContext);
    const [state, dispatch] = useReducer(todoReducer, initialState);

    const addTodo = async title => {
        const data = await Http.post(urlTodos, { title });

        dispatch({ type: ADD_TODO, title, id: data.name });
    };

    const removeTodo = id => {
        const todo = state.todos.find(t => t.id === id);

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
                    onPress: async () => {
                        changeScreen(null);

                        await Http.delete(`${url}/${id}.json`);

                        dispatch({ type: REMOVE_TODO, id });
                    }
                },
            ],
            {cancelable: false},
        );
    };

    const fetchTodos = async () => {
      showLoader();
      clearError();

      try {
          const data = await Http.get(urlTodos);

          const todos = Object.keys(data).map(key => ({ ...data[key], id: key }));

          dispatch({ type: FETCH_TODOS, todos });
      } catch (e) {
          showError('Ошибка при загрузке данных');
          console.log(e);
      } finally {
          hideLoader();
      }
    };

    const updateTodo = async (id, title) => {
        try {
            await Http.patch(`${url}/${id}.json`, { title });

            dispatch({ type: UPDATE_TODO, id, title });
        } catch (e) {
            showError('Ошибка при загрузке данных');
            console.log(e);
        }
    };

    const showLoader = () => dispatch({ type: SHOW_LOADER });

    const hideLoader = () => dispatch({ type: HIDE_LOADER });

    const showError = error => dispatch({ type: SHOW_ERROR, error });

    const clearError = error => dispatch({ type: CLEAR_ERROR });

    return (
        <TodoContext.Provider
            value={{
                todos: state.todos,
                loading: state.loading,
                error: state.error,
                addTodo,
                removeTodo,
                fetchTodos,
                updateTodo
            }}
        >{ children }</TodoContext.Provider>
    );
};

export default TodoState;
