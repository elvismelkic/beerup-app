import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className={"btn btn--" + this.props.fill + " btn--" + this.props.parent}
      >
        {this.props.children}
      </button>
    );
  }
}
