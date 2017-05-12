import React, { Component } from 'react'

/*
  The withState higher-order-funtion gives useful abstraction for simple component state updates -
  checkout recompose npm module for more useful abstractions
*/

const withState = (stateName, setter, initialState) => EnhancedComponent =>
  class NewComponent extends Component {
    state = {
      [stateName]: initialState
    }

    render(){
      let setStateFn = func => {
        let newState = func(this.state[stateName])
        this.setState({[stateName]: newState})
      }

      let newProps = {
        [stateName]: this.state[stateName],
        [setter]: setStateFn
      }

      return <EnhancedComponent
        { ...newProps }
      />
    }
}


export default withState
