import frogBlack from '../assets/froglines.png'
import frogGreen from '../assets/frogicon.png'

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
    <div className="edit-modal-backdrop">
      <div className="edit-box">

        <div className="input-div edit-input-div">
          {/* <div>Edit Box</div> */}

          <div className="input-text-frog">

            <input
              type="text"
              className="todo-input"
              value={editingTodo.text}
              onChange={(e) =>
                setEditingTodo({
                  ...editingTodo,
                  text: e.target.value
                })
              }
            />

            <button
              type="button"
              className="frog-button"
              onClick={() =>
                setEditingTodo({
                  ...editingTodo,
                  frog: !editingTodo.frog
                })
              }
            >
              <img
                className={
                  editingTodo.frog
                    ? 'frog-toggle-img'
                    : 'frog-toggle-img frog-lines'
                }
                src={editingTodo.frog ? frogGreen : frogBlack}
                alt="frog toggle"
              />
            </button>

          </div>

          <div className="expand-section open">

            <div className="range-sliders-box">

              <div className="slider-label-box">
                <label>Tedium {editingTodo.tedium}</label>

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
                  className='slider'
                />
              </div>

              <div className="slider-label-box">
                <label>Difficulty {editingTodo.difficulty}</label>

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
                  className='slider'
                />
              </div>

              <div className="slider-label-box">
                <label>Time {editingTodo.time}</label>

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
                  className='slider'
                />
              </div>

            </div>

            <div className="add-to-list-box">
              <button
                className="add-to-list-button"
                onClick={saveEdit}
              >
                Save
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )

}