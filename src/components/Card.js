import React, { Component } from "react";
import Button from "./Button";
import Modal from "./Modal";
import illustration from "../images/illustration.svg";
import { fetchBeer } from "../utils/api.js";

export default class Card extends Component {
  render() {
    const { beer } = this.props;
    return (
      <div className="beer__card">
        <div className="beer__img-container">
          <img src={beer.image_url} alt="beer logo" className="beer__img" />
        </div>
        <div className="beer__info">
          <p className="beer__name">{beer.name}</p>
          <p className="beer__info-row">
            <span className="beer__info-name">IBU</span>
            <span className="beer__info-value">{beer.ibu}</span>
          </p>
          <p className="beer__info-row">
            <span className="beer__info-name">ABV</span>
            <span className="beer__info-value">{beer.abv}%</span>
          </p>
        </div>
      </div>
    );
  }
}
