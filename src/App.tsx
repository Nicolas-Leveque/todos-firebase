import React from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {Header} from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <TodoForm />
        <TodoList />
    </div>
  );
}

export default App;
