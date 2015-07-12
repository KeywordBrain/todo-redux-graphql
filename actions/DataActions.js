import { execQueries } from '../lib/exchange.js'
import { RECEIVE } from '../constants/ActionTypes'

// TODO: This action creator has to receive the params as well
// as second argument so we will be able to dispose of outdated
// observables (which should probably be managed by the exchange).
export function executeQueries (queries, params = {}) {
  return dispatch => {
    execQueries(queries, params).subscribe(res => {
      dispatch({type: RECEIVE, res, queries})
    })
  }
}
