import React from 'react'
import style from './Footer.module.css'
export default function Footer({completedTodos, totalTodos}) {
  return (
    <div className={style.footer}>
     <span className={style.item}>Completed Todos: {completedTodos}</span>
     <span className={style.item}>Total todos: {totalTodos}</span>
    </div>
  )
}
