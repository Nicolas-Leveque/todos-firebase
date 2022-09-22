import React from "react";
import { useState, useEffect } from "react";
import { getDatabase, ref, onValue, update, remove } from "firebase/database";
import { Checkbox, Divider, Button } from "@mui/material";
import firebaseApp from "../firebase";

import { Todo } from "../types";

export const TodoList = () => {
    const db = getDatabase(firebaseApp);

    const [ todoList, setTodoList ] = useState<Todo[]>([]);
    const [ doneList, setDoneList ] = useState<Todo[]>([]);

    useEffect(() => {
        const todoRef = ref(db, "/todos");

        onValue(todoRef, (snapshot) => {
            const todos = snapshot.val();
            const newTodoList: Todo[] = [];
            const newDoneList: Todo[] =[];
            for  ( let id in todos ) {
                if ( todos[id].done === false) {
                    newTodoList.push({id, ...todos[id]});
                } else {
                    newDoneList.push({ id, ...todos[id]});
                }
            };
            setTodoList(newTodoList);
            setDoneList(newDoneList);
        });
    }, [db]);
    const handleToogle = (todo: Todo) => {
        const todoRef = ref(db, "/todos/" + todo.id);
        update(todoRef, { done: !todo.done });
    };
    const handleDelete = (todo: Todo) => {
        const todoRef = ref(db, "/todos/" + todo.id);
        remove(todoRef);
    };
    return (
        <div className="list">
            <h3>A faire</h3>
            <Divider />
            {todoList && todoList.map((todo, index) => {
                return (
                    <div className="todo" key={index}>
                        <div className="todo-left">
                            <Checkbox checked={todo.done} onChange={() => handleToogle(todo)}/>
                            <p >{todo.title}</p>
                        </div>
                        <Button variant="outlined" color="error" onClick={() => handleDelete(todo)} >Effacer</Button>
                    </div>
                )
            })}
            <h3>Terminé</h3>
            <Divider />
            {doneList && doneList.map((todo, index) => {
                return (
                    <div className="todo" key={index}>
                        <div className="todo-left">
                            <Checkbox checked={todo.done} onChange={() => handleToogle(todo)}/>
                            <p >{todo.title}</p>
                        </div>
                        <Button variant="outlined" color="error" onClick={() => handleDelete(todo)} >Effacer</Button>
                    </div>
                )
            })}
        </div>
    )
};