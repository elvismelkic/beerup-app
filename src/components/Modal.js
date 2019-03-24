import React, { Component } from "react";
import Button from "./Button";
import emptyheart from "../images/heart outline.svg";
import heart from "../images/heart solid.svg";

export default class Modal extends Component {
  componentDidMount() {
    // Close modal when escape key is pressed.
    document.addEventListener(
      "keydown",
      event => (event.keyCode === 27 ? this.props.closeModal() : null),
      false
    );
  }

  componentWillUnmount() {
    document.addEventListener(
      "keydown",
      event => (event.keyCode === 27 ? this.props.closeModal() : null),
      false
    );
  }
  render() {
    const beer = this.props.beer || null;

    return (
      <div className="modal">
        {/* Darken the background when the modal appears.
            onClick closes opened modal when background is clicked. */}
        <div
          className={`modal__dark-background ${
            beer ? "modal__dark-background--active" : null
          }`}
          onClick={this.props.closeModal}
        />
        {beer === null ? (
          <div className="modal__container" />
        ) : (
          <div className="modal__container modal__container--active">
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
              <p className="modal__name u-margin-bottom-mid">{beer.name}</p>
              <div className="modal__row-container">
                <p className="modal__info-row">
                  <span className="modal__info-name">IBU</span>
                  <span className="modal__info-value">{beer.ibu}</span>
                </p>
                <p className="modal__info-row u-margin-bottom-mid">
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
