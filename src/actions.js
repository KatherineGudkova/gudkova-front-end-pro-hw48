export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: {
        text,
        completed: false,
    },
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: index,
});
