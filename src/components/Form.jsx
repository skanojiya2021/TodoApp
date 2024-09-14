import React from 'react'
import { useState } from 'react';
import style from './form.module.css';
export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name:'', done:false});
    
    const handleSubmit =(e) =>{
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name:'', done:false});
    }
  return (
    <div className={style.todoform}>
     <form onSubmit={handleSubmit}>
        <div className={style.container}>
        <input 
        className={style.mordenInput}
        onChange={(e)=>setTodo({name:e.target.value, done: false})}
        value={todo.name}
         type='text'
         placeholder='Enter todo Item'
         />
        <button className = {style.mordenButton}type='submit'>Add</button>
        </div>
        
     </form>
    </div>
  )
}
