import React, { Component } from "react";
import Button from "./Button";
import illustration from "../images/illustration.svg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__left">
          <h2 className="heading heading--secondary">The beerster pro 2.0</h2>
          <h1 className="heading heading--primary">Join our famous beerup!</h1>
          <Button class={"filled"}>Join beerup</Button>
        </div>
        <div className="header__right">
          <img src={illustration} className="header__img" alt="logo" />
        </div>
      </div>
    );
  }
}
