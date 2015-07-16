// The data reducer receives only the state under
// the "data" property key (such is the behavior of
// all redux reducers). It transforms the data without
// mutation.

import { RECEIVE } from '../constants/ActionTypes'

const initialState = {
  res: [],
  queries: []
}

export default function data(state = initialState, action) {
  switch (action.type) {

  // The RECEIVE action type adds or updates data returned for
  // GraphQL queries. It first creates a shallow copy of the
  // data state (res and queries properties) and then adds
  // or replaces the data for an (already existing or new) set
  // of GraphQL queries.
  // TODO: Investigate if below code can't be optimized by
  // using some kind of map function.
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
