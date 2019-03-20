import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button className={"btn btn--" + this.props.class}>
        {this.props.children}
      </button>
    );
  }
}
