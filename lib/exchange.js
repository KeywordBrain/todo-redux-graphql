import Rx from 'rx'

export function execQueries (queries, params) {
  // TODO:
  // * compile queries w/ params
  // * check if there is already an observable for these queries and dispose if params change, otherwise just return this observable
  // * create a new observable with an optimistic update if possible, save the observable somewhere together with the queries
  // * split the queries into individual queries before sending to the server, give each query an id and recollect the responses upon arrival
  let res = {}
  Object.keys(queries).forEach(key => {
    res[key] = [
      { text: 'Use Redux',
        marked: false,
        id: 0 },
      { text: 'foo',
        marked: false,
        id: 1 },
      { text: 'bar',
        marked: true,
        id: 2 }
    ]
  })
  return Rx.Observable.just(res)
}
