import { execQueries } from '../lib/exchange.js'
import { RECEIVE } from '../constants/ActionTypes'

// this has to receive the params as well as second arg
// so we will be able to dispose of outdated observables
export function executeQueries (queries) {
  return dispatch => {
    execQueries(queries).subscribe(res => {
      dispatch({type: RECEIVE, res, queries})
    })
  }
}
