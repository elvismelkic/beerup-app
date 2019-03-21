import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import symbol from "../images/symbol.svg";
import logo from "../images/logo.svg";

export default class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav__container">
          <NavLink to="/" className="nav__logo-container" exact>
            <img
              src={symbol}
              className="nav__logo nav__logo-part1"
              alt="logo"
            />
            <img src={logo} className="nav__logo nav__logo-part2" alt="logo" />
          </NavLink>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/"
                className="nav__link"
                exact
                activeClassName="nav__link--active"
              >
                Home
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/favorites"
                className="nav__link"
                exact
                activeClassName="nav__link--active"
              >
                Favorites
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink to="/join" className="nav__link" exact>
                <Button fill={"transparent"} parent={"nav"}>
                  Join
                </Button>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
