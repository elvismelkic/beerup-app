import React, { Component } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./Card";
import crate from "../images/crate.svg";
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
    return (
      <div>
        {error !== null ? (
          <h1>{error}</h1>
        ) : loading === false ? (
          <main className="main">
            <div className="main__container">
              {/* Darken the background when the modal appears.
                onClick closes opened modal when background is clicked. */}
              <div
                className={`dark-background ${
                  modalBeer ? "dark-background--active" : null
                }`}
                onClick={this.handleCloseModal}
              />
              <section className="main__beer">
                <h2 className="main__heading">Beer</h2>
                <ul className="beer__list">
                  {beer.map(beer => (
                    <li key={beer.id} onClick={() => this.handleClick(beer.id)}>
                      <Card beer={beer} />
                    </li>
                  ))}
                </ul>
                <Modal beer={modalBeer} closeModal={this.handleCloseModal} />
              </section>
              <section className="main__crate">
                <h2 className="main__heading">Crate</h2>
                <ul className="crate__list">
                  <li className="crate__item crate__item--active">One</li>
                  <li className="crate__item">Two</li>
                  <li className="crate__item">Three</li>
                </ul>
                <div className="crate__img-container">
                  <img src={crate} alt="crate" className="crate__img" />
                </div>
                <p className="crate__quote-text">
                  The crate will remain forever empty due to the lack of
                  functionality.
                </p>
                <p className="crate__quote-source">
                  &mdash; Captain Disappointment
                </p>
              </section>
            </div>
          </main>
        ) : (
          <h1>LOADING</h1>
        )}
      </div>
    );
  }
}
