import React, { useState } from 'react';
// import { Route } from 'react-router-dom';

import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text: text }
    ]);
  };

  const todoUpdateHandler = (todoId: string) => {
    let newTodos = []
    for (let todo of todos) {
      if (todo.id === todoId) {
        console.log(todo)
        todo.text = todo.text.toUpperCase()
      }
      newTodos.push(todo)
    }
    console.log(newTodos)
    setTodos(newTodos)
  }

  const todoDeleteHandler = (todoId: string) => {
    console.log('Delete id: ' + todoId)
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} onDeleteTodo={todoDeleteHandler} onUpdateTodo={todoUpdateHandler} />
    </div>
  );
};

export default App;
