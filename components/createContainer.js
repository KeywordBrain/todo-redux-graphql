import React, { Component, PropTypes } from 'react'
import { connect } from 'redux/react'
import { executeQueries } from '../actions/DataActions.js'

class _Data extends Component {
  render () {
    if (this.props && this.props.data && this.Component) {
      return <this.Component {...this.props} {...this.props.data} />
    }

    return <div>No data yet</div>
  }

  componentWillMount () {
    // TODO: pass params to executeQueries as second argument
    // to keep track of changed params for same query and dispose
    // of old observable
    executeQueries(this.queries)(this.props.dispatch)
  }
}

export default function (Component, options) {
  const { queries } = options
  @connect(state => {
    if (!state.data || !state.data.res) {
      return {}
    }

    state = state.data
    const index = state.queries.indexOf(queries)
    if (!~index) {
      return {}
    }
    let localState = {
      data: state.res[index] || null
    }
    return localState
  })
  class Data extends _Data {
    static queries = queries

    constructor () {
      super()

      this.Component = Component
      this.queries = queries
    }
  }
  return Data
}
