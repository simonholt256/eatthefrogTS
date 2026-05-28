import { useEffect, useState } from 'react'

import Header from './components/Header'
import AddTodo from './components/AddToDo'
import TodoList from './components/ToDoList'
import EditModal from './components/EditModal'



type Todo = {
  idNum: string
  text: string
  completed: boolean
  tedium: number
  difficulty: number
  time: number
  frog: boolean
}

export default function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos')
    return saved ? (JSON.parse(saved) as Todo[]) : []
  })

  const [darkMode, setDarkMode] = useState<boolean>(() => {
    return localStorage.getItem('theme') === 'dark'
  })

  const [input, setInput] = useState<string>('')
  const [tedium, setTedium] = useState<number>(5)
  const [difficulty, setDifficulty] = useState<number>(5)
  const [time, setTime] = useState<number>(5)
  const [frog, setFrog] = useState<boolean>(false)

  const [editingTodo, setEditingTodo] = useState<Todo | null>(null)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode)
  }, [darkMode])

  function addTodo(): void {
    if (!input.trim()) return

    const frogAlreadyExists = todos.some(todo => todo.frog)

    if (frog && frogAlreadyExists) {
      alert("Sorry partner. There's already a frog in this here pond")
      return
    }

    const newTodo: Todo = {
      idNum: crypto.randomUUID(),
      text: input,
      completed: false,
      tedium,
      difficulty,
      time,
      frog
    }

    setTodos([...todos, newTodo])

    setInput('')
    setTedium(5)
    setDifficulty(5)
    setTime(5)
    setFrog(false)
  }

  function toggleTodo(id: string): void {
    setTodos(
      todos.map(todo =>
        todo.idNum === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    )
  }

  function deleteTodo(id: string): void {
    setTodos(todos.filter(todo => todo.idNum !== id))
  }

  function saveEdit(): void {
    if (!editingTodo) return

    const frogAlreadyExists = todos.some(todo => {
      return todo.frog && todo.idNum !== editingTodo.idNum
    })

    if (editingTodo.frog && frogAlreadyExists) {
      alert("Sorry partner. There's already a frog in this here pond")
      return
    }

    setTodos(
      todos.map(todo =>
        todo.idNum === editingTodo.idNum ? editingTodo : todo
      )
    )

    setEditingTodo(null)
  }

  return (
    
      <div className="everything-cont">
        <div className="everything">
          <Header
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          <AddTodo
            input={input}
            setInput={setInput}
            tedium={tedium}
            setTedium={setTedium}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            time={time}
            setTime={setTime}
            frog={frog}
            setFrog={setFrog}
            addTodo={addTodo}
          />
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            setEditingTodo={setEditingTodo}
          />

          {editingTodo && (
            <EditModal
              editingTodo={editingTodo}
              setEditingTodo={setEditingTodo}
              saveEdit={saveEdit}
            />
          )}
        </div>
      </div>
    
  )
}
