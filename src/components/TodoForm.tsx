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
        setTitle("");
        push(todoRef, todo);

    };
     return (
        <form>
            <TextField variant="outlined" label="A faire" onChange={handleChange} value={title}/>
            <Button variant="outlined" onClick={addTodo} type="submit">Ajouter</Button>
        </form>
    )
};