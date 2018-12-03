import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

export class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    }
  }

  incrementCounter = () => {
    const { counter } = this.state;
    this.setState({
      counter: counter + 1
    })
  }

  decrementCounter = () => {
    const { counter } = this.state;
    if(counter > 0) {
      this.setState({
        counter: this.state.counter - 1
      });
    }
  }

  render() {
    return (
      <Provider
        value={{
          ...this.state,
          incrementCounter: this.incrementCounter,
          decrementCounter: this.decrementCounter
        }}
      >
        {this.props.children}
      </Provider>
    )
  }
}

export const withContext = (Component) => {
  return (props) => (
    <Consumer>
      {context => <Component {...props} context={context} />}
    </Consumer>
  );
};