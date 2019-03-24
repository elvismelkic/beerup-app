import React, { Component } from "react";
import Button from "./Button";
import emptyheart from "../images/heart outline.svg";
import heart from "../images/heart solid.svg";

export default class Modal extends Component {
  render() {
    const beer = this.props.beer || null;

    return (
      <div>
        {beer === null ? (
          <div className="modal" />
        ) : (
          <div className="modal modal--active">
            <img
              src={beer.isFavorite ? heart : emptyheart}
              className="modal__heart"
              alt="like heart"
              onClick={() => this.props.toggleFavorite(beer)}
            />
            <button className="modal__exit" onClick={this.props.closeModal}>
              &#10005;
            </button>
            <div className="modal__img-container">
              <img
                src={beer.image_url}
                alt="beer logo"
                className="modal__img"
              />
            </div>
            <div className="modal__info">
              <p className="modal__name margin-bottom-mid">{beer.name}</p>
              <div className="modal__row-container">
                <p className="modal__info-row">
                  <span className="modal__info-name">IBU</span>
                  <span className="modal__info-value">{beer.ibu}</span>
                </p>
                <p className="modal__info-row margin-bottom-mid">
                  <span className="modal__info-name">ABV</span>
                  <span className="modal__info-value">{beer.abv}%</span>
                </p>
              </div>
              <p className="modal__info-row modal__info-description">
                {beer.description.split(".")[0] + "."}
              </p>
              <Button fill={"filled"} parent={"modal"}>
                Add to crate
              </Button>
            </div>
          </div>
        )}
      </div>
    );
  }
}
