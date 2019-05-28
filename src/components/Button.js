import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button
        className={
          this.props.isDisabled
            ? `btn btn--${this.props.fill} btn--${
                this.props.parent
              } btn--disabled`
            : `btn btn--${this.props.fill} btn--${this.props.parent}`
        }
        disabled={this.props.isDisabled}
      >
        {this.props.children}
      </button>
    );
  }
}
