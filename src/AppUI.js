import React from 'react'
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoContext } from './TodoContext';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
import './AppUI.css';

function AppUI() {
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {error && <p>Error al cargar la pagina</p>}
                {loading && <p>Cargando...</p>}
                {(!loading && !searchedTodos.length) && <p>Crea tu primera tarea</p>}

                {searchedTodos.map(todo => (
                    <TodoItem
                        key={todo.text}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.text)}
                        onDelete={() => deleteTodo(todo.text)}
                    />
                ))}
            </TodoList>


            <CreateTodoButton />
        </React.Fragment>
    );
}

export { AppUI };