import TodoItem from '../components/ToDoItem'

type Todo = {
  idNum: string
  text: string
  completed: boolean
  tedium: number
  difficulty: number
  time: number
  frog: boolean
}

type TodoListProps = {
  todos: Todo[]
  toggleTodo: (id: string) => void
  deleteTodo: (id: string) => void
  setEditingTodo: (todo: Todo) => void
}

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  setEditingTodo
}: TodoListProps) {
  return (
    <div className="list-cont">
      <div className="list-div">

        {todos.map(todo => (
          <TodoItem
            key={todo.idNum}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            setEditingTodo={setEditingTodo}
          />
        ))}

      </div>
    </div>
  )
}