import React from "react";
import  { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import firebaseApp from "../firebase";
import { TextField, Button } from "@mui/material";

export const TodoForm = () => {
    const db = getDatabase(firebaseApp);
    const [ title, setTitle ] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const addTodo = (e: React.BaseSyntheticEvent) => {
        e.preventDefault()
        const todoRef = ref(db, "/todos");
        const todo = {
            title,
            done: false
        };
        push(todoRef, todo);
    };
     return (
        <form>
            <TextField variant="outlined" label="A faire" onChange={handleChange}/>
            <Button variant="outlined" onClick={addTodo}>Ajouter</Button>
        </form>
    )
};