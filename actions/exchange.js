import Rx from 'rx'

export function resolveQueries (queries) {
  // return observable here
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
