import React, { Component, Fragment } from "react";
import Button from "./Button";
import cap from "../images/cap.svg";
import illustration from "../images/illustration.svg";
import { joinResponse } from "../utils/api.js";

export default class Join extends Component {
  state = {
    processing: false,
    response: null,
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
    this.setState(() => ({ processing: true }));

    let serverResponse = await joinResponse();

    if (serverResponse) {
      this.setState(() => ({ processing: false, response: true }));
    } else {
      this.setState(() => ({ processing: false, response: false }));
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
    const {
      processing,
      response,
      fullName,
      email,
      phone,
      selectedRadio,
      textArea,
      checkboxes
    } = this.state;

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
              {processing === true ? (
                <h2 className="main__heading u-text-align-center">
                  Your request is being processed. Please, wait.
                </h2>
              ) : response === null ? (
                <Fragment>
                  <h2 className="main__heading u-text-align-center">
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
                        value={fullName}
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
                        value={email}
                        onChange={this.handleTextChange}
                      />
                    </label>
                    <label>
                      <input
                        type="tel"
                        className="join__input"
                        placeholder="Phone"
                        id="phone"
                        value={phone}
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
                        checked={selectedRadio === "yes"}
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
                        checked={selectedRadio === "maybe"}
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
                        checked={selectedRadio === "no"}
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
                          value={textArea}
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
                        checked={checkboxes.sendFutureBeerups}
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
                        checked={checkboxes.reminder}
                        onChange={this.handleCheckboxChange}
                      />{" "}
                      <span className="join__checkbox-button" />
                      Remind me one day before this beerup!
                    </label>
                    <Button
                      isDisabled={!fullName || !email || !phone}
                      fill={"filled"}
                      parent={"form"}
                    >
                      Join up
                    </Button>
                  </form>
                </Fragment>
              ) : response === true ? (
                <h2 className="main__heading u-text-align-center">
                  Thank you for joining! See you soon!
                </h2>
              ) : (
                <h2 className="main__heading u-text-align-center">
                  Oops, there was a mistake! Please, try again.
                </h2>
              )}
            </section>
          </div>
        </main>
      </Fragment>
    );
  }
}
