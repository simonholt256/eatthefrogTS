export type Todo = {
  idNum: string
  text: string
  completed: boolean
  tedium: number
  difficulty: number
  time: number
  frog: boolean
}

function arrangeTodos(todos: Todo[], order: string): Todo[] {
  if (order === 'fun') {
    return [...todos].sort(
      (a, b) =>
        a.tedium - b.tedium ||
        a.time - b.time ||
        a.difficulty - b.difficulty
    )
  }

  if (order === 'hard') {
    return [...todos].sort(
      (a, b) =>
        b.difficulty - a.difficulty ||
        b.time - a.time ||
        b.tedium - a.tedium
    )
  }

  if (order === 'easy') {
    return [...todos].sort(
      (a, b) =>
        a.difficulty - b.difficulty ||
        a.time - b.time ||
        a.tedium - b.tedium
    )
  }

  if (order === 'fast') {
    return [...todos].sort(
      (a, b) =>
        a.time - b.time ||
        a.tedium - b.tedium ||
        a.difficulty - b.difficulty
    )
  }

  return todos
}

export function sortTodos(todos: Todo[], mode: string): Todo[] {

  // AS ADDED
  if (mode === 'added') {
    return todos
  }

  // EAT THE FROG
  if (mode === 'frog') {
    const sorted = arrangeTodos(todos, 'hard')

    const frog = sorted.find(todo => todo.frog)
    const others = sorted.filter(todo => !todo.frog)

    return frog ? [frog, ...others] : sorted
  }

  // FROG WITH A CHASER
  if (mode === 'frogChase') {
    const fun = arrangeTodos(
      todos.filter(todo => !todo.frog),
      'fun'
    )

    const frog = todos.find(todo => todo.frog)

    if (!frog) {
      return arrangeTodos(todos, 'hard')
    }

    const firstTwoFun = fun.slice(0, 2)
    const remaining = fun.slice(2)

    return [
      frog,
      ...firstTwoFun,
      ...arrangeTodos(remaining, 'hard')
    ]
  }

  // SNOWBALL
  if (mode === 'snowball') {
    return arrangeTodos(todos, 'fast')
  }

  // ONE FOR ME ONE FOR THEM
  if (mode === 'oneForMe') {

    const sorted = [...todos].sort(
      (a, b) =>
        (a.tedium * a.difficulty) -
        (b.tedium * b.difficulty)
    )

    const easy = sorted.slice(0, Math.ceil(sorted.length / 2))
    const hard = sorted.slice(Math.ceil(sorted.length / 2)).reverse()

    const mixed: Todo[] = []

    for (let i = 0; i < easy.length; i++) {
      mixed.push(easy[i])

      if (hard[i]) {
        mixed.push(hard[i])
      }
    }

    return mixed
  }

  // HUMP
  if (mode === 'hump') {

    const sorted = [...todos].sort(
      (a, b) =>
        (a.difficulty * a.time) -
        (b.difficulty * b.time)
    )

    const front: Todo[] = []
    const back: Todo[] = []

    sorted.forEach((todo, index) => {
      if (index % 2 === 0) {
        front.push(todo)
      } else {
        back.push(todo)
      }
    })

    return [...front, ...back.reverse()]
  }

  return todos
}