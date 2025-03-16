import React, { Component } from "react";
import "./classCounter.scss";
interface State {
  count: number;
}

export class ClassCounter extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = (): void => {
    this.setState((prevState: State) => {
      return {
        count: prevState.count + 1,
      };
    });
  };

  decrement = (): void => {
    this.setState((prevState: State) => {
      return {
        count: prevState.count - 1,
      };
    });
  };

  reset = (): void => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="counter-wrapper">
        <div className="display-section">
          <span className="count-value">{this.state.count}</span>
        </div>
        <div className="controls-section">
          <button className="control-btn increment" onClick={this.increment}>
            Increment
          </button>
          <button className="control-btn decrement" onClick={this.decrement}>
            Decrement
          </button>
          <button className="control-btn reset" onClick={this.reset}>
            Reset
          </button>
        </div>
      </div>
    );
  }
}
