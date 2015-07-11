import { ADD_TODO, DELETE_TODO, EDIT_TODO, MARK_TODO, MARK_ALL, CLEAR_MARKED, GET_TODOS } from '../constants/ActionTypes'

// old
// const initialState = [{
//   text: 'Use Redux',
//   marked: false,
//   id: 0
// }]

const initialState = {
  data: [],
  queries: []
}

export default function todos(state = initialState, action) {
  console.log('action', action)

  switch (action.type) {
  case ADD_TODO:
    return [{
      id: (state.data.length === 0) ? 0 : state.data[0].id + 1,
      marked: false,
      text: action.text
    }, ...state.data]

  case DELETE_TODO:
    return state.data.filter(todo =>
      todo.id !== action.id
    )

  case EDIT_TODO:
    return state.data.map(todo =>
      todo.id === action.id ?
        { ...todo, text: action.text } :
        todo
    )

  case MARK_TODO:
    return state.data.map(todo =>
      todo.id === action.id ?
        { ...todo, marked: !todo.marked } :
        todo
    )

  case MARK_ALL:
    const areAllMarked = state.data.every(todo => todo.marked)
    return state.data.map(todo => ({
      ...todo,
      marked: !areAllMarked
    }))

  case CLEAR_MARKED:
    return state.data.filter(todo => todo.marked === false)

  case GET_TODOS:
    debugger
    let newState = {
      ...state,
      data: [...state.data],
      queries: [...state.queries]
    }

    let index = newState.queries.indexOf(action.query)
    if (~index) {
      newState.queries[index] = action.data
    } else {
      newState.queries.push(action.query)
      newState.data.push(action.data)
    }
    debugger
    return newState

  default:
    return state
  }
}
