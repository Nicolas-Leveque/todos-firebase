import React from 'react';
import {TodoForm} from "./components/TodoForm";
import {TodoList} from "./components/TodoList";
import {Header} from "./components/Header";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="app_main">
            <TodoForm />
            <TodoList />
        </div>
    </div>
  );
}

export default App;
