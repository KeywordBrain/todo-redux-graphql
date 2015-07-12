import { RECEIVE } from '../constants/ActionTypes'

const initialState = {
  res: [],
  queries: []
}

export default function data(state = initialState, action) {
  switch (action.type) {

  case RECEIVE:
    let newState = {
      ...state,
      res: [...state.res],
      queries: [...state.queries]
    }

    let index = newState.queries.indexOf(action.queries)
    if (~index) {
      newState.queries[index] = action.res
    } else {
      newState.queries.push(action.queries)
      newState.res.push(action.res)
    }
    return newState

  default:
    return state
  }
}
