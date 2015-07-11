import { resolveQuery } from './exchange.js'
import { GET_TODOS } from '../constants/ActionTypes'

// this has to receive the params as well as second arg
// so we will be able to dispose of outdated observables
export function executeQuery (query) {
  return dispatch => {
    resolveQuery(query).subscribe(data => {
      dispatch({type: GET_TODOS, data, query})
    })
  };
}
