import React, { Component } from "react";
import emptyheart from "../images/heart outline.svg";
import heart from "../images/heart solid.svg";

export default class Card extends Component {
  render() {
    const { beer } = this.props;
    return (
      <div className="card">
        <img
          src={beer.isFavorite ? heart : emptyheart}
          className="card__heart"
          alt="like heart"
        />
        <div className="card__img-container">
          <img src={beer.image_url} alt="beer logo" className="card__img" />
        </div>
        <div className="card__info">
          <p className="card__name">{beer.name}</p>
          <p className="card__info-row">
            <span className="card__info-name">IBU</span>
            <span className="card__info-value">{beer.ibu}</span>
          </p>
          <p className="card__info-row">
            <span className="card__info-name">ABV</span>
            <span className="card__info-value">{beer.abv}%</span>
          </p>
        </div>
      </div>
    );
  }
}
