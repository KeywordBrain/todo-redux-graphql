import { execQueries } from '../lib/exchange.js'
import { RECEIVE } from '../constants/ActionTypes'

// this has to receive the params as well as second arg
// so we will be able to dispose of outdated observables
export function executeQueries (query) {
  return dispatch => {
    execQueries(query).subscribe(res => {
      dispatch({type: RECEIVE, res, query})
    })
  }
}
