import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import cap from "../images/cap.svg";
import symbol from "../images/symbol.svg";
import logo from "../images/logo.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import linkedin from "../images/Linked In.svg";
import pinterest from "../images/pininterest.svg";

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__container">
          <img src={cap} className="footer__cap" alt="beer cap" />
          <div className="footer__row">
            <NavLink to="/" className="footer__logo-container" exact>
              <img
                src={symbol}
                className="footer__logo footer__logo-part1"
                alt="logo"
              />
              <img
                src={logo}
                className="footer__logo footer__logo-part2"
                alt="logo"
              />
            </NavLink>
            <ul className="footer__list footer__list--center">
              <li className="footer__item">
                <NavLink to="/" className="footer__link" exact>
                  Home
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/favorites" className="footer__link" exact>
                  Favorites
                </NavLink>
              </li>
              <li className="footer__item">
                <NavLink to="/join" className="footer__link" exact>
                  Join
                </NavLink>
              </li>
            </ul>
            <ul className="footer__list footer__list--end">
              <li className="footer__link footer__link--widen">
                <img
                  src={facebook}
                  className="footer__icon"
                  alt="facebook logo"
                />
              </li>
              <li className="footer__link footer__link--widen">
                <img
                  src={twitter}
                  className="footer__icon"
                  alt="twitter logo"
                />
              </li>
              <li className="footer__link footer__link--widen">
                <img
                  src={linkedin}
                  className="footer__icon"
                  alt="linkedin logo"
                />
              </li>
              <li className="footer__link footer__link--widen">
                <img
                  src={pinterest}
                  className="footer__icon"
                  alt="pinterest logo"
                />
              </li>
            </ul>
          </div>
          <p className="footer__copyright">&copy; 2019 All rights reserved.</p>
        </div>
      </footer>
    );
  }
}
