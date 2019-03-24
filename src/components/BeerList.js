import React, { Component, Fragment } from "react";
import Modal from "./Modal";
import Card from "./Card";

export default class BeerList extends Component {
  state = {
    beers: this.props.beers,
    favorites: JSON.parse(sessionStorage.getItem("favorites")) || [],
    modalBeer: null,
    sortBy: "name asc"
  };

  handleSortChange = event => {
    let value = event.target.value;

    this.setState(() => ({ sortBy: value }));
  };

  handleClickCard = beer => {
    this.setState(() => ({ modalBeer: beer }));
  };

  handleToggleFavorite = beer => {
    beer.isFavorite = !beer.isFavorite;

    let newBeers = this.state.beers.map(val =>
      val.id === beer.id ? beer : val
    );
    let newFavorites = beer.isFavorite
      ? this.state.favorites.concat(beer)
      : this.state.favorites.filter(val => val.id !== beer.id);

    sessionStorage.setItem("favorites", JSON.stringify(newFavorites));
    this.setState(() => ({ beers: newBeers, favorites: newFavorites }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ modalBeer: null }));
  };

  componentDidMount() {
    // Update this.state.beers so that its elements (beers) have isFavorite
    // property set to "true" if said element is in this.state.favorites
    // and sort them by name ascending.
    let newBeers = this.state.beers
      .map(beer => {
        beer.isFavorite = this.state.favorites.some(val => val.id === beer.id);

        return beer;
      })
      .sort((currentBeer, nextBeer) => currentBeer.name > nextBeer.name);

    this.setState(() => ({ beers: newBeers }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) {
      let sortedBeers = this.state.beers.sort((currentBeer, nextBeer) => {
        switch (this.state.sortBy) {
          case "name asc":
            return currentBeer.name > nextBeer.name;
          case "name desc":
            return currentBeer.name < nextBeer.name;
          case "abv asc":
            return currentBeer.abv > nextBeer.abv;
          case "abv desc":
            return currentBeer.abv < nextBeer.abv;
          case "ibu asc":
            return currentBeer.ibu > nextBeer.ibu;
          default:
            return currentBeer.ibu < nextBeer.ibu;
        }
      });

      this.setState(() => ({ beers: sortedBeers }));
    }
  }

  render() {
    const { beers, modalBeer, sortBy } = this.state;
    return (
      <Fragment>
        <section className="main__beer">
          <h2 className="main__heading">{this.props.title}</h2>
          <select
            className="main__sort"
            value={sortBy}
            onChange={this.handleSortChange}
          >
            <option className="main__sort-option" value="name asc">
              Name Asc
            </option>
            <option className="main__sort-option" value="name desc">
              Name Desc
            </option>
            <option className="main__sort-option" value="abv asc">
              ABV Asc
            </option>
            <option className="main__sort-option" value="abv desc">
              ABV Desc
            </option>
            <option className="main__sort-option" value="ibu asc">
              IBU Asc
            </option>
            <option className="main__sort-option" value="ibu desc">
              IBU Desc
            </option>
          </select>
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
