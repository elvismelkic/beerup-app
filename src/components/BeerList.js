import React, { Component, Fragment } from "react";
import Modal from "./Modal";
import Card from "./Card";

export default class BeerList extends Component {
  state = {
    beers: this.props.beers,
    favorites: JSON.parse(sessionStorage.getItem("favorites")) || [],
    modalBeer: null
  };

  handleClickCard = beer => {
    this.setState(() => ({ modalBeer: beer }));
  };

  handleToggleFavorite = beer => {
    beer.isFavorite = !beer.isFavorite;

    let newBeers = this.state.beers.map(val =>
      val.id === beer.id ? beer : val
    );
    let newFavorites = this.state.favorites;

    newFavorites = beer.isFavorite
      ? newFavorites.concat(beer)
      : newFavorites.filter(val => val.id !== beer.id);

    sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
    this.setState(() => ({ beers: newBeers, favorites: newFavorites }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ modalBeer: null }));
  };

  render() {
    const { beers, favorites, modalBeer } = this.state;

    return (
      <Fragment>
        {/* Darken the background when the modal appears.
            onClick closes opened modal when background is clicked. */}
        <div
          className={`dark-background ${
            modalBeer ? "dark-background--active" : null
          }`}
          onClick={this.handleCloseModal}
        />
        <section className="main__beer">
          <h2 className="main__heading">{this.props.title}</h2>
          <ul className="card__list">
            {beers ? (
              beers.map(beer => (
                <li key={beer.id} onClick={() => this.handleClickCard(beer)}>
                  <Card beer={beer} />
                </li>
              ))
            ) : (
              <div />
            )}
          </ul>
          <Modal
            beer={modalBeer}
            closeModal={this.handleCloseModal}
            toggleFavorite={this.handleToggleFavorite}
          />
        </section>
      </Fragment>
    );
  }
}
