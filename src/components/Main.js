import React, { Component } from "react";
import Button from "./Button";
import Modal from "./Modal";
import illustration from "../images/illustration.svg";
import { fetchBeer } from "../utils/api.js";

export default class Main extends Component {
  state = {
    beer: null,
    loading: true,
    error: null,
    modalBeer: null
  };

  updateBeer = async () => {
    this.setState(() => ({ loading: true }));
    try {
      const response = await fetchBeer();

      this.setState(() => ({
        beer: response.filter(beer => beer.image_url.indexOf("keg.png") === -1),
        loading: false
      }));
    } catch (error) {
      console.log(error);
      this.setState(() => ({
        error: "There was a problem with your request. Please, try again."
      }));
    }
  };

  handleClick = id => {
    const beer = this.state.beer.filter(beer => beer.id === id);

    this.setState(() => ({ modalBeer: beer }));
  };

  handleCloseModal = () => {
    this.setState(() => ({ modalBeer: null }));
  };

  componentDidMount() {
    this.updateBeer();
  }

  render() {
    const { error, loading, beer, modalBeer } = this.state;
    console.log(beer, modalBeer);
    return (
      <div>
        {error !== null ? (
          <h1>{error}</h1>
        ) : loading === false ? (
          <main className="main">
            <div
              className={`dark-background ${
                modalBeer ? "dark-background--active" : null
              }`}
            />
            <section className="main__beer">
              <h2 className="main__heading">Beer</h2>
              <ul className="beer__list">
                {beer.map(beer => (
                  <li
                    key={beer.id}
                    className="beer__card"
                    onClick={() => this.handleClick(beer.id)}
                  >
                    <div className="beer__img-container">
                      <img
                        src={beer.image_url}
                        alt="beer logo"
                        className="beer__img"
                      />
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
                  </li>
                ))}
              </ul>
              <Modal beer={modalBeer} closeModal={this.handleCloseModal} />
            </section>
          </main>
        ) : (
          <h1>LOADING</h1>
        )}
      </div>
    );
  }
}
