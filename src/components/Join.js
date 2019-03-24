import React, { Component, Fragment } from "react";
import Button from "./Button";
import cap from "../images/cap.svg";
import illustration from "../images/illustration.svg";
import { joinResponse } from "../utils/api.js";

export default class Join extends Component {
  state = {
    fullName: "",
    email: "",
    phone: "",
    selectedRadio: "yes",
    textArea: "",
    checkboxes: {
      sendFutureBeerups: true,
      reminder: false
    }
  };

  handleFormSubmit = async event => {
    event.preventDefault();
    let response = await joinResponse();

    if (response === true) {
      console.log("You have submitted this: ", response);
    } else {
      console.log(response.message);
    }
  };

  handleTextChange = event => {
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

  handleRadioChange = event => {
    let value = event.target.value;

    this.setState(() => ({ selectedRadio: value }));
  };

  handleCheckboxChange = event => {
    let name = event.target.name;

    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  render() {
    return (
      <Fragment>
        <header className="header">
          <div className="header__container">
            <div className="header__left">
              <h1 className="heading heading--primary">Join up!</h1>
            </div>
            <div className="header__right">
              <img src={illustration} className="header__img" alt="logo" />
            </div>
            <img src={cap} className="header__cap" alt="beer cap" />
          </div>
        </header>
        <main className="main">
          <div className="main__container">
            <section className="main__join">
              <h2 className="main__heading text-align-center">
                Quick, join up before we drink all the beer!
              </h2>
              <form className="join__form" onSubmit={this.handleFormSubmit}>
                <h3 className="join__heading">Personal information</h3>
                <label>
                  <input
                    type="text"
                    className="join__input"
                    placeholder="Full name"
                    id="name"
                    value={this.state.fullName}
                    onChange={this.handleTextChange}
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
                    onChange={this.handleTextChange}
                  />
                </label>
                <label>
                  <input
                    type="tel"
                    className="join__input"
                    placeholder="Phone"
                    id="phone"
                    value={this.state.phone}
                    onChange={this.handleTextChange}
                  />
                </label>
                <hr className="join__line" />
                <h3 className="join__heading">RVSP</h3>
                <label className="join__radio-label">
                  <input
                    type="radio"
                    className="join__radio-input"
                    name="rsvp"
                    readOnly
                    value="yes"
                    checked={this.state.selectedRadio === "yes"}
                    onChange={this.handleRadioChange}
                  />{" "}
                  <span className="join__radio-button" />
                  I'm coming!
                </label>
                <label className="join__radio-label">
                  <input
                    type="radio"
                    className="join__radio-input"
                    name="rsvp"
                    readOnly
                    value="maybe"
                    checked={this.state.selectedRadio === "maybe"}
                    onChange={this.handleRadioChange}
                  />{" "}
                  <span className="join__radio-button" />
                  Maybe?
                </label>
                <label className="join__radio-label">
                  <input
                    type="radio"
                    className="join__radio-input"
                    name="rsvp"
                    readOnly
                    value="no"
                    checked={this.state.selectedRadio === "no"}
                    onChange={this.handleRadioChange}
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
                      onChange={this.handleTextChange}
                    />
                  </label>
                </div>
                <hr className="join__line" />
                <label className="join__checkbox-label">
                  <input
                    type="checkbox"
                    className="join__checkbox-input"
                    name="sendFutureBeerups"
                    readOnly
                    value="send info"
                    checked={this.state.checkboxes.sendFutureBeerups}
                    onChange={this.handleCheckboxChange}
                  />{" "}
                  <span className="join__checkbox-button" />
                  Let me know about future beerups!
                </label>
                <label className="join__checkbox-label">
                  <input
                    type="checkbox"
                    className="join__checkbox-input"
                    name="reminder"
                    readOnly
                    value="remind"
                    checked={this.state.checkboxes.reminder}
                    onChange={this.handleCheckboxChange}
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
      </Fragment>
    );
  }
}
