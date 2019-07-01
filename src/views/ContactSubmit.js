/*
*   May be implemented some time in the future
*/

import React, { Component } from 'react';
import '../css/contactsubmit.css';

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class Contact extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name: null,
      email: null,
      subject: null,
      message: null,
      formErrors: {
        name: "",
        email: "",
        message: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Name: ${this.state.name}
        Email: ${this.state.email}
        Subject: ${this.state.subject}
        Message: ${this.state.message}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "name":
        formErrors.name = value.length < 3
          ? "minimum 3 characaters required"
          : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "message":
          formErrors.message = value.length < 3
            ? "minimum 3 characaters required"
            : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;
    return (
      <div class="container-fluid" id="topPad">
        <div class="container formPad formText formWidth">
          <div>
            <h2 style={{paddingBottom: "20px"}}>Contact Me</h2>

            <form onSubmit={this.handleSubmit} noValidate>
              <div className="name">
                <label htmlFor="name">Name</label>
                <input
                  className={formErrors.name.length > 0 ? "error" : null}
                  placeholder="Name"
                  type="text"
                  name="name"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.name.length > 0 && (
                  <span className="errorMessage">{formErrors.name}</span>
                )}
              </div>

              <div className="email">
                <label htmlFor="email">Email</label>
                <input
                  className={formErrors.email.length > 0 ? "error" : null}
                  placeholder="Email"
                  type="email"
                  name="email"
                  noValidate
                  onChange={this.handleChange}
                />
                {formErrors.email.length > 0 && (
                  <span className="errorMessage">{formErrors.email}</span>
                )}
              </div>

              <div className="subject">
                <label htmlFor="subject">Subject</label>
                <input
                  placeholder="Subject"
                  type="text"
                  name="subject"
                  noValidate
                  onChange={this.handleChange}
                />
              </div>

              <div className="message">
                <label htmlFor="message">Message</label>
                <textarea
                className={formErrors.message.length > 0 ? "error" : null}
                placeholder="..."
                type="text"
                rows="5"
                name="message"
                noValidate
                onChange={this.handleChange}
                />
                {formErrors.message.length > 0 && (
                  <span className="errorMessage">{formErrors.message}</span>
                )}
              </div>

              <div className="submitButton">
                <button type="submit">Submit</button>
              </div>
            </form>

          </div>
        </div>
      </div>
    );
  }

}

export default ContactSubmit;
