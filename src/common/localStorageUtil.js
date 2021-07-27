const setTodos = (todo) => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    let mergedTodos = [];
    if (todos && todos.length > 0) {
        mergedTodos = [...todos, todo]
    } else {
        mergedTodos.push(todo);
    }
    localStorage.setItem('todos', JSON.stringify(mergedTodos));
}

const getTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    return todos || [];
}

export {setTodos, getTodos};