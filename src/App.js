import React, { Component } from 'react';
import { withContext } from './counterContext';

class App extends Component {
  render() {
    const { context } = this.props;
    
    return (
      <div>
        <h2>Counter is {context.counter}</h2>
        
        <button onClick={context.incrementCounter}>+</button>
        <button onClick={context.decrementCounter}>-</button>
      </div>
    );
  }
}

export default withContext(App);
