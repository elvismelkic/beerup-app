import React, { Component } from "react";
import crate from "../images/crate.svg";

export default class Crate extends Component {
  state = {
    activeCrate: "One"
  };

  handleCrateSelect = event => {
    let crate = event.target.textContent;

    this.setState(() => ({ activeCrate: crate }));
  };

  render() {
    const { activeCrate } = this.state;
    return (
      <section className="main__crate">
        <h2 className="main__heading">Crate</h2>
        <ul className="crate__list">
          <li
            className={
              activeCrate === "One"
                ? "crate__item crate__item--active"
                : "crate__item"
            }
            onClick={this.handleCrateSelect}
          >
            One
          </li>
          <li
            className={
              activeCrate === "Two"
                ? "crate__item crate__item--active"
                : "crate__item"
            }
            onClick={this.handleCrateSelect}
          >
            Two
          </li>
          <li
            className={
              activeCrate === "Three"
                ? "crate__item crate__item--active"
                : "crate__item"
            }
            onClick={this.handleCrateSelect}
          >
            Three
          </li>
        </ul>
        <div className="crate__img-container">
          <img src={crate} alt="crate" className="crate__img" />
        </div>
        <p className="crate__quote-text">
          The crate will remain forever empty due to the lack of functionality.
        </p>
        <p className="crate__quote-source">&mdash; Captain Disappointment</p>
      </section>
    );
  }
}
