import Rx from 'rx'

export function resolveQuery (query) {
  // return observable here
  return Rx.Observable.just([
    { text: 'Use Redux',
      marked: false,
      id: 0 },
    { text: 'foo',
      marked: false,
      id: 1 },
    { text: 'bar',
      marked: true,
      id: 2 }
  ])
}
