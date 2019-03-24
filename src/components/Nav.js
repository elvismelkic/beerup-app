import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import symbol from "../images/symbol.svg";
import logo from "../images/logo.svg";

export default class Nav extends Component {
  state = {
    mobileVisible: false
  };

  showMobileNav = () => {
    this.setState(() => ({ mobileVisible: !this.state.mobileVisible }));
  };

  render() {
    return (
      <Fragment>
        <nav className="nav">
          <div className="nav__container">
            <NavLink to="/" exact className="nav__logo-container">
              <img
                src={symbol}
                className="nav__logo nav__logo-part1"
                alt="logo"
              />
              <img
                src={logo}
                className="nav__logo nav__logo-part2"
                alt="logo"
              />
            </NavLink>
            <ul className="nav__list">
              <li className="nav__item">
                <NavLink
                  to="/"
                  exact
                  className="nav__link"
                  activeClassName="nav__link--active"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink
                  to="/favorites"
                  exact
                  className="nav__link"
                  activeClassName="nav__link--active"
                >
                  Favorites
                </NavLink>
              </li>
              <li className="nav__item">
                <NavLink to="/join" exact className="nav__link">
                  <Button fill={"transparent"} parent={"nav"}>
                    Join
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="mobile-nav">
          <button className="mobile-nav__button" onClick={this.showMobileNav}>
            <span
              className={
                this.state.mobileVisible
                  ? "mobile-nav__icon mobile-nav__icon--clicked"
                  : "mobile-nav__icon"
              }
            >
              &nbsp;
            </span>
          </button>
          <div className="mobile-nav__container">
            <NavLink to="/" className="mobile-nav__logo-container" exact>
              <img
                src={symbol}
                className="mobile-nav__logo nav__logo-part1"
                alt="logo"
              />
              <img
                src={logo}
                className="mobile-nav__logo nav__logo-part2"
                alt="logo"
              />
            </NavLink>
            <ul
              className={
                this.state.mobileVisible
                  ? "mobile-nav__list mobile-nav__list--show"
                  : "mobile-nav__list"
              }
            >
              <li className="mobile-nav__item">
                <NavLink
                  to="/"
                  className="mobile-nav__link"
                  exact
                  activeClassName="mobile-nav__link--active"
                  onClick={this.showMobileNav}
                >
                  Home
                </NavLink>
              </li>
              <li className="mobile-nav__item">
                <NavLink
                  to="/favorites"
                  className="mobile-nav__link"
                  exact
                  activeClassName="mobile-nav__link--active"
                  onClick={this.showMobileNav}
                >
                  Favorites
                </NavLink>
              </li>
              <li className="mobile-nav__item">
                <NavLink
                  to="/join"
                  className="mobile-nav__link"
                  exact
                  onClick={this.showMobileNav}
                >
                  <Button fill={"filled"} parent={"mobile-nav"}>
                    Join Beerup
                  </Button>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Fragment>
    );
  }
}
