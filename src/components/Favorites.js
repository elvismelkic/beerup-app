import React, { Component, Fragment } from "react";
import BeerList from "./BeerList";
import Crate from "./Crate";
import cap from "../images/cap.svg";
import illustration from "../images/illustration.svg";

export default class Favorites extends Component {
  state = {
    favorites: JSON.parse(sessionStorage.getItem("favorites")) || []
  };

  render() {
    const { favorites } = this.state;
    return (
      <Fragment>
        <header className="header">
          <div className="header__container">
            <div className="header__left">
              <h1 className="heading heading--primary">Favorites!</h1>
            </div>
            <div className="header__right">
              <img src={illustration} className="header__img" alt="logo" />
            </div>
            <img src={cap} className="header__cap" alt="beer cap" />
          </div>
        </header>
        <main className="main">
          <div className="main__container">
            <BeerList title="My Favorite beers" beers={favorites} />
            <Crate />
          </div>
        </main>
      </Fragment>
    );
  }
}
