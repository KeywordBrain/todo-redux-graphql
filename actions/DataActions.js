import { resolveQueries } from './exchange.js'
import { RECEIVE } from '../constants/ActionTypes'

// this has to receive the params as well as second arg
// so we will be able to dispose of outdated observables
export function executeQuery (query) {
  return dispatch => {
    resolveQueries(query).subscribe(res => {
      dispatch({type: RECEIVE, res, query})
    })
  }
}
