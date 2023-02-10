import React from 'react'
import { CreateTodoButton } from './CreateTodoButton/CreateTodoButton';
import { TodoCounter } from './TodoCounter/TodoCounter';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoList } from './TodoList/TodoList';
import { TodoSearch } from './TodoSearch/TodoSearch';
// import './App.css';

const defaultTodos = [
  { text: 'Jugar videojuegos', completed: true, delete: true },
  { text: 'Estudiar react', completed: true, delete: false },
  { text: 'Ver Malcom', completed: false, delete: false },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState('');

  // const completedTodos = todos.filter(todo => !!todo.completed).length;
  // const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  };

  const completedTodos = searchedTodos.filter(todo => todo.completed).length;
  const totalTodos = searchedTodos.length;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  console.log('searchedTodos', searchedTodos);
  return (
    <React.Fragment>
      <TodoCounter
        total={totalTodos}
        completed={completedTodos}
      />

      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />


      <TodoList>
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

export default App;
