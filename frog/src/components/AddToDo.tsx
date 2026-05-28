import { useState } from 'react'

import Plus from '../assets/plus.png'
import frogBlack from '../assets/froglines.png'
import frogGreen from '../assets/frogicon.png'

type AddTodoProps = {
  input: string
  setInput: (value: string) => void

  tedium: number
  setTedium: (value: number) => void

  difficulty: number
  setDifficulty: (value: number) => void

  time: number
  setTime: (value: number) => void

  frog: boolean
  setFrog: (value: boolean) => void

  addTodo: () => void
}

export default function AddTodo({
  input,
  setInput,
  tedium,
  setTedium,
  difficulty,
  setDifficulty,
  time,
  setTime,
  frog,
  setFrog,
  addTodo
}: AddTodoProps) {

  const [inputFocused, setInputFocused] = useState(false)

  return (
    <div className="add-todo-cont">

      <div className="input-div">
        <img
          className={`plus-img ${!inputFocused ? 'visible' : ''}`}
          src={Plus}
        />
        <div className="input-text-frog">
          
          <input
            type="text"
            className="todo-input"
            value={input}
            onFocus={() => setInputFocused(true)}
            onBlur={() => {
              if (!input.trim()) {
                setInputFocused(false)
              }
            }}
            onChange={(e) => setInput(e.target.value)}
            placeholder='What we doing today?'
          />

          <button
            type="button"
            className="frog-button"
            onFocus={() => setInputFocused(true)}
            onBlur={() => {
              if (!input.trim()) {
                setInputFocused(false)
              }
            }}
            onClick={() => setFrog(!frog)}
          >
            <img
              className={frog ? "frog-toggle-img" : "frog-toggle-img frog-lines"}
              src={frog ? frogGreen : frogBlack}
              alt="frog toggle"
            />
          </button>
        </div>

        
          <div className={`expand-section ${inputFocused ? 'open' : ''}`}>
            <div className="range-sliders-box">

              <div className="slider-label-box">
                <label>Tedium {tedium}</label>

                <input
                  type="range"
                  value={tedium}
                  min="1"
                  max="10"
                  onChange={(e) => setTedium(Number(e.target.value))}
                />
              </div>

              <div className="slider-label-box">
                <label>Difficulty {difficulty}</label>

                <input
                  type="range"
                  value={difficulty}
                  min="1"
                  max="10"
                  onChange={(e) => setDifficulty(Number(e.target.value))}
                />
              </div>

              <div className="slider-label-box">
                <label>Time {time}</label>

                <input
                  type="range"
                  value={time}
                  min="1"
                  max="10"
                  onChange={(e) => setTime(Number(e.target.value))}
                />
              </div>

            </div>

            <div className='add-to-list-box'>
              <button
                className='add-to-list-button'
                onClick={addTodo}
              >
                Add to list
              </button>
            </div>
          </div>
        

      </div>
    </div>
  )
}