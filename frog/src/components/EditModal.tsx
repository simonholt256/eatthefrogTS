type Todo = {
  idNum: string
  text: string
  completed: boolean
  tedium: number
  difficulty: number
  time: number
  frog: boolean
}

type EditModalProps = {
  editingTodo: Todo
  setEditingTodo: (todo: Todo | null) => void
  saveEdit: () => void
}

export default function EditModal({
  editingTodo,
  setEditingTodo,
  saveEdit
}: EditModalProps) {
  return (
    <div className="edit-box edit-display">
      <div className="edit-input-div">

        <input
          value={editingTodo.text}
          onChange={(e) =>
            setEditingTodo({
              ...editingTodo,
              text: e.target.value
            })
          }
        />

        <input
          type="range"
          value={editingTodo.tedium}
          min="1"
          max="10"
          onChange={(e) =>
            setEditingTodo({
              ...editingTodo,
              tedium: Number(e.target.value)
            })
          }
        />

        <input
          type="range"
          value={editingTodo.difficulty}
          min="1"
          max="10"
          onChange={(e) =>
            setEditingTodo({
              ...editingTodo,
              difficulty: Number(e.target.value)
            })
          }
        />

        <input
          type="range"
          value={editingTodo.time}
          min="1"
          max="10"
          onChange={(e) =>
            setEditingTodo({
              ...editingTodo,
              time: Number(e.target.value)
            })
          }
        />

        <div>
          <label>this is my frog</label>

          <input
            type="checkbox"
            checked={editingTodo.frog}
            onChange={(e) =>
              setEditingTodo({
                ...editingTodo,
                frog: e.target.checked
              })
            }
          />
        </div>

        <button onClick={saveEdit}>
          Save
        </button>

      </div>
    </div>
  )
}