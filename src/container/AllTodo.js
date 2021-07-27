import React from 'react';
import { getTodos } from '../common/localStorageUtil';
import { useHistory } from "react-router-dom"

const AllTodo = (props) => {

    const history = useHistory();

    const handleButtonClick = () => {
        history.push('/todo/add');
    }

    return (
        <div>
            <div className='todo-list'>
                <ul>
                    {getTodos().length > 0 ? getTodos().map(todo => {
                        return (
                            <li>{todo}</li>
                        );
                    }) : (
                        <p>Empty Todos</p>
                    )
                    }
                </ul>
            </div>
            <div className='todo-footer'>
                    <button onClick={handleButtonClick}>
                        Add Todo
                    </button>
            </div>
        </div>
    );
};

export default AllTodo;