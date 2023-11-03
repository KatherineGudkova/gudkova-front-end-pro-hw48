export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const ADD_TODOS_FROM_API = "ADD_TODOS_FROM_API";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    payload: todo,
});

export const toggleTodo = (id) => ({
    type: TOGGLE_TODO,
    payload: id,
});

export const addTodosFromApi = (todos) => ({
    type: ADD_TODOS_FROM_API,
    payload: todos,
});
