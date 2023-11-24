import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        addToDo: (state, action) => {
            const { text, priority } = action.payload;
            const newTodo = {
                id: new Date().toISOString(),
                text,
                priority,
            };
            state.todos.push(newTodo);
        },
        removeToDo: (state, action) => {
            const { id } = action.payload;
            state.todos = state.todos.filter(todo => todo.id !== id);
        },
    },
});


export const { addToDo, removeToDo } = todoSlice.actions;


export default todoSlice.reducer; 