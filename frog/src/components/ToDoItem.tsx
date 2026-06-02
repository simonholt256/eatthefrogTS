import { useState } from 'react'

type Todo = {
  idNum: string
  text: string
  completed: boolean
  tedium: number
  difficulty: number
  time: number
  frog: boolean
}

type TodoItemProps = {
  todo: Todo
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  setEditingTodo: (todo: Todo) => void
}

import frogPic from '../assets/frogicon.png'
import asterisk from '../assets/asterisk.png'
// import Unchecked from '../assets/unchecked.png'
// import tickPic from '../assets/tick.png'
import tick from '../assets/check.png'
import editPic from '../assets/edit.png'
import deletePic from '../assets/delete.png'

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  setEditingTodo
}: TodoItemProps) {

  const [showMore, setShowMore] = useState(false)

  return (
    <div className={`item-box ${todo.completed ? 'completed' : ''}`}>
      <div className="list-item">

        <div
            className="item-text-box"
            onClick={() => setShowMore(!showMore)}
          >
          <img
            className={todo.frog ? 'frog-img' : 'asterisk-img'}
            src={todo.frog ? frogPic : asterisk}
          />

          {todo.text}
        </div>

        <button className='checking-button' onClick={() => toggleTodo(todo.idNum)}>
            <div className='check-box'>
              <img
              className={todo.completed ? 'checked-img' : 'unchecked-img'} 
              src={todo.completed ? tick : ""}
              ></img>
            </div>
          {/* {todo.completed && (
            <img className="tick-img" src={tickPic} />
          )} */}
        </button>

      </div>
      <div className={`more-box ${showMore ? 'show' : ''}`}>
        <div className='rate-item-display'>Tedium: {todo.tedium}</div>
        <div className='rate-item-display'>Difficulty: {todo.difficulty}</div>
        <div className='rate-item-display'>Time: {todo.time}</div>
        <div className="item-buttons">
          <button onClick={() => setEditingTodo(todo)} className='icon-button'>
            <img className="icon-img" src={editPic} />
          </button>

          <button onClick={() => deleteTodo(todo.idNum)} className='icon-button'>
            <img className="icon-img" src={deletePic} />
          </button>
        </div>
      </div>
      

    </div>
  )
}