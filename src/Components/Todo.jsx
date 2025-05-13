import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask, deleteTask } from '../Store';

export const Todo = () => {
    const task = useSelector((state) => state.task);
    const [data, setData] = useState('');


    const dispatch = useDispatch();
    const handleDataDelete = (id) => {
        return dispatch(deleteTask(id))
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(addTask(data))
        return setData('')
    }

    return (
        <div className="todo-container">
            <div className="todo-app">
                <h1>
                    <i className="fa-regular fa-pen-to-square"></i> Todo App With Redux
                </h1>
                <div className="todo-input">
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" id="input-box" placeholder="Add a new Task" value={data} onChange={(e) => setData(e.target.value)} />
                        <button type="submit">Add Task</button>
                    </form>
                </div>
                <ul id="list-container">
                    {task?.map((task, index) => (
                        <li key={index}>
                            <span>{index}: {task}</span>
                            <button className="delete-btn" onClick={() => handleDataDelete(index)}>
                                <i className="fa-solid fa-trash-can"></i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
