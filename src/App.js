import React from 'react';
import Counter from './Counter';

class App extends React.Component {
  state = { counter: 100 };

  handleIncrement = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  handleDecrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  render() {
    return (
      <div className="App">
        <label>{this.state.counter}</label>
        <Counter
          increment={this.handleIncrement}
          decrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;

//2 buttons
//counter
// james_mitchell@troweprice.com
