import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo } from "./actions";
import "./TodoList.css";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState("");

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleAddTodo = () => {
        if (newTodo.trim() !== "") {
            dispatch(addTodo(newTodo));
            setNewTodo("");
        }
    };

    const handleToggleTodo = (index) => {
        dispatch(toggleTodo(index));
    };

    return (
        <div>
            <h1>TODO LIST</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li
                        key={index}
                        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
                        onClick={() => handleToggleTodo(index)}
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
