import React, { Component } from "react";

interface State {
  count: number;
}

export class Class1 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      count: 34,
    };
  }

  increment = (): void => {
    this.setState((prevState: State) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount(): void {
    document.title = `clicked ${this.state.count} times`;
  }

  componentDidUpdate(): void {
    document.title = `clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <button className="button button-count">{this.state.count}</button>
        <button className="button" onClick={this.increment}>
          {" "}
          increment
        </button>
      </div>
    );
  }
}
