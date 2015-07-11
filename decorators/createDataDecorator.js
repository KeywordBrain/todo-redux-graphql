function getDisplayName (Component) {
  return Component.displayName || Component.name || 'Component'
}

export default function createDataDecorator(React, Data) {
  const { Component } = React

  return function connect(select) {
    return DecoratedComponent => class DataDecorator extends Component {
      static displayName = `Data(${getDisplayName(DecoratedComponent)})`
      static DecoratedComponent = DecoratedComponent

      shouldComponentUpdate(nextProps) {
        return this.props !== nextProps
      }

      render() {
        return (
          <Data select={state => select(state, this.props)}>
            {stuff => <DecoratedComponent {...stuff} {...this.props} />}
          </Data>
        )
      }
    }
  }
}