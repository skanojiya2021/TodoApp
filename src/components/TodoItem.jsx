import React from 'react'
import style from './todoitem.module.css'
export default function TodoItem({item, todos, setTodos}) {
  const handleDelete = (item) =>{
    setTodos(todos.filter((todo)=> todo!==item))
  }
  const handleClick = (name) => {
    const newArray = todos.map((todo) =>
        todo.name === name ?
     {...todo, done: !todo.done}
     : todo )
    setTodos(newArray);
}
const className = item.done ? style.completed:''
    return (
    <div className={style.item}>
        <div className={style.itemName}>
            <span 
            className={className}
            onClick={()=> handleClick(item.name)}>{item.name}</span>
        <span>
                <button 
                onClick={()=>handleDelete(item)}
                className={style.deletButton}>X</button>
            </span>
        </div>
            <hr className={style.line}></hr>
    </div>
  )
}
