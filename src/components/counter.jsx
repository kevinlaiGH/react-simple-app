import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    // **setState: update the state, figure out which part of state has changed and based on difference, in sync with virtualDOM
    this.setState({ count: this.state.count + 1 });
  };

  // **render is asynchronous call, happen in some point in the future
  render() {
    return (
      // <span> is modified since this.formatCount changes, update corresp. <span> matches with virtualDOM
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
