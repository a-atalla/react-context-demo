import React, { Component } from 'react';

const { Provider, Consumer } = React.createContext();

export class CounterProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter
    }
  }

  incrementCounter = () => {    
    this.setState((prevState) => ({
      counter: prevState.counter + 1
    }));
  }

  decrementCounter = () => {
    const { counter } = this.state;
    if(counter > 0) {
      this.setState((prevState) => ({
        counter: prevState.counter - 1
      }));
    }
  }

  render() {
    return (
      <Provider value={this.state}>
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