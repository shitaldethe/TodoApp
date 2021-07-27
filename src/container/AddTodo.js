import React, { useState } from 'react';
import { setTodos } from '../common/localStorageUtil';
import { useHistory } from "react-router-dom"

const AddTodo = (props) => {

    const history = useHistory();

    const [todoName, setTodoName] = useState('');

    const handleButtonClick = (e) => {
        setTodos(todoName);
        history.push('/');
    }

    return (
        <div>
            <div className='todo-header'>
                <b>
                    Add Todos
                </b>
            </div>
            <div className='todo-body'>
                <input type='text' name='todoName' value={todoName} onChange={e => setTodoName(e.target.value)} />
                <br/>
                <button onClick={handleButtonClick}>
                    Add Todo
                </button>
            </div>
        </div>
    );
};

export default AddTodo;