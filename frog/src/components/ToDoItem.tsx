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
import Unchecked from '../assets/unchecked.png'
import tickPic from '../assets/tick.png'
import editPic from '../assets/edit.png'
import deletePic from '../assets/delete.png'

export default function TodoItem({
  todo,
  toggleTodo,
  deleteTodo,
  setEditingTodo
}: TodoItemProps) {
  return (
    <div className={`item-box ${todo.completed ? 'completed' : ''}`}>
      <div className="list-item">

        <div className="item-text-box">
          <img
            className={todo.frog ? 'frog-img' : 'asterisk-img'}
            src={todo.frog ? frogPic : asterisk}
          />

          {todo.text}
        </div>

        <button className='checking-button' onClick={() => toggleTodo(todo.idNum)}>
          <img
            className={todo.completed ? 'checked-img' : 'unchecked-img'} 
            src={todo.completed ? tickPic : Unchecked}
            ></img>
          {/* {todo.completed && (
            <img className="tick-img" src={tickPic} />
          )} */}
        </button>

      </div>
      <div className='more-box'>
        <div>Tedium: {todo.tedium}</div>
        <div>Difficulty: {todo.difficulty}</div>
        <div>Time: {todo.time}</div>
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