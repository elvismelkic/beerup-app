import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import BeerList from "./BeerList";
import Button from "./Button";
import Crate from "./Crate";
import cap from "../images/cap.svg";
import illustration from "../images/illustration.svg";
import { fetchBeer } from "../utils/api.js";

export default class Main extends Component {
  state = {
    beers: null,
    loading: true,
    error: null
  };

  updateBeer = async () => {
    this.setState(() => ({ loading: true }));
    try {
      const response = await fetchBeer();

      this.setState(() => ({
        beers: response.filter(
          beer => beer.image_url.indexOf("keg.png") === -1
        ),
        loading: false
      }));
    } catch (error) {
      console.log(error);
      this.setState(() => ({
        error: "There was a problem with your request. Please, try again."
      }));
    }
  };

  componentDidMount() {
    this.updateBeer();
  }

  render() {
    const { beers, loading, error } = this.state;
    return (
      <Fragment>
        <header className="header">
          <div className="header__container">
            <div className="header__left">
              <h2 className="heading heading--secondary">
                The beerster pro 2.0
              </h2>
              <h1 className="heading heading--primary">
                Join our famous beerup!
              </h1>
            </div>
            <div className="header__right">
              <img src={illustration} className="header__img" alt="logo" />
            </div>
            <NavLink to="/join" exact>
              <Button fill={"filled"} parent={"header"}>
                Join beerup
              </Button>
            </NavLink>
            <img src={cap} className="header__cap" alt="beer cap" />
          </div>
        </header>
        {error !== null ? (
          <h1>{error}</h1>
        ) : loading === false ? (
          <main className="main">
            <div className="main__container">
              <BeerList title="Beers" beers={beers} />
              <Crate />
            </div>
          </main>
        ) : (
          <h1>LOADING</h1>
        )}
      </Fragment>
    );
  }
}
