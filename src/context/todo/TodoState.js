import React, { useReducer } from 'react';

import TodoContext from './todoContext';
import { todoReducer }  from './todoReducer';

const TodoState = ({ children }) => {
    const initialState = {
        todos: [
            {id: '1', title: 'Закончить курс по React Native (April)'}
        ]
    };

    const [state, dispatch] = useReducer(todoReducer, initialState);

    return (<TodoContext.Provider value={{
        todos: state.todos
    }}>{ children }</TodoContext.Provider>);
};

export default TodoState;
