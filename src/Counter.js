import React from 'react';

//on line 9 and 10 i forgot to add () to execute the handlers and so I was not able to fire the callback
//It was a silly mistake

class Counter extends React.Component {
  render() {
    return (
      <div>
        <button onClick={() => this.props.increment()}>Increase</button>
        <button onClick={() => this.props.decrement()}>Decrease</button>
      </div>
    );
  }
}
export default Counter;
