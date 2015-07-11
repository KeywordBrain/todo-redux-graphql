import React, { Component, PropTypes } from 'react'
import { connect } from 'redux/react'
import { executeQuery } from '../actions/DataActions.js'

class _Data extends Component {
  render () {
    if (this.props && this.props.data) {

      return this.props.children.map(Child => {
        return <Child {...this.props.data} />
      })
    }

    return <div>No data yet</div>
  }

  componentWillMount () {
    // TODO: pass params to executeQuery as second argument
    // to keep track of changed params for same query and dispose
    // of old observable
    executeQuery(this.query)(this.props.dispatch)
  }
}

export default function (Component, query) {
  @connect(state => {
    debugger
    if (!state.data) {
      return {}  
    };

    const index = state.queries.indexOf(query)
    let localState = {
      data: state.data[index] || null
    }
    debugger
    return localState
  })
  class Data extends _Data {
    static query = query

    constructor () {
      super()

      this.query = query
    }
  }
  return Data
}
