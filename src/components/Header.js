import React, { Component } from "react";
import Button from "./Button";
import cap from "../images/cap.svg";
import illustration from "../images/illustration.svg";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <h2 className="heading heading--secondary">The beerster pro 2.0</h2>
            <h1 className="heading heading--primary">
              Join our famous beerup!
            </h1>
          </div>
          <div className="header__right">
            <img src={illustration} className="header__img" alt="logo" />
          </div>
          <Button fill={"filled"} parent={"header"}>
            Join beerup
          </Button>
          <img src={cap} className="header__cap" alt="beer cap" />
        </div>
      </header>
    );
  }
}
