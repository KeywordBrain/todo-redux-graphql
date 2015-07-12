// The Data class is the base component for every
// data component that wraps a UI component (container).
// The Data class itself should never be used directly.
// Instead, one should use the exported default function
// (and call it createContainer when importing), to
// create a container.
// A underlying UI component is wraped twice. First by
// the Data component. Its job is to declare the UI
// components data needs (queries) and to request data
// matching those needs. Secondly, now the Data component
// is itself wrapped by redux. This way, the data can
// flow back via redux (and can do so continously, e.g.
// when receives messages in a chat application).

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

  // TODO: Check if this is really the earlierst in the
  // lifecycle we can fire off these queries. It would be
  // better if we could ask to the queries even before
  // react start mounting the component. Ideally, we could
  // have the data ready before the component first mounts.
  componentWillMount () {
    // TODO: pass params to executeQueries as second
    // argument to keep track of changed params for same
    // query and dispose of old observable
    executeQueries(this.queries)(this.props.dispatch)
  }
}

export default function (Component, options) {
  const { queries } = options
  // The redux connect decorator wraps the Data class
  // (below). The select function passed to it makes
  // sure to only pass the data down to the Data component
  // that matches its queries.
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
  // The Data class extends the _Date base class. It
  // dynamically (because we are in a function) adds
  // the graphql queries and the Component that should
  // be wrapped.
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
