import React, { Component } from "react";

interface State {
  x: number;
  y: number;
}

export class Class2 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      x: 0,
      y: 0,
    };
  }

  logMousePosition = (e: MouseEvent): void => {
    this.setState({ x: e.clientX, y: e.clientY });
  };

  componentDidMount(): void {
    window.addEventListener("click", this.logMousePosition);
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount(): void {
    window.removeEventListener("click", this.logMousePosition);
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div>
        <h1>
          X -<button className="button button-count">{this.state.x}</button> Y-
          <button className="button button-count">{this.state.y}</button>
        </h1>
      </div>
    );
  }
}
