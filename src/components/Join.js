import React, { Component } from "react";
import Button from "./Button";
import Modal from "./Modal";
import Card from "./Card";
import crate from "../images/crate.svg";
import illustration from "../images/illustration.svg";
import { fetchBeer } from "../utils/api.js";

export default class Join extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    textArea: ""
  };

  handleChange = event => {
    let target = event.target;

    switch (target.id) {
      case "name":
        this.setState(() => ({ fullName: target.value }));
        break;
      case "email":
        this.setState(() => ({ email: target.value }));
        break;
      case "phone":
        this.setState(() => ({ phone: target.value }));
        break;
      default:
        this.setState(() => ({ textArea: target.value }));
    }
  };

  render() {
    return (
      <main className="main">
        <div className="main__container">
          <section className="main__join">
            <h2 className="main__heading text-align-center">
              Quick, join up before we drink all the beer!
            </h2>
            <form className="join__form">
              <h3 className="join__heading">Personal information</h3>
              <label>
                <input
                  type="text"
                  className="join__input"
                  placeholder="Full name"
                  id="name"
                  value={this.state.fullName}
                  onChange={this.handleChange}
                />
              </label>

              <hr className="join__line" />
              <h3 className="join__heading">Contact information</h3>
              <label>
                <input
                  type="email"
                  className="join__input"
                  placeholder="Email"
                  id="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <input
                  type="tel"
                  className="join__input"
                  placeholder="Phone"
                  id="phone"
                  value={this.state.phone}
                  onChange={this.handleChange}
                />
              </label>
              <hr className="join__line" />
              <h3 className="join__heading">RVSP</h3>
              <label className="join__radio-label">
                <input
                  type="radio"
                  className="join__radio-input"
                  name="rsvp"
                  value="yes"
                  checked={true}
                />{" "}
                <span className="join__radio-button" />
                I'm coming!
              </label>
              <label className="join__radio-label">
                <input
                  type="radio"
                  className="join__radio-input"
                  name="rsvp"
                  value="maybe"
                />{" "}
                <span className="join__radio-button" />
                Maybe?
              </label>
              <label className="join__radio-label">
                <input
                  type="radio"
                  className="join__radio-input"
                  name="rsvp"
                  value="no"
                />{" "}
                <span className="join__radio-button" />
                Can't make it
              </label>
              <div className="join__textarea-container">
                <label>
                  <textarea
                    className="join__textarea"
                    placeholder="Something you'd like to add?"
                    id="phone"
                    rows="5"
                    cols="30"
                    value={this.state.textArea}
                    onChange={this.handleChange}
                  />
                </label>
              </div>
              <hr className="join__line" />
              <label className="join__checkbox-label">
                <input
                  type="checkbox"
                  className="join__checkbox-input"
                  name="future beerups"
                  value="send future"
                />{" "}
                <span className="join__checkbox-button" />
                Let me know about future beerups!
              </label>
              <label className="join__checkbox-label">
                <input
                  type="checkbox"
                  className="join__checkbox-input"
                  name="reminder"
                  value="remind"
                />{" "}
                <span className="join__checkbox-button" />
                Remind me one day before this beerup!
              </label>
              <Button fill={"filled"} parent={"form"}>
                Join up
              </Button>
            </form>
          </section>
        </div>
      </main>
    );
  }
}
