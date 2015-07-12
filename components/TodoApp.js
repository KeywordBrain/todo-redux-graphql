// The App Component renders a Header and MainSection.
// It provides the components with redux action creators.

import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { Connector } from 'redux/react'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import * as TodoActions from '../actions/TodoActions'
import { connect } from 'redux/react'

@connect(state => state)
export default class TodoApp extends Component {
  // MainSection is a Data Component. Hence,
  // it takes care of getting the required todos
  // itself. No need to pass them down as props.
  // We do need, however, to pass down the bound
  // action creators.
  // TODO: Investigate if it wouldn't be better to
  // not pass down action creators and instead have
  // the components that want to use them require them
  // individually.
  render () {
    const { dispatch } = this.props
    const actions = bindActionCreators(TodoActions, dispatch)
    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection actions={actions} />
      </div>
    )
  }
}
