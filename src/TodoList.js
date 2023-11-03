import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, addTodosFromApi } from "./actions";
import axios from "axios";
import "./TodoList.css";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    useEffect(() => {
        axios
            .get("https://65410d1945bedb25bfc326b0.mockapi.io/api/v1/todos")
            .then((response) => {
                const apiTodos = response.data.map((item) => ({
                    id: item.id,
                    text: item.name,
                    completed: item.completed, 
                }));
                dispatch(addTodosFromApi(apiTodos));
            })
            .catch((error) => {
                    console.error("Помилка під час відправки запиту до API:", error);
            });
    }, [dispatch]);

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            axios
                .post("https://65410d1945bedb25bfc326b0.mockapi.io/api/v1/todos", {
                    name: newTodo,
                })
                .then((response) => {
                    dispatch(
                        addTodo({
                            id: response.data.id,
                            text: newTodo,
                            completed: false,
                        })
                    );
                    setNewTodo("");
                })
                .catch((error) => {
                    console.error("Помилка при відправленні даних на API:", error);
                });
        }
    };

    const handleToggleTodo = (id) => {
        dispatch(toggleTodo(id));

        axios
            .put(`https://65410d1945bedb25bfc326b0.mockapi.io/api/v1/todos/${id}`, {
                completed: !todos.find((todo) => todo.id === id).completed,
            })
            .then((response) => {
                console.log(`Статус завдання ${id} успішно оновлено на API`);
            })
            .catch((error) => {
                console.error(
                    `Помилка при оновленні статусу завдання ${id} на API:`,
                    error
                );
            });
    };

    return (
        <div>
            <h1>TODO LIST</h1>
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        onClick={() => handleToggleTodo(todo.id)}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
            <div className="new-note">
                    <input
                        type="text"
                        value={newTodo}
                        onChange={handleInputChange}
                        placeholder="New note..."
                    />
                    <button onClick={handleAddTodo}>ADD</button>
            </div>
        </div>
    );
};

export default TodoList;
