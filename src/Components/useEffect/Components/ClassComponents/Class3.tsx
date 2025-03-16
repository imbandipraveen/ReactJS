import React, { Component } from "react";

interface State {
  count: number;
}

export class Class3 extends Component<{}, State> {
  private interval: NodeJS.Timeout | null = null;

  constructor(props: {}) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidMount(): void {
    this.interval = setInterval(() => {
      this.setState((prevState: State) => {
        return {
          count: prevState.count + 1,
        };
      });
    }, 1000);
  }

  componentWillUnmount(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    return (
      <div>
        <button className="button button-count">{this.state.count}</button>
      </div>
    );
  }
}
